import { IoArrowBackSharp } from "@/assets/icon";
import { Link } from "react-router-dom";
import myImage from "@/assets/images/WhatsApp Image 2023-09-16 at 18.42.53.jpeg";

function Header({ author, date }: { author: string; date: string }) {
    return (
        <header className="flex justify-between border-b-2 border-dashed border-dark-slate-gray ">
            <div className="flex gap-6 items-center p-4">
                <img
                    src={myImage}
                    alt=""
                    className="rounded-full w-16 h-auto"
                />
                <div className="text-white font-poppins dark:text-dark-charcoal-gray">
                    <p className="text-xl font-semibold">{author}</p>
                    <p className="text-sm">{date}</p>
                </div>
            </div>
            <Link
                to={"/"}
                className="text-white  flex items-center gap-2 dark:text-dark-charcoal-gray hover:text-coral"
            >
                <IoArrowBackSharp size={28} />
                <p className="font-bold text-base md:text-xl">Go back</p>
            </Link>
        </header>
    );
}

export default Header;
