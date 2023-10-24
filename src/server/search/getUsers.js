const getUsers = async (input, cursor) => {
  const res = await fetch(`http://localhost:8000/search/getusers`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ input, cursor }),
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

export default getUsers;
