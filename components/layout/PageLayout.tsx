import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  /** Set to true for pages that need top-padding (most inner pages) */
  padTop?: boolean;
}

export default function PageLayout({ children, padTop = true }: PageLayoutProps) {
  return (
    <>
      <Header />
      <main className={padTop ? "pt-16 lg:pt-18" : ""}>{children}</main>
      <Footer />
    </>
  );
}
