import { useNavigation } from '@react-navigation/native';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useContext, useState } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { LastSeenContext } from '../contexts/LastSeenContext';

export default function Card({ media }) {
  const navigation = useNavigation();
  const { removeFavorite, addFavorite } = useContext(FavoritesContext);

  const { newLastSeen } = useContext(LastSeenContext);

  function bookmark () {
    if(!media.favorite){
      addFavorite(media)
    } else removeFavorite(media)
  }

  const imgUri = 'https://image.tmdb.org/t/p/w200' + media.poster_path;

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Detail', media);
        newLastSeen(media);
      }}
    >
      <View style={styles.card}>
        <TouchableOpacity onPress={() => bookmark()}>
          <MaterialIcons
            style={styles.favorite}
            name={media.favorite ? 'favorite' : 'favorite-border'}
            color={media.favorite ? 'red' : 'white'}
            size={20}
          ></MaterialIcons>
        </TouchableOpacity>
        <Image style={styles.poster} source={{ uri: imgUri }}></Image>
        <Text style={styles.vote}>
          <MaterialIcons name='star' color='gold' size={16}></MaterialIcons>
          {media.vote_average.toFixed(1)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    height: 190,
    width: 100,
    backgroundColor: '#111',
    borderRadius: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 5,
  },
  poster: {
    width: '100%',
    height: 140,
    borderRadius: 6,
  },
  vote: {
    color: '#fff',
    opacity: 0.8,
    margin: 6,
  },
  favorite: {
  paddingHorizontal: 10
  },
});
