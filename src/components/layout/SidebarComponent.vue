<script setup lang="ts">
import router from "@/router";
import { useSessionStore } from "@/stores/session";
import dashboardContent from "@/utils/helpers/dashboardContent";
import routeRedirect from "@/utils/helpers/routeRedirect";
import type { sidebarModule } from "@/utils/types/sidebar";
import { PanelMenu, SpeedDial } from "primevue";
import { onMounted, ref, type Ref } from "vue";

const sidebar: Ref<{
  userIsAdmin: boolean;
  items: sidebarModule[];
}> = ref({
  userIsAdmin: false,
  items: [],
});

const SPEED_DIAL = ref([
  {
    label: "logout",
    icon: "pi pi-sign-out",
    command: () => {
      alert("logout");
    },
  },
  {
    label: "profile",
    icon: "pi pi-user",
    command: () => {
      routeRedirect.goTo("/dashboard/profile");
    },
  },
]);

onMounted(async () => {
  if (useSessionStore().isAdmin) {
    sidebar.value.items = dashboardContent.ADMIN_SIDEBAR;
  } else {
    sidebar.value.items = dashboardContent.ADMIN_SIDEBAR;
  }
});
</script>

<template>
  <menu>
    <div id="app-name" class="font-megrim">
      <p @click="router.push('/dashboard')">LEAPFORCE</p>
    </div>
    <PanelMenu :model="sidebar.items" />

    <SpeedDial
      :model="SPEED_DIAL"
      direction="up"
      style="position: absolute; left: calc(50% - 2rem); bottom: 0"
      class="mb-3"
    />
  </menu>
</template>

<style scoped>
menu {
  height: inherit;
  position: relative;

  #app-name {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;

    p {
      font-size: 2em;
    }
  }

  .module::after {
    content: "";
    display: flex;
    height: 1px;
    width: inherit;
    margin: 20px 0 0 0;
    background-color: var(--secondary-900);
  }
}
</style>
