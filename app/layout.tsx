import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ROYAL HUB | Premium Marketplace",
  description: "Discover premium products, digital essentials and trusted affiliate finds.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}