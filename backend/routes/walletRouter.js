import express from "express";
import {
  // adminAuthMiddleWare,
  authMiddleWare,
} from "../middlewares/authMiddleWare.js";
import {
  clientUpdateWallet,
  getWallet,
} from "../controllers/walletController.js";

const walletRouter = express.Router();

walletRouter.get("/", authMiddleWare, getWallet);
walletRouter.put("/update", authMiddleWare, clientUpdateWallet);

// walletRouter.get("/getWallets", adminAuthMiddleWare, getWallet);

export { walletRouter };
