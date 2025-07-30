import React from "react";
import Logo from "../header/logo";
import Button from "../button";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
                <Logo />
                <div className="flex items-center gap-4">
                    <span className="text-nowrap font-bold lg:text-25">
                        Ready to collect?
                    </span>
                    <Button variant="filled">
                        Subscribe
                    </Button>
                </div>
            </div>

            <div
                className="h-[1px] w-full bg-white/50"
            />



            <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
                <div className="grid grid-cols-3 gap-4 lg:order-2 lg:gap-10">
                    <div className="flex flex-col gap-4 text-16 lg:text-18">
                        <span className="text-primary font-bold">Marketplace</span>
                        <div className="flex flex-col gap-2">
                            <Link href="/">Create</Link>
                            <Link href="/">Mining</Link>
                            <Link href="/">Sell</Link>
                            <Link href="/">Collect</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 text-16">
                        <span className="text-primary font-bold">Marketplace</span>
                        <div className="flex flex-col gap-2">
                            <Link href="/">Bug Bounty</Link>
                            <Link href="/">Community Guidline</Link>
                            <Link href="/">Team</Link>
                            <Link href="/">Careers</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 text-16">
                        <span className="text-primary font-bold">Marketplace</span>
                        <div className="flex flex-col gap-2">
                            <Link href="/">FAQs</Link>
                            <Link href="/">Contact</Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col text-center items-center gap-5 lg:items-start lg:text-left lg:justify-between">
                    <div>
                        <span className="text-16 lg:text-25">
                            Create,Sell And collect
                        </span>
                        <br />
                        <span className="text-16 lg:text-25 font-bold">
                            GD Digital Arts
                        </span>
                    </div>
                    <div className="flex items-center gap-4">

                        <Link href="/">
                            <Image
                                src="/images/social/linkedin.png" alt="social" width={40}
                                height={40} />
                        </Link>
                        <Link href="/">
                            <Image
                                src="/images/social/x.png" alt="social" width={40}
                                height={40} />
                        </Link>
                        <Link href="/">
                            <Image
                                src="/images/social/facebook.png" alt="social" width={40}
                                height={40} />
                        </Link>
                        <Link href="/">
                            <Image
                                src="/images/social/youtube.png" alt="social" width={40}
                                height={40} />
                        </Link>
                        <Link href="/">
                            <Image
                                src="/images/social/insta.png"
                                 alt="social" width={40}
                                height={40} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;