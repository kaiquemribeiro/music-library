export const busca = async () => {
  return await fetch(
    "https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/3155776842"
  )
    .then((Response) => Response.json())
    .then((data) => console.log(data));
};
