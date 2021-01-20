import { Router, Request, Response } from "express";

export interface IRouteController {
  router: Router;
  path: string;
  runService(req: Request, resp: Response): Promise<any>;
  InitializeGet(): void;
  InitializePost(): void;
  InitializeDelete(): void;
  InitializePut(): void;
}
