import React from 'react';

function Nav() {
    return (
        <nav>
            <ul className='flex-row'>
                <li className='mx-2'>
                    <a href='#about'>
                        About Me
                    </a>
                </li>
                <li>
                    <a href='#projects'>
                        Projects
                    </a>
                </li>                <li>
                    <a href='#contact'>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}
export default Nav