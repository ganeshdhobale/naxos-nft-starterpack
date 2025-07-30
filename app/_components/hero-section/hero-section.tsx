
import React from "react";
import HeroFrame from "./hero-frame";
import HeroMovingFrames from "./hero-moving-frames";
import Stats from "./stats";
import TextAnimation from "../text-animation";


const HeroSection = () => {
    return (
        <div className="flex flex-col gap-[40px] lg:gap-[30px] lg:py-[30px]">
            <div className="text-center px-[10px]">
                Naxos is a platform for creating and trading digital assets.
            </div>


            <div className="text-25 lg:text-60 flex flex-col items-center justify-center gap-[0px] font-bold lg:py-[25px]">

                <div className="flex items-center gap-[15px]">
                   <TextAnimation
                    delay={0.8} divideBy="letter">
                    Discover
                   </TextAnimation>
                    <HeroFrame
                        height={{
                            base: 34,
                            lg: 68,
                        }}
                        width={{
                            base: 123,
                            lg: 326,
                        }}
                        bgImage="/images/hero-frame-1.jpg"
                        animationType="scaleDown"
                    />
                    <TextAnimation
                    delay={0.8}
                    divideBy="letter"
                    >Collect</TextAnimation>

                </div>

                <div className="flex items-center gap-[15px]">
                  <HeroFrame
                    height={{
                            base: 34,
                            lg: 68,
                        }}
                        width={{
                            base: 123,
                            lg: 251,
                        }}
                      bgImage="/images/hero-frame-2.png"
                       animationType="move"
                  />
                  <TextAnimation
                  delay={1.1}
                  divideBy="letter"
                  >& Sell Extraordinary</TextAnimation>
                </div>
                <TextAnimation
                delay={1}
                divideBy="letter"
                >Rare NFTs</TextAnimation>
            </div>
            <div className="flex flex-col items-center justify-center gap-[25px] lg:flex-row lg:items-start lg:justify-between">
                <div className="lg:order-2">
                    <HeroMovingFrames/>
                </div>
             
                 <div className="lg:order-3">
                 <Stats/>
             </div>
             <span className="flex w-[202px] item-center justify-center text-center text-[8px] leading-3 lg:order-1 lg:text-start lg:leading-6 lg:text-18">
                <TextAnimation delay={1} divideBy="word">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, temporibus autem! Beatae architecto excepturi consequatur vel et fugiat accusamus quasi, quos consequuntur dignissimos veniam dicta magni dolore quia quis repudiandae?
                </TextAnimation>
             </span>
            </div>
        </div>
    )
}

export default HeroSection;