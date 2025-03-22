<script setup lang="ts">
import { useSessionStore } from "@/stores/session";
import type { ResolverValues } from "@/utils/types/forms";
import { Form, type FormResolverOptions } from "@primevue/forms";
import { Button, Checkbox, InputText, Message } from "primevue";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import { ref } from "vue";

const toast = useToast();
const session = useSessionStore();
const updateFormValues = ref({
  name: session.name,
  phone: session.phone,
  email: session.email,
  password: "",
  passwordCheck: "",
  seePassword: false,
});

function resolver({ values }: FormResolverOptions) {
  const errors: Record<string, ResolverValues[]> = {
    name: [],
    phone: [],
    email: [],
    password: [],
    passwordCheck: [],
  };

  if (!values.userName)
    errors.name.push({ type: "required", message: "Se requiere un nombre." });
  if (!values.phone)
    errors.phone.push({
      type: "required",
      message: "Se requiere un número de teléfono.",
    });
  if (!values.e_mail)
    errors.email.push({ type: "required", message: "Se requiere un email." });
  if (!values.password)
    errors.password.push({
      type: "required",
      message: "Se requiere una contraseña.",
    });
  if (!values.email)
    errors.email.push({ type: "required", message: "Se requiere un email." });

  if (values.password.length < 8)
    errors.password.push({
      type: "required",
      message: "La contraseña tiene que tener mínimo 8 carácteres.",
    });
  if (values.passwordCheck.length < 8)
    errors.passwordCheck.push({
      type: "required",
      message: "La contraseña tiene que tener mínimo 8 carácteres.",
    });

  if (values.password != values.passwordCheck) {
    errors.password.push({
      type: "required",
      message: "Las contraseñas no coinciden.",
    });
    errors.passwordCheck.push({
      type: "required",
      message: "Las contraseñas no coinciden.",
    });
  }

  return {
    values,
    errors,
  };
}

function onFormSubmit({ valid }: { valid: boolean }) {
  if (valid) {
    updateInfo();
  }
}

async function updateInfo() {
  try {
    const message: string = "Pendiente de actualizar";
    toast.add({
      severity: "success",
      summary: message,
      life: 2000,
    });
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
      :updateFormValues
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
            name="userName"
            type="text"
            placeholder="Nombre:"
            class="w-1xl"
            v-model="updateFormValues.name"
          />
          <Message
            v-if="$form.name?.invalid"
            severity="error"
            size="small"
            variant="simple"
            >{{ $form.name.error?.message }}</Message
          >
        </div>
        <div
          id="container"
          class="w-1xl flex flex-col justify-center items-center"
        >
          <InputText
            name="phone"
            type="number"
            placeholder="Número de teléfono:"
            class="w-1xl"
            v-model="updateFormValues.phone"
          />
          <Message
            v-if="$form.phone?.invalid"
            severity="error"
            size="small"
            variant="simple"
            >{{ $form.phone.error?.message }}</Message
          >
        </div>
        <div
          id="container"
          class="w-1xl flex flex-col justify-center items-center"
        >
          <InputText
            name="e_mail"
            type="email"
            placeholder="Correo electrónico:"
            class="w-1xl"
            v-model="updateFormValues.email"
          />
          <div>
            <Checkbox v-model="updateFormValues.seePassword" binary />
            <label for="togglePassword">Ver contraseña</label>
          </div>
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
            v-model="updateFormValues.password"
          />
          <Message
            v-if="$form.password?.invalid"
            severity="error"
            size="small"
            variant="simple"
            >{{ $form.password.error?.message }}</Message
          >
          <div
            id="container"
            class="w-1xl flex flex-col justify-center items-center"
          >
            <InputText
              name="passwordCheck"
              type="password"
              placeholder="Confirmar contraseña:"
              class="w-1xl"
              v-model="updateFormValues.passwordCheck"
            />
            <Message
              v-if="$form.passwordCheck?.invalid"
              severity="error"
              size="small"
              variant="simple"
              >{{ $form.passwordCheck.error?.message }}</Message
            >
          </div>
          <Button
            type="submit"
            severity="secondary"
            label="Guardar cambios"
            class="w-full sm:w-56"
          />
        </div>
      </div>
    </Form>
  </div>
</template>

<style lang="css"></style>
