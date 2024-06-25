export default function ProfileBlog() {
  return (
    <main className="flex flex-col gap-6">
      <BlogWrite />
      <BlogSection />
    </main>
  );
}

function BlogWrite() {
  return (
    <main className="bg-white mx-5 px-5 py-4 lg:mx-0">
      <input
        className="h-9 bg-responsibility w-full rounded-full px-6 cursor-pointer"
        placeholder="Write your blog"
        type="text"
        disabled
      />
    </main>
  );
}

function BlogSection() {
  return <main className="h-svh bg-white"></main>;
}
