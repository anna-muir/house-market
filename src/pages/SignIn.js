import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

const SignIn = () => {
    // show password when icon is clicked
    const [showPassword, setShowPassword] = useState(false)
    // to capture form data that is put in fields
    // contains object with all fields
    // this is an alternative to having a separate piece of state for each field
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    // deconstruct form data
    const { email, password } = formData

    // intialize navigate
    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }
    return (
        <div>
            <div className='pageContainer'>
                <header>
                    <p className='pageHeader'>Welcome Back!</p>
                </header>

                <main>
                    <form>
                        <input
                            type='email'
                            className='emailInput'
                            placeholder='Email'
                            id="email"
                            value={email}
                            onChange={onChange} />
                        <div className='passwordInputDiv'>
                            <input className='passwordInput'
                                placeholder='Password'
                                id='password'
                                value={password}
                                onChange={onChange}
                                type={showPassword ? 'text' : 'password'} />

                            <img src={visibilityIcon}
                                alt='show password'
                                className='showPassword'
                                onClick={() => setShowPassword((prevState) => !prevState)} />
                        </div>
                        <Link to='/forgot-password' className='forgotPasswordLink'>Forgot Password</Link>

                        <div className='signInBar'>
                            <p className='signInText'>Sign In</p>
                            <button className='signInButton'>
                                <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
                            </button>
                        </div>
                    </form>
                    <Link to='/sign-up' className='registerLink'>Sign Up Instead</Link>
                </main>
            </div>
        </div>
    )
}

export default SignIn
