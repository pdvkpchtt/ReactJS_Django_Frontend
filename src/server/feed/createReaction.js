const createReaction = async (userId, postId, type) => {
  await fetch(`http://localhost:8000/feed/createreaction`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, postId, type }),
  })
    .catch((err) => {
      return;
    })
    .then((res) => {
      if (!res || !res.ok || res.status >= 400) return;
      return res.json();
    })
    .then((data) => {
      if (!data) return;
    });
};

export default createReaction;
