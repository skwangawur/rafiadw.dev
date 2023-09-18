interface SosialMediaProps {
  icon: string;
  alt: string;
  username: string;
  link: string;
}

function SocialMedia(props: SosialMediaProps) {
  const { icon, alt, username, link } = props;
  return (
    <a href={link} className="flex items-center gap-2 ">
      <div className="flex justify-center items-center rounded-full bg-dark-charcoal-gray border-dark-slate-gray border-2 hover:outline outline-dark-slate-gray   w-8 h-8">
        <img className="w-4 h-auto" src={icon} alt={alt} />
      </div>
      <p className="hidden lg:block text-white lg:text-xs xl:text-sm dark:text-dark-slate-gray">
        {username}
      </p>
    </a>
  );
}

export default SocialMedia;
