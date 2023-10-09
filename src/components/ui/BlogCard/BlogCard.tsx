import { BsCalendarDate, RxExternalLink } from "@/assets/icon";
import { Link } from "react-router-dom";
interface BlogCardProps {
    imageUrl: string;
    date: string;
    title: string;
    desc: string;
    url: string;
}

function BlogCard(props: BlogCardProps) {
    const { imageUrl, date, title, desc, url } = props;
    return (
        <div className="group flex w-full p-2 border border-dark-slate-gray gap-3 sm:gap-5 rounded-xl  hover:scale-105">
            <div className="rounded w-[200px]">
                <img
                    src={imageUrl}
                    alt="blog image"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col gap-2 w-4/5">
                <div className="flex gap-2">
                    <BsCalendarDate className="text-state-gray" />
                    <p className="text-[10px] sm:text-xs text-state-gray">
                        {date}
                    </p>
                </div>
                <Link to={`blogs/${url}`} className="flex">
                    <h1 className="text-white text-xl sm:text-2xl xl:text-[28px]  font-bold group-hover:text-coral dark:text-charcoal-gray">
                        <div className="line-clamp-2">{title}</div>
                        <RxExternalLink className="text-white group-hover:text-coral dark:text-charcoal-gray" />
                    </h1>
                </Link>
                <p className="text-gray-300 text-[12px] sm:text-sm dark:text-charcoal-gray line-clamp-2">
                    {desc}
                </p>
            </div>
        </div>
    );
}

export default BlogCard;
