import OpenAI from "openai";

const client = new OpenAI({
  apiKey: "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",
});

export const createFineTune = async function (fileId: string) {
  try {
    const response = await client.fineTuning.jobs.create({
      training_file: fileId,
      model: "gpt-3.5-turbo",
      suffix: "question-answer-01",
    });
    return response;
  } catch (error) {
    return {
      status: 400,
      data: `${error}`,
    };
  }
};

export const listFineTune = async function () {
  try {
    const response = await client.fineTuning.jobs.list({ limit: 10 });
    return response;
  } catch (error) {
    return {
      status: 400,
      data: `${error}`,
    };
  }
};

export const retrieveFineTune = async function (fineJobId: string) {
  try {
    const response = await client.fineTuning.jobs.retrieve(fineJobId);
    return response;
  } catch (error) {
    return {
      status: 400,
      data: `${error}`,
    };
  }
};

export const cancelFineTune = async function (fineJobId: string) {
  try {
    const response = await client.fineTuning.jobs.cancel(fineJobId);
    return response;
  } catch (error) {
    return {
      status: 400,
      data: `${error}`,
    };
  }
};

export const deleteModelFineTune = async function (modelId: string) {
  try {
    const response = await client.models.del(modelId);
    return response;
  } catch (error) {
    return {
      status: 400,
      data: `${error}`,
    };
  }
};
