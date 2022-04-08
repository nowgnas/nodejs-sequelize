import { Router } from "express";

import { userService } from "../services/userService";

const userRouter = Router();

// router는 기본 mysql 쿼리를 사용한 것과 같습니다.

userRouter.get("/getAllData", async (req, res, next) => {
  // const data = await
  const data = await userService.findAllData();
  res.status(200).json(data);
});

userRouter.get("/insert", async (req, res, next) => {
  const data = await userService.insertData();
  console.log(data);
  res.status(200).json(data);
});

export { userRouter };
