import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

const SignUp = () => {
    // show password when icon is clicked
    const [showPassword, setShowPassword] = useState(false)
    // to capture form data that is put in fields
    // contains object with all fields
    // this is an alternative to having a separate piece of state for each field
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    // deconstruct form data
    const { name, email, password } = formData

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
                    <p className='pageHeader'>Sign Up</p>
                </header>

                <main>
                    <form>
                        <input
                            type='text'
                            className='nameInput'
                            placeholder='Name'
                            id="name"
                            value={name}
                            onChange={onChange} />
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

                        <div className='signUpBar'>
                            <p className='signUpText'>Sign Up</p>
                            <button className='signUpButton'>
                                <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
                            </button>
                        </div>
                    </form>
                    <Link to='/sign-in' className='registerLink'>Sign In Instead</Link>
                </main>
            </div>
        </div>
    )
}

export default SignUp
