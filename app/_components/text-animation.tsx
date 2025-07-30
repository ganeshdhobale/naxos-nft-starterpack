"use client"

import React from "react"
import { motion } from "framer-motion";

const TextAnimation = (
    {
        children,
        delay = 0,
        divideBy ="word",
    }: {
        children: string;
        delay?: number;
        divideBy?:"word" | "letter";
    }
) => {
    if(divideBy === "letter")
    {

    
    return (
    <samp>
            {children.split("").map((letter, index) => (
                 < motion.samp
                 className="relative inline-block overflow-hidden"
                 initial={{
                    clipPath:"polygon(0 100%,100% 100%,100% 100%,0 100%)",
                    y:-5
                 }}
                 whileInView={{
                      clipPath:"polygon(0 0,100% 0,100% 100%,0 100%)",
                      y:0,

                 }}
                viewport={{once:true}}
                transition={{
                    duration:0.8,
                    delay:delay + index * 0.02,
                    ease:"easeInOut",
                }}
                 key = { index }>
                <span className="inline-block">
                    {letter === ""? "\u00A0":letter }
                </span>
                 </motion.samp>
            ))}
        </samp>
    );
} else{
    return(
     <samp>
            {children.split(" ").map((word, index) => (
                 < motion.samp
                 className="relative inline-block overflow-hidden"
                 initial={{
                    clipPath:"polygon(0 100%,100% 100%,100% 100%,0 100%)",
                    y:-5
                 }}
                 whileInView={{
                      clipPath:"polygon(0 0,100% 0,100% 100%,0 100%)",
                      y:0,

                 }}
                viewport={{once:true}}
                transition={{
                    duration:0.5,
                    delay:delay + index * 0.05,
                    ease:"easeInOut",
                }}
                 key = { index }>
                  {word}&nbsp;
                 </motion.samp>
            ))}
        </samp>
    )
}
};

export default TextAnimation;