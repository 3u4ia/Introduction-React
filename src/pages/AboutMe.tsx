import Picture from '../assets/picOfMe.jpg'
import {Navbar} from '../components/navbar'

export const AboutMe = () => {

    return(
        
        <div className="
            bg-gradient-to-br from-indigo-600 to-green-600
            w-screen 
            h-screen 
            text-white
            font-mono"
        >
            
            <p className="text-[3rem] text-center">About Me</p>
            <p className="text-[2.3rem] text-center">Leroy</p>
            <img 
                src={Picture}
                className="w-80 justify-self-center pt-4"
            />
            <p className='p-5 '>
                Hello everyone, I am a Computer Science major. 
                I chose this major because the idea of being able to create something that can affect the real world from behind a computer screen intrigued me. 
                My favorite language as of right now is Java. For fun during breaks I enjoy playing games such as Rocket League and League of Legends. 
                I enjoy reading whenever I can. My number one goal in life is to be the best at "something". 
                A fun fact about me is I've recently secured an internship! It was a very fun process to go through and I hope this class will help me prepare for the role. 
                My favorite vacation was my second to last vacation to Ethiopia visiting family. The food is amazing and the culture is so refreshing.
            </p>

        </div>
    )
}