// Requires
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const admin = require("./config/firebase"); // 确保路径正确

const app = express();
const port = 3001;

// 中间件
app.use(cors()); // 允许跨域
app.use(express.json()); // 解析 JSON 数据
app.use(express.urlencoded({ extended: true })); // 解析表单数据

// 示例路由：测试接口
app.get("/test", (req, res) => {
  res.json({ message: "Hello from the Backend! Testing nodemon..." });
});

// 用户相关路由
app.use("/api/users", userRoutes);

// 捕获未找到的路由
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// 捕获全局错误（可选）
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
