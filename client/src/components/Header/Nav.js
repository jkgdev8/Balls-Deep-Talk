import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav `
 background: #414242e1;
 height: 100px;
 display: flex;
 justify-content: space-between;
 padding: 0.5 rem calc((100vw - 1000px) / 2);
 z-index: 10;
`

export const NavLink = styled(Link) `
 color: #fff;
 margin-left: 10px;
 align-items: center;
 text-decoration: none;
 padding: 0 1rem;
 height: 100%;
 cursor: pointer;

 &.active{
    color: #ffbb00;
}
`


export const Bars = styled(FaBars)`
 display: none;
 color: #fff;

 @media screen and (max-width: 768px) {
     display: block;
     position: absolute;
     top: 0;
     right: 0;
     transform: translate(-100%, 75%);
     font-size: 1.8 rem;
     cursor: pointer;
}
` 

export const NavMenu = styled.div`
 display: flex;
 align-items: center;
 margin-right: 100px;
 
 @media screen and (max-width: 768px) {
     display: none;
 }
`

export const NavBtn = styled.nav`
 display: flex;
 align-items: center;
 margin-right: 24px;
 
 @media screen and (max-width: 768px) {
     display: none;
 }
`
export const NavBtnLink = styled(Link)`
 border-default: 4px;
 background: #256ce;
 padding: 10px 22px;
 color: #fff;
 border: none;
 outline: none;
 cursor: pointer;
 transition: all 0.2s ease-in-out;
 text-decoration: none;

 &:hover {
     transition: all 0.2s ease-in-out;
     color: #010606;
 }
 `