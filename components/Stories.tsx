import minifaker from "minifaker"
import "minifaker/locales/en"
import { useEffect, useState } from "react"
import Story from "./Story"
import { useSession } from "next-auth/react"

const Stories = () => {
    const {data: session} = useSession()
    const [storyUsers, setStoryUsers] = useState([])
    useEffect(() => {
        const storyUsers = minifaker.array(20,(i) => ({
            username: minifaker.username({locale:"en"}).toLowerCase(),
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70 )}`,
            id:i,
        }))
        setStoryUsers(storyUsers)
        console.log(storyUsers)
    },[])
  return (
    <div className="flex overflow-x-scroll space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm scrollbar-none">
        {session && (
            <Story username={session.user?.username} img={session.user?.image} isUser="true"/>
        )}
        {storyUsers.map((user) => (
            <Story key={user.id} username={user.username} img={user.img}/>
        ))}
    </div>
  )
}

export default Stories