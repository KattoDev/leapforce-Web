export function formatDate(day: number, month: number, year: number) {
  let formatedMonth: string = "";

  switch (month + 1) {
    case 1:
      formatedMonth = "enero";
      break;
    case 2:
      formatedMonth = "febrero";
      break;
    case 3:
      formatedMonth = "marzo";
      break;
    case 4:
      formatedMonth = "abril";
      break;
    case 5:
      formatedMonth = "mayo";
      break;
    case 6:
      formatedMonth = "junio";
      break;
    case 7:
      formatedMonth = "julio";
      break;
    case 8:
      formatedMonth = "agosto";
      break;
    case 9:
      formatedMonth = "septiembre";
      break;
    case 10:
      formatedMonth = "octubre";
      break;
    case 11:
      formatedMonth = "noviembre";
      break;
    case 12:
      formatedMonth = "diciembre";
      break;
    default:
      formatedMonth = "ERROR";
      break;
  }

  return `${day + 1} de ${formatedMonth} del ${year}`;
}

export function getGreeting(): string {
  const localhour: number = new Date().getHours();

  if (localhour >= 7 && localhour < 12) {
    return "Buenos dias ⛅";
  } else if (localhour >= 12 && localhour < 18) {
    return "Buenas tardes 🌞";
  } else {
    return "Buenas noches 🌛";
  }
}
