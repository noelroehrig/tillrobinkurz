"use client";
import React, { useState } from 'react';
import { useRef } from "react";
import { useClickAway } from "react-use";
import { Squeeze as Hamburger } from 'hamburger-react'


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    const ref = useRef(null);

    useClickAway(ref, () => setIsOpen(false));

    return(     
        <div ref={ref}>
            <Hamburger toggled={isOpen} toggle={handleClick} />    
            {isOpen && ( // TODO: Entkoppeln vom rest, verschiebt beim aufklappen das frontend || Dropdown menu component?
                <div className="left-0 right-0 top-[3.5rem] pt-0">
                    <ul className="grid gap-2">
                        <li className="p-[0.08rem] w-auto">
                            <a className="flex items-center justify-between w-full"
                                href="/projekte">
                                <span className="flex gap-1 text-lg">Projekte</span>
                            </a>
                        </li>
                        <li className="p-[0.08rem] w-auto"> 
                        {// TODO: Aufklappbar für projektauswahl
                        }
                            <a className="flex items-center justify-between w-full"
                                href="/projekte">
                                <span className="flex gap-1 text-lg">ProjekteProjekteProjekte</span>
                            </a>
                        </li>
                        <li className="p-[0.08rem] w-auto">
                            <a className="flex items-center justify-between w-full"
                                href="/projekte">
                                <span className="flex gap-1 text-lg">Projekte</span>
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Nav