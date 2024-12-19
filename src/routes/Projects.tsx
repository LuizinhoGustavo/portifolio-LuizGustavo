import { Header } from "../Components/Header/Header"
import { Project } from "../Components/Projects/Project"
import { NoProjects } from "../Components/Projects/noProjects"

export function Projects() {

    return (
        <div>
            <Header />

            <h3 className="text-3xl mx-5 md:mx-16 mb-10">Meus Projetos</h3>

            <Project title="Random Gutenberg Book" details='"Random Gutenberg Book" é um projeto com o intuito de aprender sobre React e requisições HTTP, utilizando uma Api pública o site requisita informações sobre um livro aleatório na base de dados com mais de 70.000 opções, dando informações sobre o Autor, a Capa e tópicos do livro além de disponilibilizar o link de acesso ao livro'
                technologies="React, TypeScript, Tailwind, Axios" linkProj="#" linkFigma="https://www.figma.com/design/vGZtIYc3GEOqEcSIJdWEMd/Portif%C3%B3lio-DEV?node-id=0-1&p=f&t=6hsaYJLRDzf3i0JS-0" />

            <NoProjects />
        </div >
    )
}