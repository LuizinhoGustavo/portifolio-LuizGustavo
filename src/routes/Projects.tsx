import { Header } from "../Components/Header/Header"
import { Project } from "../Components/Projects/Project"

export function Projects() {

    return (
        <div>
            <Header />

            <h3 className="text-3xl mx-5 md:mx-16 mb-10">Meus Projetos</h3>

            <Project title="Projeto 1" details="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed accusamus facilis dolorum vel labore eaque sapiente impedit odit, dolore voluptate at vitae vero veniam ab quam voluptatem ea minima obcaecati! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt distinctio corporis aut fugit maxime quasi pariatur omnis ab velit itaque cupiditate, voluptatem deleniti sed adipisci magnam nobis dicta vero sint?" technologies="HTML, CSS, JavaScript" linkProj="www.youtube.com" linkFigma="www.figma.com" />

            <Project title="Projeto 2" details="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed accusamus facilis dolorum vel labore eaque sapiente impedit odit, dolore voluptate at vitae vero veniam ab quam voluptatem ea minima obcaecati! " technologies="HTML, CSS, JavaScript" linkProj="www.youtube.com" linkFigma="www.figma.com" />


        </div>
    )
}