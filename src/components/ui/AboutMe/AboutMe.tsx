import * as React from "react";

import { SiGithub, SiInstagram, SiLinkedin } from "@/assets/icon";
import Button from "../Button";
import SocialMedia from "../SocialMedia/SocialMedia";
import Moon from "@/assets/images/moon 1.svg";
import Sunny from "@/assets/images/sunny 1.svg";

interface AboutMeProps {
    title: string;
    about: string;
}

function AboutMe(props: AboutMeProps) {
    const [isChecked, setIsChecked] = React.useState<boolean>(true);

    const handleToggleChange = () => {
        setIsChecked(!isChecked);
        if (!isChecked) {
            localStorage.setItem("themes", "dark");
            document.body.style.backgroundColor = "#161b22";
            document.documentElement.classList.remove("dark");
        } else {
            localStorage.setItem("themes", "light");
            document.body.style.backgroundColor = "white";
            document.documentElement.classList.add("dark");
        }
    };

    const { title, about } = props;
    return (
        <div className="object-contain sm:w-[300px] text-center lg:text-start lg:w-[250px]">
            <h1 className="flex gap-2 justify-center text-3xl text-white mt-6 font-poppins font-extrabold lg:justify-start dark:text-charcoal-gray">
                {title} <div className="wave ml-1">👋</div>
            </h1>
            <div className="flex justify-center gap-4 items-center mt-4 lg:justify-start">
                <div className="flex gap-2 items-baseline justify-center lg:justify-start">
                    <div className="w-[5px] h-[5px] bg-green-400 hired rounded-full"></div>
                    <p className="text-slate-400 dark:text-slate-500 text-base">
                        available for hire.
                    </p>
                </div>
                <div className="flex items-center">
                    <label htmlFor="toggle" className=" cursor-pointer">
                        <div className="relative">
                            <input
                                type="checkbox"
                                id="toggle"
                                className="hidden"
                                checked={isChecked}
                                onChange={handleToggleChange}
                            />
                            <div
                                className={`flex items-center w-[45px] h-[25px] bg-cover rounded-full transition-colors ${
                                    isChecked ? "bg-night" : "bg-sky"
                                }`}
                            >
                                {isChecked ? (
                                    <img
                                        src={Moon}
                                        alt=""
                                        className="absolute w-5 h-5 rounded-full shadow left-1  top-[2px] z-40 transition translate-x-[100%]"
                                    />
                                ) : (
                                    <img
                                        src={Sunny}
                                        alt=""
                                        className="absolute w-5 h-5 rounded-full shadow left-[2px] top-[2px] z-40 transition "
                                    />
                                )}
                            </div>
                        </div>
                    </label>
                </div>
            </div>
            <p className="text-md text-white w-[300px] lg:w-[80%] lg:text-sm xl:text-base mt-4 font-montserrat  dark:text-charcoal-gray">
                {about}
            </p>
            <div className="flex gap-4 justify-center mt-5 lg:flex-col lg:justify-start">
                <SocialMedia
                    icon={<SiGithub className="text-white" />}
                    alt="github skwangawur"
                    username="github.com/rafiadw"
                    link="https://github.com/skwangawur"
                />
                <SocialMedia
                    icon={<SiInstagram className="text-white" />}
                    alt="instagram rafiadw"
                    username="@rafiadw"
                    link="https://www.instagram.com/rafiadw"
                />
                <SocialMedia
                    icon={<SiLinkedin className="text-white" />}
                    alt="linkedln skwangawurr"
                    username="linkedln.com/rafiadw"
                    link="https://www.linkedin.com/in/rafiadw/cl"
                />
            </div>
            <Button text="contact me!" />
        </div>
    );
}

export default AboutMe;
