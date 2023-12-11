import { Router } from "express";
import { TrocaController } from "./Controller/TrocaController";

const router = Router();

router.get("/bora", new TrocaController().troca);

export{router};