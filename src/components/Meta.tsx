import { HelmetProvider, Helmet, HelmetProps } from "react-helmet-async";
import * as React from "react";

interface MetaProps extends HelmetProps {
    children: React.ReactNode;
}

function Meta({ children, ...props }: MetaProps) {
    return (
        <HelmetProvider>
            <Helmet {...props}>
                <meta
                    name="description"
                    content="Ini adalah web profil saya. Saya memiliki pengalaman dalam pengembangan web dan telah menyelesaikan berbagai proyek."
                />
                <meta
                    name="keywords"
                    content="profil, pengalaman, proyek, web development"
                />
                <link rel="canonical" href="https://rafiadw.vercel.app/" />
                <meta name="robots" content="index, follow"></meta>
                <meta
                    name="keywords"
                    content="rafi aditya, rafiadw, portofolio, web developer, pengembang web, proyek web, front-end, back-end, sistem tertanam, jaringan komputer"
                ></meta>
                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://rafiadw.vercel.app" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Rafiadw | Ready to collaborate!"
                />
                <meta
                    property="og:description"
                    content="Web portfolio dari Rafi Aditya. Rafi memiliki ketertarikan pada bidang sistem tertanam, pengembangan web, dan jaringan komputer."
                />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/dqoyjfyzt/image/upload/v1695969710/WhatsApp_Image_2023-09-16_at_18.42.53_fhiqz8.jpg"
                />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="rafiadw.vercel.app" />
                <meta
                    property="twitter:url"
                    content="https://rafiadw.vercel.app"
                />
                <meta
                    name="twitter:title"
                    content="Rafiadw | Ready to collaborate!"
                />
                <meta
                    name="twitter:description"
                    content="Web portfolio dari Rafi Aditya. Rafi memiliki ketertarikan pada bidang sistem tertanam, pengembangan web, dan jaringan komputer."
                />
                <meta
                    name="twitter:image"
                    content="https://res.cloudinary.com/dqoyjfyzt/image/upload/v1695969710/WhatsApp_Image_2023-09-16_at_18.42.53_fhiqz8.jpg"
                />
            </Helmet>
            {children}
        </HelmetProvider>
    );
}

export default Meta;
