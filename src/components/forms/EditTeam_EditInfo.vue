<script setup lang="ts">
import { FirebaseService } from "@/services/FirebaseService";
import { Form, type FormResolverOptions } from "@primevue/forms";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Button, InputText, Message, Toast, useToast } from "primevue";
import { ref } from "vue";

const toast = useToast();

const searchInitialValues = ref({
  teamName: "",
});

const editorInitialValues = ref({
  teamId: "",
  teamName: "",
});

const searchResolver = ({ values }: FormResolverOptions) => {
  const errors: Record<string, { message: string }[]> = {};

  if (!values.teamName) {
    errors.teamName = [{ message: "Este campo es requerido" }];
  }

  return {
    errors,
  };
};

async function searchonFormSubmit({ valid }: { valid: boolean }) {
  if (valid) {
    const col = collection(FirebaseService.db, "teams");

    const q = query(
      col,
      where("name", "==", searchInitialValues.value.teamName)
    );

    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      toast.add({
        severity: "error",
        summary: `No se encontró ${searchInitialValues.value.teamName}`,
        life: 3000,
      });
      return;
    }

    editorInitialValues.value.teamId = snapshot.docs[0].id;
    editorInitialValues.value.teamName = snapshot.docs[0].data().name;
  }
}

const editorResolver = ({ values }: FormResolverOptions) => {
  const errors: Record<string, { message: string }[]> = {};

  if (!values.teamName) {
    errors.teamName = [{ message: "Este campo es requerido" }];
  }

  return {
    errors,
  };
};

const editoronFormSubmit = ({ valid }: { valid: boolean }) => {
  if (valid) {
    toast.add({
      severity: "success",
      summary: ":)",
      life: 3000,
    });
  }
};
</script>
<template>
  <Toast />

  <section class="mb-5" id="search-team">
    <Form
      v-slot="$form"
      :initialValues="searchInitialValues"
      :resolver="searchResolver"
      :validateOnValueUpdate="false"
      :validateOnBlur="true"
      @submit="searchonFormSubmit"
      class="flex flex-row gap-4 w-full"
    >
      <div class="flex flex-col gap-1 w-3xl">
        <InputText
          name="teamName"
          type="text"
          placeholder="Equipo a editar:"
          fluid
          v-model="searchInitialValues.teamName"
        />
        <Message
          v-if="$form.teamName?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.teamName.error.message }}</Message
        >
      </div>
      <Button
        type="submit"
        severity="secondary"
        label="Buscar"
        class="w-40 h-9"
      />
    </Form>
  </section>

  <section id="edit-team" v-if="editorInitialValues.teamId">
    <Form
      v-slot="$form"
      :initialValues="editorInitialValues"
      :resolver="editorResolver"
      :validateOnValueUpdate="false"
      :validateOnBlur="true"
      @submit="editoronFormSubmit"
      class="flex flex-row gap-4 w-full"
    >
      <div class="flex flex-col gap-1 w-3xl">
        <InputText
          name="teamName"
          type="text"
          placeholder="Nombre del equipo:"
          fluid
          v-model="editorInitialValues.teamName"
        />
        <Message
          v-if="$form.teamName?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.teamName.error.message }}</Message
        >
      </div>
      <Button
        type="submit"
        severity="secondary"
        label="Editar información"
        class="w-40 h-12"
      />
    </Form>
  </section>
</template>
