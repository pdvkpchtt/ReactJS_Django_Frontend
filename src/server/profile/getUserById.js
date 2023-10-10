const getUserById = async (userId) => {
  const res = await fetch(`http://localhost:8000/profile`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: userId }),
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
      else return data;
    });

  return res;
};

export default getUserById;
