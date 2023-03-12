import {useState, useSyncExternalStore} from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from "../constants/index.js";


const Navbar = () => {

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={logo} alt="hoobank"
            className="w-[124px] h-[32px]"/>
            <ul className="list_none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li key={nav.id}  className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' :' mr-10'} text-white mr-10`} >
                        <a href={`#${nav.id}`}> {nav.title} </a>
                    </li>
                ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items_center">
                <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev) => !prev)}  />
                <div
                    className={`${
                        !toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}  >
                </div>
                <ul className="list_none flex-col justify-end items-center flex-1">
                    {navLinks.map((nav, index) => (
                        <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' :' mb-4'} text-white mr-10`} >
                            <a href={`#${nav.id}`}> {nav.title} </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;