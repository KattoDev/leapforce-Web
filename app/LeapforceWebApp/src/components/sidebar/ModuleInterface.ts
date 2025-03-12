export interface ModuleList {
  name: string
  children?: ModuleButtonList[]
}

interface ModuleButtonList {
  icon: string
  name: string
  route: string
}
