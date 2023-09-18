import ExperienceCard from "../../components/ui/ExperienceCard";
import { ExperiencesCardProps } from "../../components/ui/ExperienceCard/ExperienceCard";
import { BiCodeAlt } from "../../assets/icon";
import { TechTools } from "../../components/ui/ProjectCard/TechCard";

const dummyExperiences: ExperiencesCardProps[] = [
  {
    companyImage: "url_gambar_1",
    job: "Software Engineer",
    company: "TechCorp",
    companyUrl: "https://www.techcorp.com",
    location: "Silicon Valley, CA",
    date: "Januari 2019 - Desember 2021",
    duration: "2 tahun",
  },
  {
    companyImage: "url_gambar_2",
    job: "Frontend Developer",
    company: "WebTech Solutions",
    companyUrl: "https://www.webtechsolutions.com",
    location: "New York, NY",
    date: "Maret 2017 - November 2018",
    duration: "1 tahun 8 bulan",
  },
  {
    companyImage: "url_gambar_3",
    job: "Full Stack Engineer",
    company: "CodeCrafters",
    companyUrl: "https://www.codecrafters.io",
    location: "San Francisco, CA",
    date: "Juli 2015 - Juni 2016",
    duration: "1 tahun",
  },
  {
    companyImage: "url_gambar_3",
    job: "Pekerjaan 3",
    company: "Perusahaan C",
    companyUrl: "https://www.perusahaanC.com",
    location: "Kota C",
    date: "Juli 2018 - Juni 2019",
    duration: "1 tahun",
  },
];

function Experiences() {
  return (
    <section className="mt-6 w-[96%] mx-auto">
      <div>
        <h1 className="block text-white font-montserrat text-2xl dark:text-dark-charcoal-gray">
          Career
        </h1>
        <div
          className="text-gray-500 font-poppins flex justify-between text-md mt-2
        "
        >
          <p>My professional career journey</p>
          <a className="hover:text-coral" href="">
            Download Resume
          </a>
        </div>
      </div>
      <div className="h-[2px] w-full bg-dark-slate-gray mt-4"></div>
      <div className="flex flex-col gap-4 mt-4">
        {dummyExperiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            companyImage={experience.companyImage}
            job={experience.job}
            company={experience.company}
            companyUrl={experience.companyUrl}
            location={experience.location}
            date={experience.date}
            duration={experience.duration}
          />
        ))}
      </div>
      <div className="h-[2px] w-full bg-dark-slate-gray mt-6"></div>
      <div className="mt-4 text-white">
        <div>
          <div className="flex items-center gap-3">
            <BiCodeAlt className="dark:text-dark-charcoal-gray" size={28} />
            <h1 className="text-white font-montserrat text-2xl dark:text-dark-charcoal-gray">
              {" "}
              Skills
            </h1>
          </div>
          <p className="text-gray-500 font-poppins  text-md mt-2">
            The tools I've used and am still learning.
          </p>
          <TechTools />
        </div>
      </div>
    </section>
  );
}

export default Experiences;
