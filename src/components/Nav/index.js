import React from 'react';

function Nav(props) {
    const {
        contactSelected,
        setContactSelected
    } = props;
    return (
        <nav>
            <ul className='flex-row'>
                {/* <li className='mx-2'>
                    <a href='#about' onClick={() => setContactSelected(false)}>
                        About Me
                    </a>
                </li>
                <li className='mx-2'>
                    <a href='#projects' onClick={() => setContactSelected(false)}>
                        Projects
                    </a>
                </li> */}
                
            </ul>
        </nav>
    )
}
export default Nav