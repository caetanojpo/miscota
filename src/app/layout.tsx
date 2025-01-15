import { Inter } from "next/font/google";
import Providers from "./providers";
// import { Footer } from "../components/footer/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <Providers>
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
