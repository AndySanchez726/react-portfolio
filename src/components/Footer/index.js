import React from 'react';
import Github from '../../assets/Github_120px.png';

function Footer() {
    return (
        <footer>
            <a href='https://github.com/AndySanchez726' target='_blank' rel='noopener noreferrer'>
                <img src={Github} alt='GitHub Profile' width='7%'/>
            </a>
        </footer>
    )
}

export default Footer;