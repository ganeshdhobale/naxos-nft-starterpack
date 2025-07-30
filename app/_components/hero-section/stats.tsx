"use client"
import React from "react";
import { motion } from "framer-motion";
import useWindowSize from "@/app/_hooks/useWindowSize";
const Stats = () => {

    const isMobile = useWindowSize()
    return (
        <div className="flex items-center justify-center gap-[50px] lg:flex-col">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1,x:isMobile ? 0:-205 }}
                transition={{ duration: 0.4, delay: .2 }}

            >
                <StatItem name={"Rare Nfts"} number={"10k+"} />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1,x:isMobile?0:-105 }}
                transition={{ duration: 0.4, delay: 0.4 }}

            >
                <StatItem name={"products"} number={"70k+"} />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1,x:isMobile?0:-20 }}
                transition={{ duration: 0.4, delay: 0.6 }}

            >
                <StatItem name={"nft artists"} number={"05k+"} />
            </motion.div>


        </div>
    );
};

const StatItem = ({
    name,
    number,
}: {
    name: string;
    number: string;
}) => {
    return (
        <div className="flex flex-col items-center justify-center uppercase">
            <span className="text-25 lg:text-45 font-bold">{number}</span>
            <span className="text-10 lg:text-20">{name}</span>
        </div>
    )
}





export default Stats;