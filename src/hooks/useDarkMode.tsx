import * as React from "react";

export const useDarkMode = () => {
    const [isDark, setIsDark] = React.useState<boolean>(true);

    React.useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.remove("dark");
            document.body.style.backgroundColor = "#161b22";
            setIsDark(true);
        } else {
            document.documentElement.classList.add("dark");
            document.body.style.backgroundColor = "white";
            setIsDark(false);
        }
    }, []);

    const handleDarkMode = () => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "light");
            document.body.style.backgroundColor = "white";
            setIsDark(false);
        } else {
            document.documentElement.classList.remove("dark");
            document.body.style.backgroundColor = "#161b22";
            localStorage.setItem("theme", "dark");
            setIsDark(true);
        }
    };

    return { isDark, handleDarkMode };
};
