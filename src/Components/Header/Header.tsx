import { FileJson2, FolderCode, House, User } from 'lucide-react'

export function Header() {
    return (
        <div className="w-100 px-5 py-3 h-20 flex gap-3">
            <a href="#" className="outline-none"><div className="h-10 w-10 border-0 rounded-full bg-preto flex justify-center"><House color="white" className='my-auto' /></div></a>

            <a href="#" className="outline-none"><div className="h-10 w-10 border-0 rounded-full bg-azul-escuro flex justify-center"><FileJson2 color="white" className='my-auto' /></div></a>

            <a href="#" className="outline-none"><div className="h-10 w-10 border-0 rounded-full bg-azul-claro flex justify-center"><FolderCode color="white" className='my-auto' /></div></a>

            <a href="#" className="outline-none"><div className="h-10 w-10 border-0 rounded-full bg-verde-agua flex justify-center"><User color="white" className='my-auto' /></div></a>
        </div>
    )
}   