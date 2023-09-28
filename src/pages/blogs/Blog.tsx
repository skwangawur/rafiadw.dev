import BlogCard from "../../components/ui/BlogCard";
import blogs from "@/content/blogs";

function Blog() {
    return (
        <section className=" mt-7 flex flex-col gap-4 px-6">
            {blogs.map((blog, idx) => {
                const { meta } = blog;
                return (
                    <BlogCard
                        date={meta.date}
                        desc={meta.desc}
                        imageUrl={meta.imageUrl}
                        title={meta.title}
                        url={meta.file}
                        key={idx}
                    />
                );
            })}
        </section>
    );
}

export default Blog;
