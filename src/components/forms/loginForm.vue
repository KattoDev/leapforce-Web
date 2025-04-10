<script setup lang="ts">
import { User } from "@/models/User";
import router from "@/router";
import { useSessionStore } from "@/stores/session";
import { useTaskStore } from "@/stores/tasks";
import type { ResolverValues } from "@/utils/types/forms";
import { Form, type FormResolverOptions } from "@primevue/forms";
import { Button, InputText, Message } from "primevue";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import { ref } from "vue";

const toast = useToast();

const loginFormValues = ref({
  email: "",
  password: "",
});

function resolver({ values }: FormResolverOptions) {
  const errors: Record<string, ResolverValues[]> = {
    email: [],
    password: [],
  };

  if (!values.email)
    errors.email.push({ type: "required", message: "Se requiere un email." });

  if (!values.password)
    errors.password.push({
      type: "required",
      message: "Se requiere una contraseña.",
    });

  if (values.password.length < 8)
    errors.password.push({
      type: "minimum",
      message: "La contraseña debe tener al menos 8 caracteres.",
    });

  return {
    values,
    errors,
  };
}

function onFormSubmit({ valid }: { valid: boolean }) {
  if (valid) {
    attemptLogin();
  }
}

async function attemptLogin() {
  try {
    const attempt: User = new User();

    attempt.email = loginFormValues.value.email;

    const message: string = await attempt.Login(loginFormValues.value.password);

    const session = useSessionStore();
    session.getAndSetUser(attempt.uid);
    useTaskStore().getTasks(session.uid);

    toast.add({
      severity: "success",
      summary: message,
      life: 2000,
    });
    setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
  } catch (error) {
    toast.add({
      severity: "error",
      summary: error as string,
      life: 3000,
    });
  }
}
</script>

<template>
  <div>
    <Toast />

    <Form
      v-slot="$form"
      :loginFormValues
      :resolver
      @submit="onFormSubmit"
      class="grid lg:grid-cols-1 gap-4 w-full"
    >
      <div class="flex flex-col justify-center items-center gap-4">
        <div
          id="container"
          class="w-1xl flex flex-col justify-center items-center"
        >
          <InputText
            name="email"
            type="email"
            placeholder="Correo:"
            class="w-1xl"
            v-model="loginFormValues.email"
          />
          <Message
            v-if="$form.email?.invalid"
            severity="error"
            size="small"
            variant="simple"
            >{{ $form.email.error?.message }}</Message
          >
        </div>
        <div
          id="container"
          class="w-1xl flex flex-col justify-center items-center"
        >
          <InputText
            name="password"
            type="password"
            placeholder="Contraseña:"
            class="w-1xl"
            v-model="loginFormValues.password"
          />
          <Message
            v-if="$form.password?.invalid"
            severity="error"
            size="small"
            variant="simple"
            >{{ $form.password.error?.message }}</Message
          >
        </div>
        <Button
          type="submit"
          severity="secondary"
          label="Iniciar Sesión"
          class="w-full sm:w-56"
        />
      </div>
    </Form>
  </div>
</template>
