import React, {useState} from 'react';


function Nav(props) {
    const {
    showSelected,
    setShowSelected,
    inProp,
    setInProp
    } = props;


    // function onClick(e) {
    //     e.preventDefault();
    //     setShowSelected({projects:true})
    //     var url = 'http://localhost:3000/'
    //     var next = 'project'
    //     console.log(url)
    //     window.history.pushState(next, '', url + next)
    //     return false
    // }
    function homeState() {
        setInProp(true);
        setShowSelected({home:true});
    }
    function aboutState() {
        setInProp(true);
        setShowSelected({about:true});
    }
    function contactState() {
        setInProp(true);
        setShowSelected({contact:true});
    }
    function projectState() {
        setInProp(true);
        setShowSelected({projects:true})
    }


    return (
        <nav id='nav'>
            <ul className='flex-row'>
                <li className='mx-2'>
                    <a href='#home' onClick={() => homeState()}>
                        Home
                    </a>
                </li>
                <li className='mx-2'>
                    <a href='#about' onClick={() => aboutState() }>
                        About
                    </a>
                </li>
                <li>
                    <a href='#project' onClick={() => projectState()}>
                        Projects
                    </a>
                </li>                
                <li>
                    <a href='#contact'onClick={() => contactState()}>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}
export default Nav

