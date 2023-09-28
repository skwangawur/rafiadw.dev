import { MDXComponents } from "mdx/types";
import Header from "./Header";
import Image from "./Image";

const component: MDXComponents = {
    Header,
    Image,
    h1: ({ id, children }) => (
        <h1
            id={id}
            className="text-5xl font-montserrat font-extrabold text-white my-8 dark:text-dark-charcoal-gray"
        >
            {children}
        </h1>
    ),
    h2: ({ id, children }) => (
        <h2
            id={id}
            className="text-3xl font-montserrat font-extrabold text-white mt-4 dark:text-dark-charcoal-gray"
        >
            {children}
        </h2>
    ),
    h3: ({ id, children }) => (
        <h3
            id={id}
            className="text-xl font-montserrat font-extrabold text-white mt-4 dark:text-dark-charcoal-gray"
        >
            {children}
        </h3>
    ),
    p: ({ children }) => (
        <p className="text-lg text-white mt-6 font-poppins dark:text-dark-charcoal-gray">
            {children}
        </p>
    ),
    ol: ({ children }) => (
        <ol className="list-decimal ml-6  font-poppins text-white text-lg dark:text-dark-charcoal-gray p-4">
            {children}
        </ol>
    ),
    ul: ({ children }) => (
        <ul className="list-disc ml-6  font-poppins text-white text-lg mt-6 dark:text-dark-charcoal-gray">
            {children}
        </ul>
    ),
    blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-dark-charcoal-gray pl-6 italic rounded-l-sm font-poppins">
            {children}
        </blockquote>
    ),
};

export default component;
