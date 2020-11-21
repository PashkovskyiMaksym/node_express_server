import { Router } from "express";
import userRegister from "./userRegister";
import userGetAll from "./userGetAll";
import userGetById from "./userGetById";
import userUpdateById from "./userUpdateById";
import userDeleteById from "./userDeleteById";
import userDeleteAll from "./userDeleteAll";

const router = Router();

router.post("/", userRegister);  // POST localhost:5000/user
router.get("/", userGetAll);  // GET localhost:5000/user
router.get("/:userId", userGetById);  // GET localhost:5000/user/userId
router.patch("/:userId", userUpdateById);  // PATCH localhost:5000/user/
router.delete("/:userId", userDeleteById);  // DELETE localhost:5000/user/
router.delete("/", userDeleteAll);  // DELETE localhost:5000/user/


export default router;

