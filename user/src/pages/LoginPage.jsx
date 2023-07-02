import { Link } from "react-router-dom"

function LoginPage() {
    return (
        <div className="mt-10 grow flex items-center justify-around">
            <div className="mb-12">
                <h1 className="text-center text-6xl font-bold mb-6">Login</h1>
                <form className="max-w-md mx-auto border">
                    <input type="username" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <button className="primary">Login</button>
                    <div className="text-center py-4">
                        If you don't have an account, click on
                        <Link to={'/signup'}> <button className="rounded-2xl">Sign up</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default LoginPage