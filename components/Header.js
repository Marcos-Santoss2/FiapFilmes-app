import { useNavigation } from '@react-navigation/native';
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { media } from '../data/mock';

export default function Header() {
  const navigation = useNavigation(); // Hook
  const mockData = media;
  return (
    <View>
      <Image style={styles.img} source={{ uri: 'https://image.tmdb.org/t/p/w780/xtd2eJkaxL6TJHvEx2Z0EVOhfR7.jpg' }} />
      <TouchableOpacity onPress={() => navigation.navigate('Detail', mockData)}>
        <Text style={styles.button}>Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 200,
  },
  button: {
    color: '#fff',
    backgroundColor: '#F06',
    padding: 6,
    textAlign: 'center',
    width: 180,
    alignSelf: 'center',
    borderRadius: 6,
    overflow: 'hidden',
    marginTop: -15,
    zIndex: 999,
  },
});
