import React from 'react';

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

export interface MovieData {
  Title: string;
  Poster: string;
  imdbID: string;
  Year: string;
}

type Props = {
  movie: MovieData;
}

export default function Movie(props: Props) {
  const { movie } = props;
  const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>
        <a href={`https://rarbgmirror.com/torrents.php?search=${movie.imdbID}`}>RARBG</a>
        &emsp;
        <a href={`https://www.imdb.com/title/${movie.imdbID}`}>{movie.imdbID}</a>
      </p>
      <p>({movie.Year})</p>
    </div>
  );
}