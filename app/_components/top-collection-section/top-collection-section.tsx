"use client"
import React from "react";
import TextAnimation from "../text-animation";
import { TOP_COLLECTION_DATA } from "@/app/_data/top-collection";
import Image from "next/image";
import { motion } from "framer-motion";

const TopCollectionSection = () => {
    return(
        <div className="flex flex-col gap-[16px]">
            <span className="text-30 lg:text-60 px-[28px] text-center font-bold">
               <TextAnimation delay={0.2} divideBy="letter" >
                 Our Top Collection
               </TextAnimation>
            </span>

            <div className="flex flex-col items-center justify-center gap-[10px] lg:mt-4 lg:flex-row lg:flex-wrap lg:gap-x-16">
                {TOP_COLLECTION_DATA.map((item,index)=>(
                        <motion.div 
                        initial={{opacity:0,y: 20}}
                        whileInView={{opacity: 1,y:0}}
                        viewport={{once:true}}
                        transition={{
                            duration:0.5,
                            delay:index*0.1,
                            ease:"easeOut"
                        }}
                        key={index}
                        className="flex w-[100%] max-w-[320] items-center
                        gap-[8px] border-b-white/40 border-b py-[9px] lg:gap-[19px] lg:py-[28px]"
                        
                        >
                            <span className="text-16 lg:text-22 font-bold">{index + 1}.</span>
                            <Image
                            src={item.image}
                            alt="image-collection"
                            width={35}
                            height={35}
                            className="rounded-full"
                            />
                            <div className="flex flex-col gap-[5px]">
                                <span className="text-[12px] lg:text-18 font-bold">
                                {item.name}
                                </span>
                                <span className="font-bold text-10 lg:text-18  text-white/40">
                                   $ {item.price.toLocaleString()}
                                </span>

                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    );
};

export default TopCollectionSection;