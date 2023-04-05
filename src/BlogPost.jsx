import React, { useEffect, useState } from "react";
import { retrievePostsBySlug } from "./butter";
import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";

function BlogPost() {
  const params = useParams();
  const [state, setState] = useState({
    loaded: false,
    post: null,
  });

  useEffect(() => {
    retrievePostsBySlug(params.slug, setState);
  }, []);

  if (state.loaded) {
    const post = state.post;

    return (
      <div>
        <Helmet>
          <title>{post.seo_title}</title>
          <meta name="description" content={post.meta_description} />
          <meta name="og:image" content={post.featured_image} />
        </Helmet>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        <Link className='goback' to="/"> Back </Link>
      </div>
    );
  } else {
    return <div>Loading...</div>
  }
}

export default BlogPost;
