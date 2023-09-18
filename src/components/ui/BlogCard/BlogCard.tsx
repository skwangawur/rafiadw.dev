import { RxExternalLink } from "react-icons/rx";
import DateIcon from "../../../assets/icon/icon__date.svg";
import BlogImage from "../../../assets/images/image.png";

function BlogCard() {
  return (
    <div className="flex w-full p-2 border border-dark-slate-gray gap-3 sm:gap-5 rounded-xl  group-hover:scale-105">
      <div className="rounded overflow-hidden w-[300px] h-auto">
        <img
          src={BlogImage}
          alt="blog image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-evenly">
        <div className="flex gap-2">
          <img src={DateIcon} alt="datetime" className="w-2 sm:w-3" />
          <p className="text-[10px] sm:text-xs text-state-gray">Apr 3, 2022</p>
        </div>
        <div className="flex">
          <h3 className="text-white text-xl sm:text-2xl xl:text-3xl font-bold group-hover:text-coral dark:text-charcoal-gray">
            Most Memorable Feedback{" "}
            <RxExternalLink className="text-white group-hover:text-coral dark:text-charcoal-gray" />
          </h3>
        </div>
        <p className="text-gray-500 text-[12px] sm:text-sm dark:text-charcoal-gray">
          Apa masukan yang paling berkesan dalam hidupmu?
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
