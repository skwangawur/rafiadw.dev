import { HelmetProvider, Helmet } from "react-helmet-async";
import "./App.css";
import myImage from "./assets/images/photo-profile.png";
import AboutMe from "./components/ui/AboutMe";
import NavBar from "./components/ui/NavBar";
import ProfilePhoto from "./components/ui/ProfilePhoto";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta
          name="description"
          content="Ini adalah profil saya. Saya memiliki pengalaman dalam pengembangan web dan telah menyelesaikan berbagai proyek."
        />
        <meta
          name="keywords"
          content="profil, pengalaman, proyek, web development"
        />
        <link rel="canonical" href="https://www.contoh.com/profil-saya" />
      </Helmet>
      <div className="mx-[5%] lg:grid lg:grid-cols-layout lg:mx-[15%]">
        <div className="flex justify-center flex-col items-center lg:items-start  ">
          <ProfilePhoto url={myImage} alt="profile photo rafi aditya" />
          <AboutMe
            title="Rafi Aditya"
            about="Lulusan ITTelkom Surabaya jurusan Teknologi Informasi yang tertarik dalam dunia pemrograman, jaringan dan sistem tertanam. "
          />
        </div>
        <NavBar />
      </div>
    </HelmetProvider>
  );
}

export default App;
