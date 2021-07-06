import React from 'react';
import { Transition, CSSTransition } from 'react-transition-group';
import { Image } from 'react-bootstrap';



function Home (props) {
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
            <h2 className='headers' id='about'>Home </h2>
            <Image
            src={require(`../../assets/Me.jpeg`)}
            alt="Picture of me"
            className="me"
            />
            <p className='darkgrey'>Hey there! I'm Andy and a Full Stack Developer in Austin, Tx. I'm a recent gradute of The Coding Bootcamp at UT Austin. When I'm not working on my craft I'm working on my other craft, music. I've been a musician and working with audio for over 10 years. </p>
        </section>

        </CSSTransition>

    )
}

export default Home;