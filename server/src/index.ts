import app from "./app";

app.listen(app.get("port"), () => {
  console.log("\x1b[32m[INIT]\x1b[0m SERVER STARTED");
});
