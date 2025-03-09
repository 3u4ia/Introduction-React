import { Link } from "react-router"
import Styles from './Navbar.module.css'

export const Navbar = () => {

    const buttonStyleClasses = "transparent transition duration-300 text-indigo-300 border border-blue-500 px-1 my-1 rounded cursor-pointer"
    return(
        <div className="
            font-mono 
            bg-gradient-to-r from-indigo-600 to-indigo-500
        ">
            <ul className={`flex space-x-4`}>{/*space-x-4 is for space between. Flex just makes it into a row*/}
                <li>
                    
                    <Link to="/aboutme">
                        <button className={`${buttonStyleClasses} ml-3 ${Styles.makeHover}`}>About Me</button>  
                    </Link>
                    
                    
                </li>
                <li>
                    <Link to='/hobbies'>
                        <button className={`${buttonStyleClasses} ${Styles.makeHover}`}>Hobbies</button>
                    </Link>
                    
                </li>
            </ul>
        </div>
    )
}