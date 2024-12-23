"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/test")
      .then((res) => {
        console.log("Response status:", res.status); // 调试返回状态码
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Data fetched:", data); // 调试返回的数据
        setMessage(data.message);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mt-10">Vocab Project</h1>
      <p className="text-lg mt-5">{message || "Loading..."}</p>
    </div>
  );
}
