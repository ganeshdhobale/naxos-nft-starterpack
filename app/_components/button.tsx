import React from "react";
import { twMerge } from "tailwind-merge";

const Button = (
    {
        children,
        variant = "filled",

    }: {
        children: React.ReactNode;
        variant?: "filled" | "outlined"; 
    }) => {
    return <button
    className={twMerge(
    "flex w-full items-center justify-center rounded-md px-[24px] py-[9px] font-semibold text-white lg:block lg:px-[43px] lg:py-[18px]",
    variant === "filled" ? "bg-primary" : "border-primary border-[2px] bg-transparent hover:bg-[#454448]"
    )}
    >
        <span className="text-14 lg:text-20"></span>
        {children}
    </button>
};

export default Button;