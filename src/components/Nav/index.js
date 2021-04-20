import React, {useState} from 'react';


function Nav(props) {
    const {
    showSelected,
    setShowSelected
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

    return (
        <nav id='nav'>
            <ul className='flex-row'>
                <li className='mx-2'>
                    <a href='#home' onClick={() => setShowSelected({home:true})}>
                        Home
                    </a>
                </li>
                <li className='mx-2'>
                    <a href='#about' onClick={() => setShowSelected({about:true})}>
                        About
                    </a>
                </li>
                <li>
                    <a href='#project' onClick={() => setShowSelected({projects:true})}>
                        Projects
                    </a>
                </li>                
                <li>
                    <a href='#contact'onClick={() => setShowSelected({contact:true})}>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}
export default Nav

