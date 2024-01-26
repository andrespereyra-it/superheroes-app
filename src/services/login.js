const ENDPOINT = "http://challenge-react.alkemy.org/";

export default function login({ email, password }) {
  return fetch(`${ENDPOINT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Response is NOT ok");
      return res.json();
    })
    .then((res) => {
      const { token } = res;
      return token;
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
}
