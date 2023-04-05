import Butter from "buttercms";
const butter = Butter("b41053deb541f5725fa2e56763a02e2ce4f1cc36");

export function fetchPostsByPage(page, setState) {
  butter.post.list({ page: page, page_size: 10 }).then((resp) => {
    setState({
      loaded: true,
      resp: resp.data,
    });
  });
}

export function retrievePostsBySlug(slug, setState) {
  butter.post.retrieve(slug).then((resp) => {
    setState({
      loaded: true,
      post: resp.data.data,
    });
  });
}
