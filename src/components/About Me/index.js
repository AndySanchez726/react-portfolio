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
                src={require(`../../assets/family.png`)}
                alt ='Family'
                className='family'
            />

            <p id="aboutBio" className='darkgrey'>Hey there! I’m Andy and I’m a Web Developer. <br />
                <br />
                For the past 10 years I’ve been working in the audio industry doing all sorts of jobs from making music, live events, and 
                post-production. Web Development was always an interest to me and I decided to pursue it by 
                completing The Coding Bootcamp at The University of Texas in 2020. What a year to decide to do it! 
                <br /> <br />
                I currently live in Austin, Tx with my fiancé and our Mini Australian Shepherd, Hazel.

            </p>
            <br />
            <p className='darkgrey'>Resume</p>
            <a  href={require(`../../assets/AndySanchez_Resume.pdf`)} download><img src="https://img.icons8.com/ios/50/000000/resume.png"/></a>
        </section>

        </CSSTransition>

    )
}

export default About;