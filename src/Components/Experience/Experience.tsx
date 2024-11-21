import { MoveLeft, MoveRight } from "lucide-react";

export function Experiences() {
    return (
        <div className="mx-3 md:mx-10 lg:mx-32 xl:px-52 my-24 flex justify-center flex-col sm:flex-row">
            <div className="bg-dark-blue w-full sm:w-1/2 mb-5 rounded-3xl sm:rounded-l-3xl p-5 pb-3 flex flex-col justify-between">
                <div className="flex-grow">
                    <h1 className="text-4xl">Projetos, Trabalhos e <br /> Projeções futuras </h1>
                    <p className="text-xl py-12 ">
                        Esse é um espaço dedicado para exibir meus projetos pessoais, falando um pouco sobre cada um deles, as tecnologias usadas durante o seu desenvolvimento e como ocorreu esse processo.
                        <br /> <br />
                        Além disso falo sobre as oportunidades que tive e o que foi aprendido durante essas e contar um pouco da minhas perspectivas para o futuro
                    </p>
                </div>
                <div className="flex flex-row-reverse">
                    <a href={`/Projects`} className="flex text-2xl gap-2 w-full justify-between bg-light-blue p-4 mb-3 rounded-xl">
                        Veja meus projetos <MoveRight className="my-auto" />
                    </a>
                </div>
            </div>

            <div className="bg-light-blue w-full sm:w-1/2 mb-5 sm:rounded-l-3xl rounded-3xl p-5 pb-3 flex flex-col justify-between">
                <div className="flex ">
                    <a href={`/Certificates`} className="flex text-2xl w-full justify-between gap-2 bg-dark-blue p-4 rounded-xl">
                        <MoveLeft className="my-auto" /> Veja meus Certificados
                    </a>
                </div>
                <div className="flex flex-col mb-12">
                    <p className="text-xl py-12 ">
                        Esse é um espaço dedicado a mostrar meus certificados, todo o trajeto da minha vida acadêmica e cursos que fiz e faço para aperfeiçoar meus conhecimentos.
                        <br /> <br />
                        Além disso falo um pouco sobre experiências e outros projetos na qual fiz parte.
                    </p>

                    <h1 className="text-4xl ml-auto ">Certificados</h1>
                </div>
            </div>
        </div>
    )
}