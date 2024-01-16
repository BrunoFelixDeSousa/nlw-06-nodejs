import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController"
import { CreateTagContoller } from "./controllers/CreateTagContoller";
import { ensureAdmin } from "./middlewares/ensureAdmin";

export const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagContoller()

router.post("/users", ensureAdmin, createUserController.handle)
router.post("/tags", createTagController.handle)