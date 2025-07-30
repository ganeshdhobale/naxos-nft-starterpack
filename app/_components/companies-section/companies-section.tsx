import Image from "next/image";
import { Container } from "postcss";
import React from "react";

const CompaniesSection = () => {
    return (
        <div className="relative w-full py-10 overflow-hidden">
            <div className="whitespace-nowrap animate-scroll">
                {
                    [...Array(2)].map((_,ContainerIndex)=>(

               
                <div key={ContainerIndex} className="inline-flex items-center gap-[78px] mr-[78px]">

               
                {Array.from({ length: 7 }).map((_, index) => (
                 <div className="inline-block "key={`${ContainerIndex}-${index}`}>
                            <Image
                                src={`/images/companies/com-${index + 1}.png`}
                                alt="company"
                                height={150}
                                width={150}
                                className="min-w-[100px] w-[150px] h-[150px] object-contain"
                            />
                        </div>
                    ))
                }
            </div>
                 ))
                }
            </div>
        </div>
    );
};

export default CompaniesSection; 