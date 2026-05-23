import "./globals.css";

export const metadata = {
  title: "Annisa Aesthetics",
  description: "Luxury skin care & facials",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
