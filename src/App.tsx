import { Experiences } from "./Components/Experience/Experience";
import { Header } from "./Components/Header/Header"
import { Intro } from "./Components/Intro/Intro"
import { Tecnhologies } from "./Components/Technologies/Tecnhnologies"

import { Github, Instagram, Paperclip } from "lucide-react";

export default function App() {

  return (
    <div>
      <Header />

      <div className="px-32 h-[80vh] items-center flex justify-between">
        <div className="justify-center">
          <div className="flex flex-col gap-1">
            <h2 className="text-6xl">Olá, eu sou</h2>
            <h1 className="text-8xl">Luiz Gustavo</h1>
            <h3 className="text-2xl">Desenvolvedor Front-End</h3>
          </div>
          <div className="py-3 flex row gap-2">
            <a href="https://github.com/LuizinhoGustavo" target="_blank"><Github size={40} strokeWidth={1.5} className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" /></a>

            <a href="https://www.instagram.com/_silva.guuh/" target="_blank"><Instagram size={40} strokeWidth={1.5} className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" /></a>

            <a href=""><Paperclip size={40} strokeWidth={1.5} className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" /></a> {/*COLOCAR O ARQUIVO DO CURRÍCULO AQUI DEPOIS*/}
          </div>
        </div>

        <div className="w-2/5">
          <Intro />
        </div>
      </div>

      <Tecnhologies />

      <div className="my-52">
        <Experiences />
      </div>

    </div>
  )
}



