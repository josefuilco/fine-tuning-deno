import { Application } from "oak";
import router from "./routes/main.routes.ts";

const app = new Application();
const PORT = 3000;

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: PORT });
