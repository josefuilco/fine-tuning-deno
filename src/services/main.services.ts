import { parse } from "csv"; // Libreria para manejar archivos CSV
import OpenAI from "openai"; // Libreria de OpenAI

const currentDir = Deno.cwd(); // Para posicionarme en la ruta actual
const CSV_PATH = `src/shared/tu_archivo.csv`; // Ruta del CSV
const JSONL_PATH = `${currentDir}/src/shared/tu_archivo.jsonl`; // Ruta del JSONL
const client = new OpenAI({
  apiKey: "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",
}); // La llave del cliente para
const fileURL = new URL(`file://${JSONL_PATH}`); // Creo una URL para poder usar fetch

// Esta funcion transforma los datos de csv a jsonl
export const transformData = async function () {
  const CSV_DATA: string = await Deno.readTextFile(CSV_PATH);
  const PARSED_DATA: string[][] = await parse(CSV_DATA, undefined);

  const JSONL_DATA: string = PARSED_DATA.map((row) => {
    const [question, answer] = row;
    // console.log(question, answer);
    const JSON_DATA = `{"prompt": "${question}", "completion": "${answer} END"}`;
    return JSON_DATA;
  }).join("\r\n");

  await Deno.writeTextFile(JSONL_PATH, JSONL_DATA);
};

// Funcion para poder acceder a mi jsonl para comenzar con mi fine-tuning
export const uploadFile = async function () {
  const response = await client.files.create({
    file: await fetch(fileURL),
    purpose: "fine-tune",
  });
  return response;
};

export const listFiles = async function () {
  console.log("Ejecución exitosa!");
  const response = await client.files.list();
  return response;
};

export const retrieveFile = async function (fileId: string) {
  try {
    const response = await client.files.retrieve(fileId);
    return response;
  } catch (error) {
    return `${error}`;
  }
};

export const deleteFile = async function (fileId: string) {
  try {
    const response = await client.files.del(fileId);
    return response;
  } catch (error) {
    return `${error}`;
  }
};
