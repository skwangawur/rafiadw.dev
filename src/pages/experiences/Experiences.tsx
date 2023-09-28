import ExperienceCard from "@/components/ui/ExperienceCard";
import CareerJourney from "@/components/ui/CareerJourney/CareerJourney";
import Skills from "@/components/ui/Skills/Skills";
import experiences from "@/content/experiences";

function Experiences() {
    return (
        <section className="mt-6 w-[96%] mx-auto">
            <CareerJourney />
            <div className="h-[2px] w-full bg-dark-slate-gray mt-6"></div>
            <div className="flex flex-col gap-4 mt-4 overflow-y-auto">
                {experiences?.map((experience, index) => {
                    return (
                        <ExperienceCard
                            key={index}
                            companyImage={experience.companyImage}
                            position={experience.position}
                            company={experience.company}
                            companyUrl={experience.companyUrl}
                            location={experience.location}
                            date={experience.date}
                            duration={experience.duration}
                        />
                    );
                })}
            </div>
            <div className="h-[2px] w-full bg-dark-slate-gray mt-6"></div>
            <Skills />
        </section>
    );
}

export default Experiences;
