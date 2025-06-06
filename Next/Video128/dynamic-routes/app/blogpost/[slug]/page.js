export default function Page({ params }) {
    return (
        <div>
            <h1>Blog Post: {params.slug}</h1>
            <p>This is the content for the blog post with slug: {params.slug}</p>
        </div>
    );
}