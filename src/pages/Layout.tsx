import NavBar from "@/components/ui/NavBar";
import myImage from "@/assets/images/WhatsApp Image 2023-09-16 at 18.42.53.jpeg";
import AboutMe from "@/components/ui/AboutMe";
import ProfilePhoto from "@/components/ui/ProfilePhoto";
import { Outlet } from "react-router-dom";
import * as React from "react";

function Layout() {
    return (
        <section className="container mx-auto px-[5%] flex flex-col lg:flex-row sm:px-[10%] xl:px-[15%] pb-10">
            <header className="flex flex-col items-center lg:items-start  lg:fixed">
                <ProfilePhoto url={myImage} alt="profile photo rafi aditya" />
                <AboutMe
                    title="Rafi Aditya"
                    about="ITTelkom Surabaya graduate majoring in Information Technology who is interested in the world of programming, networking and embedded systems."
                />
            </header>
            <main className="min-h-screen w-full lg:w-[70%] ml-auto">
                <NavBar />
                <React.Suspense>
                    <Outlet />
                </React.Suspense>
            </main>
        </section>
    );
}

export default Layout;
