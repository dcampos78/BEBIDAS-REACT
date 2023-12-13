import { useState } from "react";

function Login({setUser}) {
    const [email, setEmail] = useState("")
    function handleEmail(e) {
        setEmail(e.target.value);
    }

    const [password, setPassword] = useState("")
    function handlePassword(e) {
        setPassword(e.target.value);
    }

    const [name, setName] = useState("")
    function handleName(e) {
        setName(e.target.value);
    }

    const [role, setRole] = useState("")
    function handleRole(e) {
        setRole(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        setUser(
            {
                email: email,
                password: password,
                name: name,
                role: role
            }
        )
    }

    return (
        <>
            <h2>LOGIN</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" placeholder="Email" onChange={handleEmail} />
                <input type="text" name="password" placeholder="Password" onChange={handlePassword} />
                <input type="text" name="name" placeholder="Name" onChange={handleName} />
                <input type="text" name="role" placeholder="Role" onChange={handleRole} />
                <button type="submit">Login</button>
            </form>
        </>
    )
}
export default Login