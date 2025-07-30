import { CATEGORY_DATA } from "@/app/_data/category";
import React from "react";
import { twMerge } from "tailwind-merge";
import {motion} from "framer-motion";

const CollectionCategory = ({
    selectedCategory,
    setSelectedCategory,
}: {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}) => {


      const containerVariants = {
        hidden: { opacity :0 },
        show:{
            opacity:1,
            transition: {
                staggerChildren:0.1,
            },
        },
      };
     
      const itemVariants = {
        hidden: {opacity: 0 , y: 20 },
        show: { opacity: 1, y: 0 },
      };


    return (
        <motion.div
        variants={containerVariants}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-[14px]"
            >

                {CATEGORY_DATA.map((category) =>
                    <motion.div
                    variants={itemVariants}
                        key={category.value} className={twMerge("cursor-pointer text-10 lg:text-16 rounded-full border border-white/50 px-[20px] py-[8px] text-center lg:min-w-[100px] lg:px-[40px] lg:py-[11px] ",
                            selectedCategory === category.value && "bg-primary border-none"
                        )}
                        onClick={() => setSelectedCategory(category.value)}

                    >
                        {category.name}

                    </motion.div>

                )

            }</motion.div>
    )
}

export default CollectionCategory;