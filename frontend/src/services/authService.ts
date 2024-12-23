import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getIdToken,
  signOut,
} from "firebase/auth";

// 注册用户
export const registerUser = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

// 登录用户
export const loginUser = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

// 获取用户的 ID Token
export const getUserToken = async () => {
  const user = auth.currentUser;
  if (!user) throw new Error("No user is logged in");
  const token = await getIdToken(user);
  return token;
};

// 登出用户
export const logoutUser = async () => {
  await signOut(auth);
};
