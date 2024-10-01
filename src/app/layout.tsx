import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GlobalStateProvider } from "./contexts/GlobalStateContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cabinet ACTe",
  description: "Cabinet de formation des jeunes en management et technologie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const socials = [{ icon: "facebook.png", link: "" },
  { icon: "linkedin.png", link: "" },
  ]
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Syne:wght@400..800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalStateProvider>
          {children}
        </GlobalStateProvider>

        <footer className="relative flex justify-center bg-green-950 p-9 pt-9 md:pt-24 text-white overflow-hidden max-sm:text-sm">
          <div className="absolute bottom-0 right-0 z-0 ">
            <img src="/utils/feuille-footer.png" alt="" className="h-60 md:h-96" />
          </div>
          <div className="relative z-10 max flex flex-wrap justify-center gap-9">

            <div>
              <img src="/logo.png" alt="" className="w-24 md:w-48" />
              <p className="w-80 mt-6">Chez CEMENA-TOGO, des solutions naturelles sur mesure pour améliorer votre bien-être et renforcer votre santé, en combinant tradition et innovation.</p>

            </div>
            <div className="pt-6 w-80 font-poppins">
              <h3>
                Contact
              </h3>
              <div className="flex items-center">
                <img src="/icons/phone.png" alt="" className="h-6 " />
                <p className="p-3">+228 93 45 21 72</p>
              </div>

              <div className="flex items-center">
                <img src="/icons/map.png" alt="" className="h-6 mx-1 " />
                <p className="p-3">Notre Siège social est dans le quartier SOS, derrière l'église AD Sinaï,sur la route de Ketao,avant le pont.</p>
              </div>
              <div className="my-6 flex gap-2">
                {socials.map((element) => (
                  <div key={element.icon} className="bg-green-200 h-14 w-14 rounded-full flex flex-col items-center justify-center">
                    <img src={`/icons/${element.icon}`} alt="" className="h-6" />
                  </div>
                ))}
              </div>
            </div>

          </div>

        </footer>
      </body>
    </html>
  );
}
