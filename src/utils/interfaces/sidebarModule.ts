export interface ModuleList {
  name: string
  children?: ModuleButtonList[]
}

interface ModuleButtonList {
  name: string
  route: string
}
