"use client";
import "./globals.css";
import { Provider } from "react-redux";
import Navbar from "@/components/navbar";
import { store } from "@/store/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className="bg-gray-800">
          <Navbar />
          {children}
        </body>
      </Provider>
    </html>
  );
}
