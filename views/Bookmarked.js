import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import { FavoritesContext } from '../contexts/FavoritesContext';
import Constants from 'expo-constants';
import Title from '../components/Title';

export default function Bookmarked() {
  const { favorites, quantity } = useContext(FavoritesContext);

  // No bookmarked media yet
  if (quantity === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Adicione ao menos um filme aos favoritos para exibi-lo(s) nessa aba.</Text>
      </View>
    );
  }

  const movies = favorites.filter((media) => media.media_type === 'movie');
  const tvShows = favorites.filter((media) => media.media_type === 'tv');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>
      <Text style={styles.text}>{'Quantidade de favoritados: ' + quantity}</Text>
      <View style={movies.length ? { display: 'block' } : { display: 'none' }}>
        <Title text='Filmes'></Title>
        <FlatList data={movies} renderItem={({ item }) => <Card media={item}></Card>} horizontal></FlatList>
      </View>
      <View style={tvShows.length ? { display: 'block' } : { display: 'none' }}>
        <Title text='Series'></Title>
        <FlatList data={tvShows} renderItem={({ item }) => <Card media={item}></Card>} horizontal></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    padding: 15,
    paddingTop: Constants.statusBarHeight + 15,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
  },
});
