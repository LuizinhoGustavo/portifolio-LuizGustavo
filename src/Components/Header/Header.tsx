import { FileJson2, FolderCode, House, User } from 'lucide-react'

export function Header() {
    return (
        <div className="w-100 px-5 py-3 h-20 flex gap-3">
            <a href="#" className="outline-none"><div className="h-10 w-10 border-0 rounded-full bg-black flex justify-center"><House color="white" className='my-auto' /></div></a>

            <a href="#" className="outline-none"><div className="h-10 w-10 border-0 rounded-full bg-dark-blue flex justify-center"><FileJson2 color="white" className='my-auto' /></div></a>

            <a href="#" className="outline-none"><div className="h-10 w-10 border-0 rounded-full bg-light-blue flex justify-center"><FolderCode color="white" className='my-auto' /></div></a>

            <a href="#" className="outline-none"><div className="h-10 w-10 border-0 rounded-full bg-light-green flex justify-center"><User color="white" className='my-auto' /></div></a>
        </div>
    )
}   