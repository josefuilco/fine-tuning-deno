import { Router } from "oak";
import * as controller from "../controllers/main.controllers.ts";

const router = new Router();

router.get("/", ({ response }) => {
  console.log("Puerto: 3000");
  response.body = "Hello World!!";
});

// Ruta con el metodo POST para probar si funciona la API
router.post("/api/test", controller.Test);

// Ruta con el metodo POST para transformar de csv a jsonl
router.post("/api/transform-data", controller.TransformData);

//#region files-routes
router.post("/api/upload-file", controller.UploadFile);

router.get("/api/list-files", controller.ListFiles);

router.get("/api/retrieve-file/:fileId", controller.RetrieveFile);

router.delete("/api/delete-file/:fileId", controller.DeleteFile);
//#endregion

router.post("/api/create-fine-tune/:fileId", controller.CreateFineTune);

router.get("/api/list-fine-tune", controller.listFineTune);

router.get("/api/retrieve-fine-tune/:fineJobId", controller.retrieveFineTune);

router.post("/api/cancel-fine-tune/:fineJobId", controller.cancelFineTune);

router.delete(
  "/api/delete-model-fine-tune/:modelId",
  controller.deleteModelFineTune
);

export default router;
