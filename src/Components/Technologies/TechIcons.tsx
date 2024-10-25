interface icon {
    image: string
}

export function TechIcons(props: icon) {
    return (
        <div className="h-40 w-40 p-3 rounded bg-dark-blue border-0 justify-center transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
            <img src={props.image} />
        </div>
    )
}