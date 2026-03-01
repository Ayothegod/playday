import app from "./app.js";
import logger from "./core/logger/winston.logger.js";
import morganMiddleware from "./core/logger/morgan.logger.js";
import parsedEnv from "./core/config/parsedEnv.js";

app.use(morganMiddleware);

const startServer = () => {
  app.listen(parsedEnv.PORT || 3001, () => {
    logger.info("⚙️  Server is running on port: " + parsedEnv.PORT);
  });
};

startServer();

process.on("unhandledRejection", (err) => {
  logger.error("Unhandled Rejection: " + err);
  process.exit(1);
});

process.on("uncaughtException", (err) => {
  logger.error("Uncaught Exception: " + err);
  process.exit(1);
});
