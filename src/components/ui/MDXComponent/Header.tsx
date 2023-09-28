import { IoArrowBackSharp } from "@/assets/icon";
import { useNavigate } from "react-router-dom";

function Header({ author, date }: { author: string; date: string }) {
    const navigate = useNavigate();
    return (
        <header className="flex justify-between border-b-2 border-dashed border-dark-slate-gray ">
            <div className="flex gap-6 items-center p-4">
                <img
                    src="http://localhost:5173/src/assets/images/WhatsApp%20Image%202023-09-16%20at%2018.42.53.jpeg"
                    alt=""
                    className="rounded-full w-16 h-auto"
                />
                <div className="text-white font-poppins dark:text-dark-charcoal-gray">
                    <p className="text-xl font-semibold">{author}</p>
                    <p className="text-sm">{date}</p>
                </div>
            </div>
            <button
                className="text-white text-xl flex items-center gap-2 dark:text-dark-charcoal-gray"
                onClick={() => navigate(-1)}
            >
                <IoArrowBackSharp size={28} />
                <p className="font-bold">Go back</p>
            </button>
        </header>
    );
}

export default Header;
