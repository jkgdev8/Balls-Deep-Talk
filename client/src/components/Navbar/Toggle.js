import React from 'react'
import styled from 'styled-components';

import { FaBars } from 'react-icons/fa';

const Toggle = ({handleNavToggle}) => {
    return (
        <StyledToggle className="animate__animated animate__fadeInRight" onClick={handleNavToggle}>
            <FaBars/>
        </StyledToggle>
    )
}

const StyledToggle = styled.button`
display: none;
color: black;

@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  cursor: pointer;
}
`;

export default Toggle
