export interface ExperiencesCardProps {
  companyImage: string;
  job: string;
  company: string;
  companyUrl: string;
  location: string;
  date: string;
  duration: string;
}

function ExperienceCard(props: ExperiencesCardProps) {
  const { companyImage, job, company, companyUrl, location, date, duration } =
    props;
  return (
    <div className="flex p-3 border border-dark-slate-gray rounded-2xl gap-6">
      <div className="w-42 h-42 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={companyImage}
          alt={company}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-white text-xl sm:text-2xl font-bold group-hover:text-coral dark:text-charcoal-gray">
          {job}
        </h2>
        <div className="flex items-center gap-3 font-poppins text-gray-500">
          <a className="underline" href={companyUrl}>
            company
          </a>
          {company && location && (
            <span className="w-2 h-2 bg-dark-slate-gray"></span>
          )}
          <p>{location}</p>
        </div>
        <div className="font-poppins">
          <p className="text-gray-500">{date}</p>
          <p className="text-dark-slate-gray">
            {duration && <span className="mr-1">~</span>}
            {duration}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
