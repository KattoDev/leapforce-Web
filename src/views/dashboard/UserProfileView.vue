<script setup lang="ts">
import DashboardBase from "@/components/layout/DashboardBase.vue";
import ModuleName from "@/components/layout/moduleName.vue";
import ProfileForm from "@/components/forms/profileForm.vue";
</script>

<template>
  <DashboardBase>
    <div class="content">
      <ModuleName module-name="tu perfil" />
      <ProfileForm />
    </div>
  </DashboardBase>
</template>

<style scoped>
.sidebar,
.content {
  border-radius: 10px;
}

.content {
  background-color: var(--p-primary-50);
  box-shadow: 0 0 12px var(--p-secondary-200);
  border-radius: 10px;
  overflow: hidden;
}
</style>
