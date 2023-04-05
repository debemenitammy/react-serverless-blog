import React, { useEffect, useState } from "react";
import { fetchPostsByPage } from "./butter";
import { useParams, Link } from "react-router-dom";

function BlogHome() {
  const params = useParams();
  const [state, setState] = useState({
    loading: false,
    resp: null,
  });

  useEffect(() => {
    let page = params.page || 1;
    fetchPostsByPage(page, setState);
  }, [params.page]);

  return state.loaded ? (
    <>
      <div>
        <ul style={{ listStyleType: "decimal-leading-zero" }}>
          {state.resp?.data.map((post) => {
            return (
              <li>
                <div key={post.slug}>
                  <Link className="blog-links" to={`/post/${post.slug}`}>{post.title}</Link>
                </div>
              </li>
            );
          })}
        </ul>
        <br />
        <div>
          {state.resp.meta.previous_page && (
            <Link to={`/p/${state.resp.meta.previous_page}`}>Prev</Link>
          )}
          {state.resp.meta.next_page && (
            <Link to={`/p/${state.resp.meta.next_page}`}>Next</Link>
          )}
        </div>
      </div>
    </>
  ) : (
    <div>Loading...</div>
  );
}
export default BlogHome;
