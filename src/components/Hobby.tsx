export interface HobbyProps {
    title: string
    description: string
    picture: string // I think it's using the path.
}

export const Hobby = ({title, description, picture}: HobbyProps) => {
    


    return(
        // grid turns the div into a grid container
        // place-items-center centers the item both horizontally and vertically.
        <div className="grid place-items-center">
            <h2 className="text-[2rem]">{title}</h2>
            <p className="pb-4 px-4">{description}</p>
            <img className="w-80 pb-4" src={picture}/> {/*Vite doesn't process relative paths in src directly. it's relative to the index.html file */}
        </div>


        
    )
}