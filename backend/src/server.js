import Hapi, { server } from "@hapi/hapi";
import routes from "./routes";

const start = async () => {
  const server = Hapi.Server({
    port: 8000,
    host: "localhost",
  });

  routes.forEach((element) => {
    return server.route(element);
  });

  await server.start();
  console.log(`Server is listneing on 8000`);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

start();
