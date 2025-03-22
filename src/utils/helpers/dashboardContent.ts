import type { sidebarModule } from "@/utils/types/sidebar";
import routeRedirect from "../helpers/routeRedirect";

const main: string = "/dashboard/";

const ADMIN_SIDEBAR: sidebarModule[] = [
  {
    label: "Gestion de equipos",
    items: [
      {
        label: "Miembros del equipo",
        icon: "pi pi-address-book",
        items: [
          {
            label: "Listar",
            icon: "pi pi-list",
            command: () => {
              routeRedirect.goTo(`${main}members-management/list`);
            },
          },
          {
            label: "Editar información",
            icon: "pi pi-user-edit",
            command: () => {
              routeRedirect.goTo(`${main}members-management/edit`);
            },
          },
        ],
      },
      {
        label: "Equipos de trabajo",
        icon: "pi pi-users",
        items: [
          {
            label: "Listar",
            icon: "pi pi-list",
            command: () => {
              routeRedirect.goTo(`${main}teams-management/list`);
            },
          },
          {
            label: "Administrar",
            icon: "pi pi-cog",
            command: () => {
              routeRedirect.goTo(`${main}teams-management/edit`);
            },
          },
        ],
      },
    ],
  },
  {
    label: "General",
    items: [
      {
        label: "Tareas y proyectos",
        icon: "pi pi-file",
        items: [
          {
            label: "Gestion de tareas",
            icon: "pi pi-file",
            command: () => {
              routeRedirect.goTo(`${main}tasks-management`);
            },
          },
          {
            label: "Gestion de proyectos",
            icon: "pi pi-folder",
            command: () => {
              routeRedirect.goTo(`${main}projects-management`);
            },
          },
        ],
      },
    ],
  },
];

export default { ADMIN_SIDEBAR };
