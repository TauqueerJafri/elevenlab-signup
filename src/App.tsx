import './App.css'

function App() {
  return (
    <div className='page'>

      <header className='header'>
        <h4 className='logo'>IIElevenLabs</h4>
      </header>

      <main className='main'>
        <form className='card'>
          <h1>Create an account</h1>

          <button type="button" className='google-button'>
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" />
            Sign up with Google
          </button>

          <label htmlFor="email">Email</label>
          <input id="email" type='email' />

          <label htmlFor="password">Password</label>
          <input id="password" type='password' />

          <button type="submit" className='signup-button'>
            Sign up
          </button>

          <p className='signin'>
            Already registered? <span><a href="#"><u>Sign in</u></a></span>
          </p>
        </form>
      </main>

      <footer className='footer'>
        <p>By continuing, you agree to our <u>Terms of Service</u> and <u>Privacy Policy</u>.</p>
      </footer>
    </div>
  )
}

export default App
