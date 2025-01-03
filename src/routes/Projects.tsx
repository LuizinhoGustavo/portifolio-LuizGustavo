import { Header } from "../Components/Header/Header"
import { NoProjects } from "../Components/Projects/NoProjects"
import { Project } from "../Components/Projects/Project"
import randomGutenbergImg from "../assests/RandomGutenbergImg.png"
import TucanoProj from "../assests/TucanoProj.png"

export function Projects() {

    return (
        <div>
            <Header />

            <h3 className="text-3xl mx-5 md:mx-16 mb-10">Meus Projetos</h3>

            <Project title="Random Gutenberg Book" imageProj={randomGutenbergImg} details='"Random Gutenberg Book" é um projeto com o intuito de aprender sobre React e requisições HTTP. Utilizando uma API pública (Gutendex), o projeto requisita informações sobre um livro aleatório na base de dados com mais de 70.000 opções, dando informações sobre o Autor, a Capa e tópicos do livro, além de disponilibilizar o link de acesso ao livro'
                technologies="React, TypeScript, Tailwind, Axios" linkProj="https://randomgutenbergbook.vercel.app/" linkFigma="https://www.figma.com/design/vGZtIYc3GEOqEcSIJdWEMd/Portif%C3%B3lio-DEV?node-id=0-1&p=f&t=6hsaYJLRDzf3i0JS-0" />

            <Project title="Tucano" imageProj={TucanoProj} details='TUCANO foi uma parte do meu TCC no técnico em Desenvolvimento de Sistemas. Fiquei responsável pelo desenvolvimento do site para a apresentação dos recursos do projeto que consiste em uma ferramenta de comunicação entre os membros do administrativo da escola e os alunos.'
                technologies="Javascript, HTML, CSS" linkProj="https://luizinhogustavo.github.io/TUCANO-TCC/" linkFigma="#" />

            <NoProjects />
        </div >
    )
}