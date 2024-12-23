"use client";

import "./globals.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { auth } from "../firebase";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentUser, setCurrentUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              {currentUser ? (
                <>
                  <li>{currentUser.email}</li>
                  <li>
                    <button onClick={() => auth.signOut()}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/auth/login">Login</Link>
                  </li>
                  <li>
                    <Link href="/auth/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 Vocab Project</p>
        </footer>
      </body>
    </html>
  );
}
