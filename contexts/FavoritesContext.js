import { createContext, useState } from 'react';

export const FavoritesContext = createContext([]);

export function FavoritesProvider({ children }) {
  const [quantity, setQuantity] = useState(0);
  const [favorites, setFavorites] = useState([]);

  function addFavorite(media) {
    // Add new media
      media.favorite = !media.favorite
      setQuantity(quantity + 1)
      let newList = favorites;
      newList.push(media);
      setFavorites(newList);
    }

  function removeFavorite(media){
    // Remove media
    media.favorite = !media.favorite
      setQuantity(quantity - 1);
      let newList = favorites.filter(({id}) => media.id !== id);
      setFavorites(newList);
    }
  

  return <FavoritesContext.Provider value={{ quantity, addFavorite, removeFavorite, favorites}}>{children}</FavoritesContext.Provider>;
}
