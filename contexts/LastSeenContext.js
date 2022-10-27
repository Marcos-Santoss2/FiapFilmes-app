import { createContext, useState } from 'react';

export const LastSeenContext = createContext([]);

export function LastSeenProvider({ children }) {
  const [moviesLastSeen, setMoviesLastSeen] = useState([]);
  const [tvShowsLastSeen, setTvShowsLastSeen] = useState([]);

  

  function newLastSeen(media) {

    const { media_type, id } = media;
    if (media_type === 'movie' && !moviesLastSeen.some((movie) => movie.id === id)) {
      if (moviesLastSeen.length < 5) {
        let newList = moviesLastSeen;
        newList.push(media);
        setMoviesLastSeen(newList);
      } else {
        let newList = moviesLastSeen;
        newList.shift(); // Removes first item; oldest one.
        newList.push(media);
        setMoviesLastSeen(newList);
      }
    } else if (media_type === 'tv' && !tvShowsLastSeen.some((tvShow) => tvShow.id === id)) {
      if (tvShowsLastSeen.length < 5) {
        let newList = tvShowsLastSeen;
        newList.push(media);
        setTvShowsLastSeen(newList);
      } else {
        let newList = tvShowsLastSeen;
        newList.shift(); // Removes first item; oldest one.
        newList.push(media);
        setTvShowsLastSeen(newList);
      }
    }
    
  }

  return <LastSeenContext.Provider value={{ tvShowsLastSeen , moviesLastSeen, newLastSeen }}>{children}</LastSeenContext.Provider>;
}
