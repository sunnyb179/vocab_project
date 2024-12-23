"use client";

import { useState, useEffect } from "react";
import { auth } from "../firebase";

export default function HomePage() {
  const [currentUser, setCurrentUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Welcome to Vocab Project</h1>
      {currentUser ? (
        <p>Welcome back, {currentUser.email}!</p>
      ) : (
        <p>Please login or register to access your account.</p>
      )}
    </div>
  );
}
