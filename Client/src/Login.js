const Login = () => {
    return (
        <div className='loginContainer'>
            <h1 className='signInTitle'>Sign in</h1>
            <input className='loginInput' type='text' placeholder="Username" />
            <input className='loginInput' type='text' placeholder="Password" />
            <button className='button loginButton' type="submit">Login</button>
        </div>
    )
}

export default Login;