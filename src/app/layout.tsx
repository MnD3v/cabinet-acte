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
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Abel&family=Average+Sans&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Average+Sans&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />


      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalStateProvider>
          {children}
        </GlobalStateProvider>

        <footer className="text-white relative flex flex-col items-center bg-[url('/utils/footer.png')] bg-cover overflow-hidden max-sm:text-sm">
          
          <div className="relative z-10 max w-full flex flex-wrap  p-4 gap-9">

            <div>
              <img src="/white-logo.png" alt="" className="w-12 md:w-16" />
              <p className="w-80 mt-6 font-abel">Chez ACTe, nous offrons des formations sur mesure pour améliorer vos compétences et renforcer votre carrière, en alliant tradition et innovation dans des domaines variés.</p>
              <div className=" flex gap-2">
                {socials.map((element) => (
                  <div key={element.icon} className="bg-white h-10 w-10 rounded-full flex flex-col items-center justify-center">
                    <img src={`/icons/${element.icon}`} alt="" className="h-6" />
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-6 w-80 font-bricolage">
              <h3 className="text-lg font-bold">
                Contact
              </h3>
              <div className="flex items-center">
                <img src="/icons/green-phone.png" alt="" className="h-6 " />
                <p className="p-3">+228 92 21 75 24</p>
              </div>

              <div className="flex items-center">
                <img src="/icons/green-map.png" alt="" className="h-6 mx-1 " />
                <p className="p-3">Notre Siège social est dans le quartier Tomdè, à environ 50 metres après les affaires sociales.</p>
              </div>
            
            </div>
         

          </div>
          <div className='flex justify-center h-16 items-center w-full bg-gray-500'>
      <div className='max w-full p-4'>
      Copyright © $2024 - All right reserved by ACTe
      </div>
      </div>

        </footer>
      </body>
    </html>
  );
}
