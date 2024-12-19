import { ImageOff } from "lucide-react"

export function NoProjects() {
    return (
        <div className="bg-white border-2 mb-10 mx-2 md:mx-auto w-100 flex flex-col justify-between gap-3 md:w-2/3 rounded-xl border-DarkGrey">
            <div className="h-2/3 w-full bg-grey2 flex justify-center align-middle m-0 p-16 rounded-t-xl">
                <ImageOff className="text-black size-10" />
            </div>
            <div className="justify-center align-middle w-full flex my-4">
                <h3 className="text-3xl font-bold">Mais Projetos virão no Futuro ;)</h3>
            </div>

        </div>
    )
}