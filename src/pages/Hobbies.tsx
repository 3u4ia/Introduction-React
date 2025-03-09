import { Hobby } from "../components/Hobby"
import { generalDivStyles } from "../utilities/data"
import { hobbyData } from "../utilities/data"


export const Hobbies = () => {

    return (
        <div className={generalDivStyles}>
            <h1 className="text-[3rem] text-center">Hobbies</h1>
            {hobbyData.map(hobby => <Hobby title={hobby.title} description={hobby.description} picture={hobby.picture}/>)}
        </div>
    )
}