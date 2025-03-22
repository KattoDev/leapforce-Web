export interface ModuleList {
  name: string;
  children?: ModuleButtonList[];
}

interface ModuleButtonList {
  name: string;
  route: string;
}

export interface sidebarModule {
  label?: string;
  icon?: string;
  items?: sidebarModule[];
  command?: () => void;
}
