import "./globals.css";
import Providers from "./providers";


export const metadata = {
  title: "NextAuth Demo",
  description: "Google Login",
};


export default function RootLayout({children}) {

  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
