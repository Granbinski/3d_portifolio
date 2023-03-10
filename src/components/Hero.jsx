import React from "react";
import { motion } from "framer-motion";

import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}text-white`}>
            Ola, nós somos a <span className="text-[#915eff]">Web Factory</span>{" "}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A web factory, esta preparada para ajudá-lo a criar o site dos seus
            sonhos. Com anos de experiência em programação e design, podemos
            garantir que o seu site será desenvolvido com a mais alta qualidade
            e eficiência. Nosso objetivo é oferecer soluções personalizadas para
            atender às suas necessidades específicas. Portanto, não hesite em
            nos contatar para discutir suas ideias e objetivos. Estamos ansiosos
            para trabalhar com você e transformar suas ideias em realidade!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
