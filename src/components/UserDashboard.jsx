import { Header } from "./Header"
import '../Css/UserDashboard.css'
export default function UserDashboard()
{
    return (
        <div>
            <Header/>
            <div className="userPanel">
            <img className=" rounded-circle " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BfZwFBhVYvlma3FgJa6zDgX7BysQUghPDw&usqp=CAU" width="140" height="140"  style={{border:'1px'}}/>
            </div>
        </div>
    )

}