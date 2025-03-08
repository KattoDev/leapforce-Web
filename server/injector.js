async function fillUsers() {
  for (let index = 0; index < 60; index++) {
    fetch("http:localhost:4444/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `usuario ${index}`,
        phone: Math.random() * (3229999999 - 3000000000) + 3000000000,
        email: `mail${index}@email.com`,
        team: Math.random() * (6 - 1) + 1,
        password: `${Math.random()}`,
        isAdmin: Math.random().toFixed(),
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status.toString());
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
}

async function clearUsers() {
  for (let index = 2; index < 2000; index++) {
    fetch(`http:localhost:4444/users/${index}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status.toString());
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
}
