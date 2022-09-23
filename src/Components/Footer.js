import React from 'react'
import styledComponents from 'styled-components'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterWrapper>
            <p className='footer'>Copyright © Ray Chen</p>
            <Link href="https://github.com/sunjcar" target="_blank" className='footer'>
                <FaGithub className='footer-icon'/>
            </Link>
        </FooterWrapper>
    );
};

const FooterWrapper = styledComponents.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
padding: 0.5rem;
gap:1rem;
background-color:#34568B;
`;

const Link = styledComponents.a`
font-size: 30px;
transition: 0.3s ease-in-out;
color: black;
&:hover {
transform: rotate(720deg) scale(1.2);
}
`;

export default Footer;