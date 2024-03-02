import { fetchPosts } from "@/actions/posts";
import Loader from "@/components/shared/loader";
import React, { Suspense } from "react";

const AboutPage = async () => {
  const posts = await fetchPosts();

  return (
    <div>
      <h1>Posts</h1>
      <Suspense fallback={<Loader />}>
        {posts.map((post: any) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </Suspense>
    </div>
  );
};

export default AboutPage;
