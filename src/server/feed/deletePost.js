const deletePost = async (postId) => {
  await fetch(`http://localhost:8000/feed/deletepost`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ postId }),
  });
};

export default deletePost;
