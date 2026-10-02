import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
  title: "Jaspher Booc | Student Developer",
  description: "The student portfolio of Jaspher Booc, featuring projects, skills, and creative work.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main id="main-content" className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
