import { CodeXml, Figma, Link } from "lucide-react";

interface Props {
    title: string,
    details: string,
    technologies: string,
    linkProj: string,
    linkFigma: string
}

export function Project(props: Props) {
    const { title, details, technologies, linkProj, linkFigma } = props;

    return (
        <div className="bg-white border-2 mb-10 mx-2 md:mx-auto w-100 flex flex-col md:flex-row justify-between gap-3 p-3 md:w-2/3 rounded-xl">
            <div className="bg-dark-blue h-48 md:h-[100%] md:w-1/2 border-2">
                <img src="#" alt="RandomGutenbergBook Image" />
            </div>
            <div className="md:w-1/2 p-3">
                <div className="flex flex-row gap-3 align-middle justify-center pb-3"><CodeXml size={30} className="my-auto" /> <h3 className="text-3xl">{title}</h3></div>
                <p>{details}</p>
                <p className="font-extrabold text-center my-5">Tecnologias: {technologies}</p>
                <div className="flex justify-around flex-row mt-2">
                    <a href={linkProj} target="_blank" className="flex flex-row gap-2 text-dark-blue"> <Link /> Link do Projeto </a>
                    <a href={linkFigma} target="_blank" className="flex flex-row gap-2 text-dark-blue"> <Figma /> Link do Figma </a>
                </div>
            </div>
        </div>
    )
}