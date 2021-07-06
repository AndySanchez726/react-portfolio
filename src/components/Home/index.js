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
            <p id="homeBio" className='darkgrey'>Lorem adipisicing nisi nisi ut nostrud commodo. Nisi deserunt quis nulla non do aliquip sit. Et consequat sit reprehenderit exercitation cillum cupidatat sunt aliqua ex esse magna proident occaecat. Nulla nisi voluptate pariatur esse veniam nisi sunt mollit nostrud. Mollit proident aliqua cillum ea Lorem cupidatat Lorem quis et fugiat ipsum id. Quis officia laborum mollit qui proident id Lorem aute duis. Incididunt quis Lorem exercitation sint id quis exercitation incididunt elit exercitation excepteur ut non.</p>
        </section>

        </CSSTransition>

    )
}

export default Home;