import React from 'react';
import { Transition, CSSTransition } from 'react-transition-group';
import { Image } from 'react-bootstrap';



function About (props) {
    const {
        inProp,
        setInProp
    } = props

    return(
        <CSSTransition 
          in={inProp}
          timeout={2000}
          classNames='fade'
          appear
          exit
          unmountOnExit
        >

        <section className='m-5' >
            <h2 className='headers' id='about'>About Me </h2>
            <Image
                src="https://via.placeholder.com/720x1080"
                alt="About Me"
                className="me2"
            />
            <p id="aboutBio" className='darkgrey'>Quis proident ut cillum dolor exercitation officia exercitation tempor laborum aute commodo exercitation non. Labore consequat cillum sunt non tempor officia labore aute ex tempor duis officia culpa. Minim aliqua aliquip officia ex sit velit. Dolore consequat dolore consectetur labore consectetur consequat irure laborum proident irure enim cillum. Sint anim commodo mollit exercitation esse excepteur laborum sint. Non ex proident qui excepteur sunt ea elit nostrud culpa. Sunt magna dolore culpa pariatur occaecat proident Lorem est excepteur amet. Pariatur amet incididunt magna mollit velit qui sunt pariatur qui excepteur sint reprehenderit. Minim aliquip aliqua Lorem enim. Enim ullamco occaecat quis sit enim pariatur aute non et. Anim nulla elit non officia. 
                Esse dolor magna occaecat culpa incididunt enim consequat consectetur enim. Minim laboris incididunt exercitation irure proident velit nisi reprehenderit cillum laborum aute. Eu cupidatat dolore magna anim labore deserunt minim nostrud pariatur laborum elit eiusmod dolore. Enim id cillum ullamco sunt irure anim tempor ipsum ea. Eiusmod voluptate incididunt mollit reprehenderit nostrud Lorem pariatur ut dolore veniam.
                </p>
        </section>

        </CSSTransition>

    )
}

export default About;