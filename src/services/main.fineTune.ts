import OpenAI from "openai";

const client = new OpenAI({
  apiKey: "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",
});

export const createFineTune = async function (fileId: string) {
  try {
    const response = await client.fineTuning.jobs.create({
      training_file: fileId,
      model: "davinci-002",
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
