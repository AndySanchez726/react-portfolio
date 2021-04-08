import React, {useState} from 'react';


function Nav(props) {
    const {
    showSelected,
    setShowSelected
    } = props;
    // const [showSelected, setShowSelected] = useState(false)
    // const onClick = () => setShowSelected(true)

    return (
        <nav>
            <ul className='flex-row'>
                <li className='mx-2'>
                    <a href='#about' onClick={() => setShowSelected(false)}>
                        About Me
                    </a>
                </li>
                <li>
                    <a href='#projects' onClick={() => setShowSelected(false)}>
                        Projects
                    </a>
                </li>                
                <li>
                    <a href='#contact' onClick={() => setShowSelected(false)}>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}
export default Nav