import { FileText } from "lucide-react";

interface Props {
    image: string,
    title: string,
    description: string
}

export function Certificate(props: Props) {
    const { image, title, description } = props;
    return (
        <div className=" lg:w-1/5 mx-10 bg-white p-0 rounded-2xl">
            <img src={image} alt="Certificado" className="rounded-t-2xl" />
            <div>
                <div className="p-2 px-5 font-semibold flex gap-1 hover:underline hover:delay-300" >
                    <a href={image} target="_blank" className="flex gap-1"><FileText /> {title}</a>
                </div>
                <div className="p-3 px-5 text-justify">
                    {description}
                </div>
            </div>
        </div>
    )
}