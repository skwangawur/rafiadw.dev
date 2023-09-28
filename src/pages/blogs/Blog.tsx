import BlogCard from "../../components/ui/BlogCard";
import blogs from "@/content/blogs";

function Blog() {
    return (
        <section className=" mt-7 flex flex-col gap-4 px-6">
            {blogs?.map((blog, idx) => {
                return (
                    <BlogCard
                        date={blog.date}
                        desc={blog.desc}
                        imageUrl={blog.imageUrl}
                        title={blog.title}
                        url={blog.file}
                        key={idx}
                    />
                );
            })}
        </section>
    );
}

export default Blog;
