// 用户相关业务逻辑
exports.getUserProfile = (req, res) => {
  const { uid, email } = req.user; // 从验证后的用户中获取信息
  res.json({
    message: "User profile fetched successfully",
    uid,
    email,
  });
};
