"use client"
import Services from "./components/services";
import APropos from "./components/apropos";
import Presentation from "./components/presentation";
import Contact from "./components/contact";
import FixedAppBar from "./components/fixed_app_bar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Animations from "./components/utils/item";
import PourquoiNous from "./components/pourquoi-nous";
import Equipe from "./components/equipe";
import Temoignages from "./components/temoignages";

export default function Home() {
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {

    setIsInView(false)

    return () => {

    }
  }, [])
  return (
    <div

    >
      {
        isInView && <div className='fixed flex flex-col items-center justify-center bg-white h-full w-full'>
          <div>
          </div>
          <img src="/mini-logo.png" alt="" className="h-14 md:h-24 my-3" />
          <div className='loader h-9 w-9 md:h-16 md:w-16'></div>

        </div>}
      <motion.div
        variants={Animations.opacity({ duration: 0.9 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}

        className="">


        <FixedAppBar></FixedAppBar>
        <Presentation></Presentation>
        <APropos></APropos>
        <Services></Services>

        <PourquoiNous></PourquoiNous>
        <Temoignages></Temoignages>
        <Equipe></Equipe>
        <Contact></Contact>
        {/* <Equipe></Equipe> */}
      </motion.div>
    </div>

  );
}
