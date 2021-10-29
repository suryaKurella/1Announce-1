import React, {useRef, useState} from 'react';
import '../../UI/StyleSheets/Signup.css'
import {Row, Col, Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from './contexts/AuthContext'
import {useHistory} from 'react-router-dom'
import classes from '../../UI/StyleSheets/Card.module.css'
import cardClasses from '../../UI/StyleSheets/GeneralCard.module.css'
import buttoners from '../../UI/StyleSheets/Buttons.module.css'
import Login from './Login'
import FrontPagePictureContent from './FrontPagePictureContent'

/**
 *
 * @returns {JSX.Element}
 * @name : Signup
 * @desc : This function allows the user to sign up with an email and password
 */
const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const [isOldUser, setIsOldUser] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords Do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch (e) {
            setError("User Already Exists! Please Sign in")
        }
        setLoading(false)
    }
    /**
     * @func name : loginHandler
     * @desc : This function sets the setIsOldUser flag
     */
    const loginHandler = () => setIsOldUser(true)
    /**
     * @func name : signUpHandler
     * @desc : This function sets the isSignUpClick flag
     */
    const signUpHandler = (isSignUpClick) => setIsOldUser(isSignUpClick)


    return (
        <div className={'align-items-center justify-content-center'}>
            <Row>
                <Col className={`gap-padding`}>
                    <Card className={`${cardClasses.card} ml-0`}>
                        <div className={'announcement text-white'}>
                            <FrontPagePictureContent/>
                        </div>
                    </Card>
                </Col>

                <Col xs lg="5" className={`gap-padding`}>
                    <Card className={`${classes.cardFrontPage} vertical-full`}>
                        {!isOldUser ?
                            < Card.Body>
                                <h2 className={'text-center mb-4 text-white mt-4'}>
                                    Create a 1
                                    <h2 className={'text-center d-inline text-danger'}>A</h2>
                                    nnounce
                                    Account
                                </h2>
                                {error && <Alert variant={'danger'}>{error}</Alert>}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group id={'email'} className={'ml-5 mr-5'}>
                                        <Form.Label className={'text-white'}>Email</Form.Label>

                                        <Form.Control
                                            className={'boomer border border-top-0 border-left-0 border-right-0'}
                                            placeholder={'Email Address'} autoComplete="new-password"
                                            type={'email'} ref={emailRef} required/>
                                    </Form.Group>
                                    <Form.Group id={'password'} className={'ml-5 mr-5'}>
                                        <Form.Label className={'text-white'}>Password</Form.Label>
                                        <Form.Control
                                            className={'boomer border border-top-0 border-left-0 border-right-0'}
                                            placeholder={'Password'} type={'password'} ref={passwordRef}
                                            required/>
                                    </Form.Group>
                                    <Form.Group id={'password-confirm'} className={'ml-5 mr-5'}>
                                        <Form.Label className={'text-white'}>Password Confirmation</Form.Label>
                                        <Form.Control
                                            className='boomer border border-top-0 border-left-0 border-right-0'
                                            placeholder={'Confirm Password'} type={'password'}
                                            ref={passwordConfirmRef}
                                            required/>
                                    </Form.Group>

                                    <Form.Group className={`signup-btn`}>
                                        <Button disabled={loading}
                                                className={`${buttoners.submitBtn} w-100 bg-success shadow-none `}
                                                type={'submit'}>Sign
                                            Up</Button>
                                    </Form.Group>

                                </Form>

                                <div className={'w-100 text-center mt-5 text-white'}>
                                    Already have an account ? <Button variant={'outlined'} className={'text-white'}
                                                                      type={'button'}
                                                                      onClick={loginHandler}>Login</Button>
                                </div>
                            </Card.Body> : <Login onSignUpClick={signUpHandler}/>
                        }
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Signup;
