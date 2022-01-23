import { React } from "react";
import "../App.css";

export const Card = (props) => {
  if (!props) {
    return <div>Loading...</div>;
  }

  const trackLength = props.track.length > 20;
  const albumlength = props.album.length > 20;

  return (
    <>
      <a className="rounded-md bg-white w-50 h-50 m-5 ease-in duration-300 shadow-md" href={props.link} target="_blank" rel="noopener noreferrer">
        <img src={props.cover} alt="cover" className="rounded-t-md" />
        <p className="hover:cursor-text text-left pl-2">
          <b>Artist:</b> {props.name}
        </p>
        {trackLength ? (
          <p className="hover:cursor-text text-left pl-2">
            <b>Track:</b> {props.track.substring(0, 20)}...
          </p>
        ) : (
          <p className="hover:cursor-text text-left pl-2">
            <b>Track:</b> {props.track}
          </p>
        )}
        {albumlength ? (
          <p className="hover:cursor-text text-left pl-2">
            <b>Album:</b> {props.album.substring(0, 20)}...
          </p>
        ) : (
          <p className="hover:cursor-text text-left pl-2">
            {" "}
            <b>Album:</b> {props.album}
          </p>
        )}
      </a>
    </>
  );
};
