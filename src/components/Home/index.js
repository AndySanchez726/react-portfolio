import React from 'react';
import { Transition, CSSTransition } from 'react-transition-group';
import { Image } from 'react-bootstrap';
import ProjectList from '../ProjectList';




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
            <p id="homeBio" className='darkgrey'>Hey there! I’m Andy and I’m a Web Developer. </p>

            <Image
                src={require(`../../assets/andy_2.png`)}
                alt="About Me"
                className="me2"
            />
            <ProjectList 
            inProp={inProp}/>

        </section>

        </CSSTransition>

    )
}

export default Home;