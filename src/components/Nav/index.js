import React, {useState} from 'react';


function Nav(props) {
    const {
    showSelected,
    setShowSelected
    } = props;
    
    return (
        <nav>
            <ul className='flex-row'>
                <li className='mx-2'>
                    <a href='#about' onClick={() => setShowSelected({about:true})}>
                        About
                    </a>
                </li>
                <li>
                    <a href='#projects' onClick={() => setShowSelected({projects:true})}>
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

// onClick={() => setShowSelected(true)