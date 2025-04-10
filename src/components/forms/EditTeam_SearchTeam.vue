<script setup lang="ts">
import { Form, type FormResolverOptions } from "@primevue/forms";
import { Button, InputText, Message, Toast, useToast } from "primevue";
import { ref } from "vue";

const toast = useToast();
const initialValues = ref({
  teamName: "",
});

const resolver = ({ values }: FormResolverOptions) => {
  const errors: Record<string, { message: string }[]> = {};

  if (!values.teamName) {
    errors.teamName = [{ message: "Este campo es requerido" }];
  }

  return {
    errors,
  };
};

const onFormSubmit = ({ valid }: { valid: boolean }) => {
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

  <Form
    v-slot="$form"
    :initialValues
    :resolver
    :validateOnValueUpdate="false"
    :validateOnBlur="true"
    :validateOnMount="['teamName']"
    @submit="onFormSubmit"
    class="flex flex-row gap-4 w-full"
  >
    <div class="flex flex-col gap-1 w-3xl">
      <InputText
        name="teamName"
        type="text"
        placeholder="equipo a editar:"
        fluid
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
      label="Submit"
      class="w-40 h-9"
    />
  </Form>
</template>
