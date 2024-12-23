const admin = require("firebase-admin");
const serviceAccount = require("../firebaseServiceAccountKey.json");

// 检查是否已经初始化
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

module.exports = admin; // 导出 admin 实例
