import app from "./app";

app.listen(app.get("port"), () => {
  console.log("[INIT] SERVER STARTED");
});
