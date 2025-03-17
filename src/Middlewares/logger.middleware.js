// using winston
import winston from "winston";
// configuration of logger using winston
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "request-logging" },
  transports: [new winston.transports.File({ filename: "log.txt" })],
});

const loggerMiddleware = async (req, res, next) => {
  // using winston
  if (!req.url.includes("signin")) {
    const logData = `${req.url}-${JSON.stringify(req.body)}`;
    logger.info(logData);
  }
  next();
};

export default loggerMiddleware;
