import { React } from "react";
import { useEffect, useState } from "react";
import { Card } from "./Card";

export const Home = () => {
  const [playlist, setPlaylist] = useState({ loading: true });

  useEffect(() => {
    if (localStorage.getItem("playlist") === null) {
      const url = "https://api.deezer.com/playlist/668126235";
      const fetchData = async () => {
        try {
          const res = await fetch(url);
          const data = await res.json();
          console.log(data);
          localStorage.setItem("playlist", JSON.stringify(data));
          setPlaylist(data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    } else {
      console.log("localStorage");
      const data = JSON.parse(localStorage.getItem("playlist"));
      setPlaylist(data);
    }
  }, []);

  console.log(playlist.loading);
  if (playlist.loading) {
    return <div>Loading...</div>;
  }
  console.log(playlist);
  console.log(playlist.tracks.data);

  return (
    //<Card track={playlist}></Card>
    <div className="flex flex-wrap space-x-3 justify-center text-center bg-gradient-to-l from-gray-800 to-white">
      {playlist.tracks.data.map((track) => (
        <Card
          key={track.id}
          track={track.title}
          cover={track.album.cover_medium}
          name={track.artist.name}
          album={track.album.title}
          link={track.link}
        ></Card>
      ))}
    </div>
  );
};
