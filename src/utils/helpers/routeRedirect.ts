import router from "@/router";

function goTo(route: string) {
  router.push(route);
}

export default { goTo };
