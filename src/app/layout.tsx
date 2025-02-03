import Providers from "./providers";
import Footer from "@/components/organisms/footer/footer";
import Header from "@/components/organisms/header/header";
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miscota - Alimentação Natural para Pets",
  description:
    "A alimentação natural mais saudável e nutritiva para o seu pet! Feita com carinho pelas tias Carol e Julia e pelo Tio Fer.",
  keywords: [
    "alimentação natural para pets",
    "comida de verdade para cães e gatos",
    "Miscota",
    "comida natural para cães",
    "comida caseira para pets",
    "nutrição pet",
    "comida saudável para cães",
    "alimentação balanceada para pets",
    "alimentação orgânica para cães",
    "comida natural para gatos",
    "refeição saudável para pets",
    "pet food natural",
    "dieta natural para cães",
    "nutrição animal",
    "comida artesanal para pets",
    "ingredientes naturais para cães",
    "comida caseira para cachorros",
    "alimentação premium para pets",
  ],
  authors: {
    name: "T_YOU Tecnologia",
    url: "https://www.instagram.com/tyoutecnologia/",
  },
  icons: "/paw.png",
  robots: { index: true, follow: true },
  twitter: {
    card: "summary_large_image",
    title: "Miscota - Alimentação Natural para Pets",
    description:
      "A alimentação natural mais saudável e nutritiva para o seu pet! Feita com carinho pelas tias Carol e Julia e pelo Tio Fer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ overflowX: "hidden" }}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
