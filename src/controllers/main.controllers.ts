import { Response } from "oak";
import * as Service from "../services/main.services.ts";
import * as FineTune from "../services/main.fineTune.ts";

//#region Interfaces
interface file {
  fileId: string;
}
interface fineJob {
  fineJobId: string;
}
interface model {
  modelId: string;
}
//#endregion

export function Test({ response }: { response: Response }) {
  response.body = "Test ok";
}

export async function TransformData({ response }: { response: Response }) {
  try {
    await Service.transformData();
    response.status = 200;
    response.body = "Datos Transformados Exitosamente";
  } catch (error) {
    console.error("Error en Transformalos: ", error);
    response.status = 500;
    response.body = "Error al transformar datos.";
  }
}

//#region file
export async function UploadFile({ response }: { response: Response }) {
  const res = await Service.uploadFile();
  response.body = res;
}

export async function ListFiles({ response }: { response: Response }) {
  const res = await Service.listFiles();
  response.body = res;
}

export async function RetrieveFile({
  params,
  response,
}: {
  params: file;
  response: Response;
}) {
  const id = params.fileId;
  const res = await Service.retrieveFile(id);
  response.body = res;
}

export async function DeleteFile({
  params,
  response,
}: {
  params: file;
  response: Response;
}) {
  const id = params.fileId;
  const res = await Service.deleteFile(id);
  response.body = res;
}
//#endregion

//#region fine-tuning
export async function CreateFineTune({
  params,
  response,
}: {
  params: file;
  response: Response;
}) {
  const id = params.fileId;
  const res = await FineTune.createFineTune(id);
  response.body = res;
}

export async function listFineTune({ response }: { response: Response }) {
  const res = await FineTune.listFineTune();
  response.body = res;
}

export async function retrieveFineTune({
  params,
  response,
}: {
  params: fineJob;
  response: Response;
}) {
  const id = params.fineJobId;
  const res = await FineTune.retrieveFineTune(id);
  response.body = res;
}

export async function cancelFineTune({
  params,
  response,
}: {
  params: fineJob;
  response: Response;
}) {
  const id = params.fineJobId;
  const res = await FineTune.cancelFineTune(id);
  response.body = res;
}

export async function deleteModelFineTune({
  params,
  response,
}: {
  params: model;
  response: Response;
}) {
  const id = params.modelId;
  const res = await FineTune.createFineTune(id);
  response.body = res;
}
//#endregion
