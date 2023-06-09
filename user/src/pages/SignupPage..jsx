import { Link } from "react-router-dom"

function SignupPage(){
    return(
        <div className="mt-10 grow flex items-center justify-around">
    <div className="mb-12">
    <h1 className="text-center text-6xl font-bold mb-6">Sign Up</h1>
   <form className="max-w-md mx-auto border">
    <input type="username" placeholder="username"/>
    <input type="email" placeholder="email"/>
    <input type="new password" placeholder="new password" />
    <input type="password" placeholder="password" />
    <button className="primary">Sign Up</button>
    <div className="text-center py-4">
        If you do have an account, click on 
        <Link to={'/login'}> <button className="rounded-2xl">Login</button></Link> 
        </div>
   </form>
</div>
</div>
    )
}

export default SignupPage