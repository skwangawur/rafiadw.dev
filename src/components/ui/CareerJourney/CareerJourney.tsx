import myCV from "@/assets/pdf/cv.pdf";

function CareerJourney() {
    return (
        <div>
            <h1 className="block text-white font-montserrat text-2xl dark:text-dark-charcoal-gray">
        Career
            </h1>
            <div
                className="text-gray-500 font-poppins flex justify-between text-sm lg:text-md mt-2
    "
            >
                <p>My professional career journey</p>
                <a
                    className="hover:text-coral flex items-center"
                    href={myCV}
                    download="CV_Moch Rafi Adityawarman.pdf"
                >
                    <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="mr-1"
                        height="24px"
                        width="24px"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                    </svg>
          Download Resume
                </a>
            </div>
        </div>
    );
}

export default CareerJourney;
