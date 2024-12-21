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
app.get("/hello", (req, res) => {
  res.json({ message: "Hello from the Backend!" });
});

// 示例路由：添加用户到 Firestore
app.post("/add-user", async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await db.collection("users").add({ name, email });
    res
      .status(200)
      .json({ id: newUser.id, message: "User added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 示例路由：从 Firestore 获取用户
app.get("/users", async (req, res) => {
  try {
    const snapshot = await db.collection("users").get();
    const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
