import { Link } from "react-router-dom";

interface ButtonProps {
    text: string;
}

function Button(props: ButtonProps) {
    const { text } = props;
    return (
        <Link
            className="inline-block mt-5 rounded-3xl bg-coral border hover:bg-orange-500 border-dark-slate-gray px-5 py-3 text-lg text-white dark:border-0"
            to="mailto:rafiadw@gmail.com"
        >
            <button
                aria-describedby="contact-me"
                className="font-semibold text-[#14181F]"
            >
                {text}
            </button>
        </Link>
    );
}

export default Button;
