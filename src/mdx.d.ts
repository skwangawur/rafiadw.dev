declare module "*.mdx" {
    export const metaExperience: {
        company: string;
        position: string;
        companyImage: string;
        location: string;
        companyUrl: string;
        date: string;
        duration: string;
    };

    export const metaBlog: {
        imageUrl: string;
        title: string;
        desc: string;
        date: string;
        file: string;
        author: string;
    };

    export const metaProject: {
        imageUrl: string;
        title: string;
        desc: string;
        techStacks: string[];
        projectLink: string;
    };
}
