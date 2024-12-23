const express = require("express");
const { getUserProfile } = require("../controllers/userController");
const { verifyToken } = require("../middlewares/authMiddleware");

const router = express.Router();

// 获取用户资料路由
router.get("/profile", verifyToken, getUserProfile);

module.exports = router;
