import { Link } from "react-router"

export const Navbar = () => {

    const buttonStyleClasses = "bg-blue-300 hover:bg-red-800 transition duration-300 text-indigo-500 border border-blue-500 px-1 my-1 rounded cursor-pointer"
    return(
        <div className="
            font-mono 
            text-blue-400
            bg-gradient-to-r from-indigo-600 to-indigo-500
        ">
            <ul className="flex space-x-4">{/*space-x-4 is for space between. Flex just makes it into a row*/}
                <li>
                    
                    <Link to="/aboutme">
                        <button className={`${buttonStyleClasses} ml-3`}>About Me</button>  
                    </Link>
                    
                    
                </li>
                <li>
                    <Link to='/hobbies'>
                        <button className={buttonStyleClasses}>Hobbies</button>
                    </Link>
                    
                </li>
            </ul>
        </div>
    )
}