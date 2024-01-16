import FeaturedPost from "@/components/FeaturedPost";
import NewestPosts from "@/components/NewestPosts";

const examplePost = {
  title: "Building My Personal Blog",
  description:
    "Have you ever wondered why some developers choose to build their own blog systems from scratch instead of using ready-made solutions? In this post, I'll share my experience of creating msblog, my personal blog, and the reasons behind the decision to code it from the ground up.",
  date: "January 16, 2024",
  image: "/firstpost.png",
  link: "/building-my-personel-blog",
};

export default function Home() {
  return (
    <div>
      <div className="flex sm:flex-row flex-col space-x-4">
        <div className="rounded-lg sm:w-3/5 w-full">
          <FeaturedPost
            title={examplePost.title}
            description={examplePost.description}
            date={examplePost.date}
            image={examplePost.image}
            link={examplePost.link}
          />
        </div>
        <div className="w-full sm:w-2/5 border">
          <NewestPosts />
        </div>
      </div>
    </div>
  );
}
