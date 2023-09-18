import NavBar from "../components/ui/NavBar";
import myImage from "../assets/images/WhatsApp Image 2023-09-16 at 18.42.53.jpeg";
import AboutMe from "../components/ui/AboutMe";
import ProfilePhoto from "../components/ui/ProfilePhoto";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <section className="container mx-auto px-[5%] lg:grid lg:grid-cols-layout sm:px-[10%] xl:px-[15%] pb-10">
      <header className="flex  flex-col items-center lg:items-start ">
        <ProfilePhoto url={myImage} alt="profile photo rafi aditya" />
        <AboutMe
          title="Rafi Aditya"
          about="Lulusan ITTelkom Surabaya jurusan Teknologi Informasi yang tertarik dalam dunia pemrograman, jaringan dan sistem tertanam. "
        />
      </header>
      <main className="min-h-screen">
        <NavBar />
        <Outlet />
      </main>
    </section>
  );
}

export default Layout;
