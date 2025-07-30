import React from "react";
import TextAnimation from "../text-animation";
import Button from "../button";

const SubscribeSection = () => {
    return (
        <div className="flex flex-col w-full items-center justify-center gap-[16px] lg:gap-[37px]">
            <span className="text-30 lg:text-60 px-[45px] text-center font-bold">
                <TextAnimation delay={0.4} divideBy="letter">
                    Subscribe to get latest updates
                </TextAnimation>
            </span>
            <span className="text-[9px] lg:text-14 ">
                <TextAnimation delay={0.5} divideBy="word">
                     Lorem ispum is simply the dummy text for printing and types
                </TextAnimation>
            </span>
            <div className="flex gap-[9px]">
                <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-[320px] min-w-[216px] rounded-md border border-white/20 bg-white/10 px-[16px] lg:min-w-[554px]"
                />
                <Button variant="filled">
                    Subscribe
                </Button>
            </div>
        </div>
    )
}

export default SubscribeSection;