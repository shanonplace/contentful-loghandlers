import chalk from "chalk";

export const requestLogger = (config) => {
  config.metadata = { startTime: Date.now() }; // Set the request start time
  return config;
};

export const responseLogger = (response) => {
  response.config.metadata.endTime = Date.now(); // Set the request end time
  response.duration =
    response.config.metadata.endTime - response.config.metadata.startTime; // Calculate duration

  const { headers } = response;
  const cacheResult = headers["x-cache"];
  const requestId = headers["x-contentful-request-id"];
  const sizeInKb = (headers["content-length"] / 1024).toFixed(2);
  const cacheColor = cacheResult === "HIT" ? chalk.green : chalk.red;

  console.log(
    chalk.yellow(
      `Contentful Request ID ==> ${requestId}\n` +
        `Request timing ==> ${response.duration} ms\n` +
        `Response from cache ==> ${cacheColor(cacheResult)}\n` +
        `Query Path ==> ${chalk.blue(response.request.path)}\n` +
        `Size ==> ${sizeInKb} Kb\n` +
        "====================================================================================\n"
    )
  );
  return response;
};
