import BlogCards from "./BlogCard";

async function getBlogs() {
    const response = await fetch('http://localhost:3100/blogs');
    return response.json();
}

export default async function Blog() {
    const blogs = await getBlogs();
    return <BlogCards blogs={blogs}/>
}