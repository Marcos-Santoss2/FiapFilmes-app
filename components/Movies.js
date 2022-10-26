import { View, Text, FlatList } from 'react-native';
import Card from '../components/Card';
import useAxios from 'axios-hooks';


const API_KEY = "a55adc32b79ab3df78a42e319c93004d"

export default function Movies() {
  const moviesUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
  const [{ data, loading }] = useAxios(moviesUrl);
  if (loading) return <Text>Carregando filmes..</Text>;
  const movies = data.results;

  return <View>{<FlatList data={movies} renderItem={({ item }) => <Card media={item}></Card>} horizontal/>}</View>;
}
