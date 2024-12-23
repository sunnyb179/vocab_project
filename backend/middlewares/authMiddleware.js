const admin = require("../config/firebase");

exports.verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // 获取 Bearer Token
  console.log("Received Token:", token);

  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  try {
    // 验证 Firebase Token
    const decodedToken = await admin.auth().verifyIdToken(token);
    console.log("Decoded Token:", decodedToken); // 打印解码的 Token
    req.user = decodedToken; // 将解码后的用户信息传递到下一个中间件
    next();
  } catch (error) {
    console.error("Token verification failed:", error.message);
    res.status(401).json({ error: "Invalid or expired token" });
  }
};
