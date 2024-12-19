import { Experiences } from "./Components/Experience/Experience";
import { Header } from "./Components/Header/Header"
import { Intro } from "./Components/Intro/Intro"
import { Tecnhologies } from "./Components/Technologies/Tecnhnologies"
import { ReactTyped } from "react-typed";

import { Github, Instagram, Paperclip } from "lucide-react";

export default function App() {
  return (
    <div>
      <div className="w-100">
        <Header />
      </div>

      <div className="h-[60vh] md:h-[40vh] lg:h-[100vh] xl-[80vh] items-center flex justify-center flex-col w-full lg:flex-row lg:justify-between px-5 lg:px-32">
        <div className="justify-center text-center lg:text-left flex-col lg:w-3/5 mb-10">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl">Olá, eu sou</h2>
            <h1 className="text-4xl md:text-4xl lg:text-6xl "><ReactTyped strings={["Luiz Gustavo"]} typeSpeed={200} backSpeed={30} loop /></h1>
            <h3 className="text-xl md:text-1xl lg:text-1xl ">Desenvolvedor Front-End</h3>
          </div>
          <div className="pt-3 flex justify-center lg:justify-start row gap-2">
            <a href="https://github.com/LuizinhoGustavo" target="_blank">
              <Github size={40} strokeWidth={1.5} className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" />
            </a>
            <a href="https://www.instagram.com/_silva.guuh/" target="_blank">
              <Instagram size={40} strokeWidth={1.5} className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" />
            </a>
            <a href="">
              <Paperclip size={40} strokeWidth={1.5} className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" />
            </a> {/*COLOCAR O ARQUIVO DO CURRÍCULO AQUI DEPOIS*/}
          </div>
        </div>

        <div className="w-full sm:w-2/3 xl:w-2/5">
          <Intro />
        </div>
      </div>

      <Tecnhologies />

      <Experiences />

      <div className="w-100 h-44 flex bg-black text-white">
        <span className="mx-auto my-auto text-3xl">Luiz Gustavo Silva</span>
      </div>
    </div>
  )
}



