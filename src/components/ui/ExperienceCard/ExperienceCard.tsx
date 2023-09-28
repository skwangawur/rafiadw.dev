export interface ExperiencesCardProps {
  companyImage: string;
  position: string;
  company: string;
  companyUrl: string;
  location: string;
  date: string;
  duration: string;
}

function ExperienceCard(props: ExperiencesCardProps) {
    const {
        companyImage,
        position,
        company,
        companyUrl,
        location,
        date,
        duration,
    } = props;
    return (
        <div className="flex p-3 border border-dark-slate-gray rounded-2xl gap-6">
            <div className="w-28 h-28 overflow-hidden rounded-md">
                <img
                    className="w-full h-full object-cover"
                    src={companyImage}
                    alt={company}
                />
            </div>
            <div className="flex flex-col justify-evenly">
                <h2 className="text-white text-lg lg:text-2xl sm:text-xl font-bold group-hover:text-coral dark:text-charcoal-gray">
                    {position}
                </h2>
                <div className="flex items-center text-sm lg:text-base gap-3 font-poppins text-gray-500">
                    <a className="underline" href={companyUrl}>
                        {company}
                    </a>
                    {company && location && (
                        <span className="w-2 h-2 bg-dark-slate-gray"></span>
                    )}
                    <p>{location}</p>
                </div>
                <div className="font-poppins text-xs lg:text-sm">
                    <p className="text-gray-500">{date}</p>
                    <p className="text-gray-600">
                        {duration && <span className="mr-1">~</span>}
                        {duration}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard;
