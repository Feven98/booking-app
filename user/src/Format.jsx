import { Outlet } from "react-router-dom"
import Header from "./Header"

function Format(){
    return(
<div className="p-5">
    <Header />
    <Outlet />
</div>
    )
}
export default Format