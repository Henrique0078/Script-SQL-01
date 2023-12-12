import { Router } from "express";
import { migracao } from "./Controller/AutomaticController";

const router = Router();

router.get("/banquinho", new migracao().init);

export{router};