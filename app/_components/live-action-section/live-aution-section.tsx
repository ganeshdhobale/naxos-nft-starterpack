"use client"
import Image from "next/image";
import React, {  useRef } from "react";
import TextAnimation from "../text-animation";
import Button from "../button";
import { useScroll, useTransform ,motion} from "framer-motion";

const LiveAuctionSection = () => {

const containerRef = useRef<HTMLDivElement>(null);

const {scrollYProgress} = useScroll({
  target:containerRef,
  offset:["0 1","1 0"],
});

const monkeyY = useTransform(scrollYProgress,[0,0.7],[300,0]);


  return (
    <div
      className="flex flex-col gap-[40px] lg:flex-row lg:gap-[89px]">
      <div
      ref={containerRef}
        className="relative h-[243px] rounded-lg overflow-hidden bg-gradient-to-b from-[#EF962E] to-[#FFAF36] lg:h-[601px] lg:flex-1 lg:rounded-3xl"
      >
        <motion.div
        style={{y:monkeyY}}
        className="relative h-[100%] w-[100%] bottom-0 left-0 right-0 ml-auto mr-auto"
        >
        <Image
          src="/images/black-monkey.png"
          alt="monkey"
          fill
          className="object-cover" 
          />
          </motion.div>
      </div>
      <div
        className="flex flex-col gap-[14px]
        lg:flex-1 lg:justify-between
        ">
        <div className=" flex gap-[12px]">
          <div className="h-auto w-[4px]
          lg:w-[12px]
          rounded-md bg-[#6351DB]" />
          <span className="text-[12px] lg:text-25">
            <TextAnimation divideBy="word" delay={0.3}>
              Live Auction
            </TextAnimation>

          </span>
        </div>


        <span className="text-30 font-bold lg:text-60 lg:-mt-[40px]">
          <TextAnimation delay={0.4} divideBy="word">
            Bored_Ape #333
          </TextAnimation>

        </span>
        <div className="flex justify-between gap-[19px]">
          <Block
            title="Creator"
            image="/images/avatars/avatar-1.avif"
            name="@ganeshdhobale"
          />
          <Block
            title="Collection"
            image="/images/avatars/avatar-2.avif"
            name="Your Dream"
          />
        </div>

        <div className="flex justify-between gap-[19px]">
          <BidBlock title="Current Bid" content="1.23 ETH" />
          <BidBlock title="Ends in" content="12:50:23" />
        </div>

        <div className="flex gap-[19px] pt-[10px]">
          <Button>Start Mining</Button>
          <Button
          variant="outlined">Learn more</Button>

        </div>

      </div>
    </div>
  );
};

const Block = ({ title, image, name }: {
  title: string,
  image: string,
  name: string
}) => {
  return (
    <div className="flex flex-1 flex-col gap-[14px]">
      <span className="text-14 lg:text-25">
        <TextAnimation delay={0.5}>{title}</TextAnimation>
      </span>


      <div className="flex gap-[14px] rounded-lg bg-[#454448] px-[20px] py-[11px] lg:px-[20px] lg:py-[16px]">


        <div className="relative h-[25px] w-[25px] lg:h-[40px] lg:w-[40px]">

          <Image src={image} alt={"3d avatar"} fill className="rounded-full" />
        </div>
        <span className="text-14 lg:text-25">
          <TextAnimation delay={0.5}>{name}</TextAnimation>
        </span>
      </div>
    </div>
  );
};


const BidBlock = ({
  title,
  content
}: {
  title: string;
  content: string;

}) => {
  return (
    <div className="flex flex-1 flex-col">
      <span className="text-14 lg:text-25">
        <TextAnimation delay={0.5}>
          {title}
        </TextAnimation>
      </span>
      <span className="text-27 font-bold lg:text-55">
        <TextAnimation delay={.5}>
          {content}
        </TextAnimation>

      </span>
    </div>
  )
}





export default LiveAuctionSection;