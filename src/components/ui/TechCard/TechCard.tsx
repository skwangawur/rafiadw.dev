import React from "react";
import {
    SiTypescript,
    SiLaravel,
    SiTailwindcss,
    SiArduino,
    SiCplusplus,
    IoLogoNodejs,
    BiLogoGoLang,
    BiLogoPostgresql,
    TbBrandNextjs,
    SiCss3,
    SiExpress,
    SiMongodb,
    SiReact,
    SiSass,
    SiJavascript,
    SiHtml5,
} from "@/assets/icon";

function Card({ children, text }: { children: React.ReactNode; text: string }) {
    return (
        <div className="flex wrap gap-1 justify-center items-center border rounded-md border-white p-1  dark:border-gray-400">
            {children}
            <p className="text-white text-[10px] dark:text-charcoal-gray">
                {text}
            </p>
        </div>
    );
}

function TechStack({ tech }: { tech: string[] }) {
    const techStackType = (type: string) => {
        switch (type.toLowerCase()) {
        case "typescript":
            return (
                <Card text={type}>
                    <SiTypescript className="fill-blue-500" />
                </Card>
            );
        case "laravel":
            return (
                <Card text={type}>
                    <SiLaravel className="fill-red-400" />
                </Card>
            );
        case "tailwind":
            return (
                <Card text={type}>
                    <SiTailwindcss className="text-teal-400" />
                </Card>
            );
        case "arduino":
            return (
                <Card text={type}>
                    <SiArduino className="fill-emerald-500" />
                </Card>
            );
        case "nodejs":
            return (
                <Card text={type}>
                    <IoLogoNodejs className="fill-green-600" />
                </Card>
            );
        case "c++":
            return (
                <Card text={type}>
                    <SiCplusplus className="fill-blue-600" />
                </Card>
            );
        default:
            return null; // Mengembalikan null untuk teknologi yang tidak terdaftar
        }
    };

    return (
        <>
            {tech.map((item, key) => (
                <div key={key}>{techStackType(item)}</div>
            ))}
        </>
    );
}

function TechTools() {
    return (
        <section className="flex gap-6 mt-6 flex-wrap items-center">
            <SiHtml5 className="text-orange-500" size={40} />{" "}
            <SiCss3 size={40} className="text-blue-500" />
            <SiJavascript className="text-yellow-400" size={40} />{" "}
            <SiSass className="text-pink-600" size={40} />{" "}
            <SiTypescript className="text-blue-500" size={40} />{" "}
            <IoLogoNodejs className="text-green-600" size={40} />{" "}
            <BiLogoPostgresql className="text-blue-400" size={40} />{" "}
            <SiMongodb className="text-green-600" size={40} />
            <SiReact className="text-sky-500" size={40} />{" "}
            <TbBrandNextjs className=" dark:stroke-black" size={40} />{" "}
            <SiExpress className="dark:text-black" size={40} />{" "}
            <SiArduino className="text-teal-500" size={40} />{" "}
            <BiLogoGoLang className="text-sky-500" size={50} />
        </section>
    );
}

export { TechStack, TechTools };
