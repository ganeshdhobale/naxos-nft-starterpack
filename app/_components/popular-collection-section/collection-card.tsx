import Image from "next/image";
import React from "react";


const CollectionCard = ({
    card,
  } :{
    card: {
        name: string;
        username: string;
        avatar: string;
        category: string;
        nfts: {
            bg: string;
            image: string;
        }[]; 
    };
      }) => {
    return (
        <div className="flex w-[100%] flex-col gap-[10px] rounded-[10px] bg-white/10 p-[10px] lg:gap-[20px] lg:w-[380px]  lg:flex-1 lg:p-[20px]"
        >

            <div className="flex items-start justify-between">


                <div className="flex items-center gap-3">
                    <div className="relative h-[26px] w-[26px] lg:h-[47px] lg:w-[47px]">
                        <Image
                            src={card.avatar}
                            alt="user" 
                            fill
                            className="rounded-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-12 lg:text-18">{card.name}</span>
                        <span className="text-10 lg:text-14 text-white/50">{card.username}</span>
                    </div>
                </div>


                <div className="flex items-center gap-2">
                    <div className="relative h-[18px]w-[18px] lg:h-[20px] lg:w-[20px]">
                        <Image
                            src="/images/heart.png"
                            alt="heart"
                            fill
                            className="object-centain"
                        />


                    </div>
                    <span className="text-[11px] lg:text-18">124</span>
                </div>
            </div>
            <div className="grid grid-col-2 gap-4">
                <div className="relative w-full flex-1 h-[257px] overflow-hidden rounded-lg"
                    style={{ backgroundColor: card.nfts[0].bg }}
                >
                    <Image
                        src={card.nfts[0].image}
                        alt="collection element"
                        fill
                        className="object-cover" />
                </div>

                <div className="flex flex-col gap-4">
                    <div
                        className="relative flex-1 w-full overflow-hidden rounded-lg"
                        style={{ backgroundColor: card.nfts[1].bg }}>
                        <Image
                            src={card.nfts[1].image}
                            alt="collection image"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="relative flex-1 w-full overflow-hidden rounded-lg"
                        style={{ backgroundColor: card.nfts[2].bg }}
                    >
                        <Image
                            src={card.nfts[2].image}
                            alt="collection image"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

            </div>
        </div>
    );

};

export default CollectionCard;