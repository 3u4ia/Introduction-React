import { HobbyProps } from "../components/Hobby"
import RocketLeague from '../assets/RocketLeague.jpg'
import TeenageMercenary from '../assets/TeenageMercenary.jpg'
import Basketball from '../assets/Basketball.jpg'


export const generalDivStyles = "bg-gradient-to-br from-indigo-600 to-green-600 max-w-full min-h-screen text-indigo-300 font-mono"

export const hobbyData: HobbyProps[] = [
    {
        title: "Gaming",
        description: "More specifically video games like League of Legends and Rocket League",
        picture: RocketLeague
    },
    {
        title: "Reading Manwha's",
        description: "Essentially Korean comics obviously translated to English",
        picture: TeenageMercenary
    },
    {
        title: "Basketball",
        description: "I especially enjoyed the defensive aspect of it.",
        picture: Basketball
    }
]