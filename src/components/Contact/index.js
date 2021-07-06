import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { Transition, CSSTransition } from 'react-transition-group';


function ContactForm(props) {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState
    const [errorMessage, setErrorMessage] = useState('');
    const {
        inProp,
        setInProp
    } = props




    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <CSSTransition 
          in={inProp}
          timeout={2000}
          classNames='fade'
          appear
          exit
          unmountOnExit
        >

        <section id='contact' className='darkgrey m-5'>
            <h1 className='headers'>Contact me</h1>
            {/* <form id='contact-form' onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' defaultValue={name} onBlur={handleChange} />
            </div>
            <div>
                <label htmlFor='email'>Email address:</label>
                <input type='email' name='email' defaultValue={email} onBlur={handleChange}/>
            </div>
            <div>
                <label htmlFor='message'>Message:</label>
                <textarea name='message' row='5' defaultValue={message} onBlur={handleChange}/>
            </div>
            {errorMessage && (
                <div>
                    <p className='error-text'>{errorMessage}</p>
                </div>
            )}
            <button type='submit'>Submit</button>
            </form> */}
            <h4>Andy Sanchez</h4>
            <p>AndySanchez726@gmail.com</p>
            <p>254.214.4667</p>
        </section>
        </CSSTransition>
    )
}

export default ContactForm;