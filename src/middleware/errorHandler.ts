import { Request, Response, NextFunction } from "express";
import { error as errorResponse } from "../utils/response";

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  const status = err.status || 500;
  const message = err.message || "Internal server error";
  res.status(status).json(errorResponse(message, err.data));
}
