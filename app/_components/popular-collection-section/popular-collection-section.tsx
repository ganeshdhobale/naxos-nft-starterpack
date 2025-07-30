"use client"
import React, { useState } from "react";
import TextAnimation from "../text-animation";
import CollectionCategory from "./collection-category";
import { COLLECTION_DATA } from "@/app/_data/collection";
import CollectionCard from "./collection-card";
import { motion, AnimatePresence } from "framer-motion";


const PopularCollectionSection = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    return (
        <div className="flex flex-col gap-[29px] lg:gap-[76px]">
            <span className="text-30 lg:text-60 px-[15px] text-center font-bold">

                <TextAnimation delay={0.2} divideBy="letter">
                    Get Popular Collection here
                </TextAnimation>
            </span>
            <CollectionCategory
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

            <div className="flex flex-col flex-wrap items-center justify-start gap-[29px] lg:min-h-[755px] lg:flex-row lg:justify-center lg:gap-x-[42px] lg:gap-y-[25px] ">
                <AnimatePresence mode="popLayout">
                    {(selectedCategory === "all"
                        ? COLLECTION_DATA
                        : COLLECTION_DATA.filter((card) => card.category === selectedCategory)
                    ).map((card, i) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            layout
                            key={i} className="w-full lg:w-auto">
                            <CollectionCard card={card} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default PopularCollectionSection;
