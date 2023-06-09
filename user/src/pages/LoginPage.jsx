import Header from "../Header"

function LoginPage(){
    return(
<div className="mt-8">
    <h1 className="text-center text-6xl font-bold">Login</h1>
   <form className="max-w-nd mx-auto border">
    <input type="username/email" placeholder="username/email" />
    <input type="password" placeholder="password" />
    <button className="primary">Login</button>
   </form>
</div>
    )
}
export default LoginPage