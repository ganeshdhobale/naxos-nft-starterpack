"use client"
import React, { useState } from "react";
import Logo from "./logo";
import MenuIcon from "./menu-icon";
import Link from "next/link";
import { Butterfly_Kids } from "next/font/google";
import Sidebar from "./sidebar";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header>
            <div className="flex justify-between items-center py-[7px]">
                <Logo />
                <div className="lg:hidden">
                    <MenuIcon
                        isOpen={isOpen}
                        setIsOpen={setIsOpen} />
                </div>
                <div className="hidden lg:flex gap-[25px] text-[18px]">
                    <Link href={"/"} className="hover:text-primary tranistion-colors">
                    Explore
                    </Link>
                    <Link href={"/"} className="hover:text-primary tranistion-colors">
                    Marketplace
                    </Link>
                    <Link href={"/"} className="hover:text-primary tranistion-colors">
                    Community
                    </Link>
                    <Link href={"/"} className="hover:text-primary tranistion-colors">
                    Creator
                    </Link>
                    <Link href={"/"} className="hover:text-primary tranistion-colors">
                    Support
                    </Link>
                </div>

                <button className="bg-primary hidden lg:block text-white px-[20px] py-[7px] rounded-full" >
                    Connect Wallet
                </button>
            </div>
            <Sidebar
            isOpen={isOpen} setIsOpen={setIsOpen}/>
        </header>
    )
}

export default Header;