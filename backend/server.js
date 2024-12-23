//Requires
const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");

const app = express();
const port = 3001;

// Firebase 初始化
const serviceAccount = require("./firebaseServiceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

// 中间件
app.use(cors()); // 允许跨域
app.use(express.json()); // 解析 JSON 数据
app.use(express.urlencoded({ extended: true })); // 解析表单数据

// 示例路由：测试接口
app.get("/test", (req, res) => {
  res.json({ message: "Hello from the Backend!Testing nodemon..." });
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
