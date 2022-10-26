import { View, Text, FlatList } from 'react-native';
import Card from '../components/Card';
import useAxios from 'axios-hooks';

const API_KEY = "a55adc32b79ab3df78a42e319c93004d"

export default function TvShows() {
  const tvShowsUrl = `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`;
  const [{ data, loading }] = useAxios(tvShowsUrl);
  if (loading) return <Text>Carregando séries..</Text>;
  const tvShows = data.results;

  return <FlatList data={tvShows} initialNumToRender={7} renderItem={({ item }) => <Card media={item}></Card>} horizontal></FlatList>;
}
