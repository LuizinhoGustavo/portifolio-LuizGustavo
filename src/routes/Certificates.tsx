import { Certificate } from "../Components/Certificate/Certificate"
import { Header } from "../Components/Header/Header"
import reactCertificate from "../assests/CertificadoReact.png"

export function Certificates() {

    return (
        <div>
            <Header />

            <h3 className="text-3xl mx-5 md:mx-16 mb-10">Meus Certificados</h3>


            <div className="flex flex-col lg:flex-row gap-10 lg:gap-36 justify-center flex-wrap">
                <Certificate image={reactCertificate} title={"Curso de React - Ada Tech"} description={"Certificação em React para aplicações web, um curso completo com aplicações reais e ensinamentos em Typescript e Javascript, além de diversas tecnologias e boas práticas que podem ser usadas no ambiente de desenvolvimento."} />



            </div>



        </div>
    )
}