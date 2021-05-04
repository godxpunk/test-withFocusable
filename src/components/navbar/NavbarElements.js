import { FaSearch } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
	height: 80px;
	display: flex;
	padding-left: 2rem;
	padding-right: 2rem;
	z-index: 10;
	justify-content: flex-start;
	background: black;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%; 
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:focus {
		outline: none;
    background: #171717;
    border-radius: 10px;  
	}
  &.active {
    color: red;
    text-decoration: underline;
    text-underline-position: under;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: black;
  }

`;

export const SearchIcon = styled(FaSearch)`

`;

export const NavMenu = styled.div`
	display: flex;
	align-items: left;
	width: 100vw;
	white-space: nowrap;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavMember = styled.div`
	color: #fff;
	display: flex;
	font-size: 35px;
	align-items: center;
	margin-right: 10px;
	padding: 0.4rem;
	white-space: nowrap;
	@media screen and (max-width: 500px) {
		display: none;
	}
`;

export const NavBtn = styled(Link)`
	color: #fff;
	display: flex;
	font-size: 30px;
	align-items: center;
	margin-right: 10px;
	padding: 0.4rem;
  width: 14vw;
	justify-content: flex-end;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtnLink = styled(NavBtn)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &.active {
      color: red;
      text-decoration: underline;
    }
    &:hover {
      transition: all 0.2s ease-in-out;
      background: white;
      color: black;
    }

`;
