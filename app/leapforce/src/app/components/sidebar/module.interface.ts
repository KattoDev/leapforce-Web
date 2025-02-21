/**
 * Interface for the module node used in sidebar
 */
interface moduleNode {
  name: string;
  children?: moduleButton[];
}

interface moduleButton {
  icon: string;
  name: string;
  route: string;
}

export default moduleNode;
