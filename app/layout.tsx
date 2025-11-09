import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Pulse Studio | Creative Marketing Post",
  description:
    "تصميم بوست احترافي لشركة تسويق إلكتروني يعكس هوية عصرية ونتائج قابلة للقياس.",
  openGraph: {
    title: "Digital Pulse Studio",
    description:
      "تصميم مرئي احترافي يعزز حضور شركتك على وسائل التواصل الاجتماعي.",
    url: "https://agentic-5904b0a1.vercel.app",
    siteName: "Digital Pulse Studio",
    locale: "ar_AR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Pulse Studio",
    description:
      "تصميم مرئي احترافي يعزز حضور شركتك على وسائل التواصل الاجتماعي."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
