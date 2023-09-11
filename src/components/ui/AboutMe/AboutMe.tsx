import Github from "../../../assets/icon/icon__github.svg";
import Instagram from "../../../assets/icon/icon__instagram.svg";
import Linkedln from "../../../assets/icon/icon__linkedln.svg";
import SocialMedia from "./SocialMedia/SocialMedia";
interface AboutMeProps {
  title: string;
  about: string;
}

function AboutMe(props: AboutMeProps) {
  const { title, about } = props;
  return (
    <div className="block sm:w-[300px] text-center lg:text-start lg:w-[250px] ">
      <h1 className="flex gap-2 justify-center text-3xl text-white mt-6 font-poppins font-black lg:justify-start">
        {title} <div className="wave ml-1">👋</div>
      </h1>

      <p className="text-md text-white w-[300px] lg:w-[80%] lg:text-sm mt-4 font-montserrat">
        {about}
      </p>
      <div className="flex gap-4 justify-center mt-5 lg:flex-col lg:justify-start">
        <SocialMedia
          icon={Github}
          alt="github skwangawur"
          username="github.com/rafiadw"
          link="https://github.com/skwangawur"
        />
        <SocialMedia
          icon={Instagram}
          alt="instagram rafiadw"
          username="@rafiadw"
          link="https://www.instagram.com/rafiadw"
        />
        <SocialMedia
          icon={Linkedln}
          alt="linkedln skwangawurr"
          username="linkedln.com/rafiadw"
          link="https://www.linkedln.com/rafiadw"
        />
      </div>
    </div>
  );
}

export default AboutMe;
