import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'

function SignupPage() {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const [password, setPassword] = useState('');
    
    function register(ev) {
        ev.preventDefault();
        axios.get('http://localhost:4000/test');
    }
    return (
        <div className="mt-10 grow flex items-center justify-around">
            <div className="mb-12">
                <h1 className="text-center text-6xl font-bold mb-6">Sign Up</h1>
                <form className="max-w-md mx-auto border" onSubmit={register}>
                    <input type="username"
                        placeholder="username"
                        value={username}
                        onChange={ev => setUserName(ev.target.value)} />
                    <input type="email"
                        placeholder="email"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)} />
                    <input type="new password"
                        placeholder="new password"
                        value={newpassword}
                        onChange={ev => setNewPassword(ev.target.value)} />
                    <input type="password"
                        placeholder="password"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)} />
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