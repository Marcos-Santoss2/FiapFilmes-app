import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';

export default function Detail({ route }) {
  const navigation = useNavigation();
  const selectedMedia = route.params;
  const imgUri = 'https://image.tmdb.org/t/p/w400' + selectedMedia.poster_path;

  return (
    <View style={styles.container}>
      <Image style={styles.poster} source={{ uri: imgUri }}></Image>
      <View style={styles.mediaInformations}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{selectedMedia.original_name || selectedMedia.original_title}</Text>
          <Text style={styles.vote}>
            <MaterialIcons name='star' color='gold' size={25}></MaterialIcons>
            {selectedMedia.vote_average.toFixed(1)}
          </Text>
        </View>
        <Text style={styles.text}>{selectedMedia.overview}</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    paddingTop: Constants.statusBarHeight + 15,
  },
  mediaInformations: {
    paddingHorizontal: 10,
    height: '100%',
  },
  text: {
    color: '#fff',
    marginVertical: 15,
  },
  back: {
    display: 'flex',
    color: '#fff',
    backgroundColor: 'red',
    alignSelf: 'center',
    textAlign: 'center',
    width: '40%',
  },
  titleContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: '#fff',
  },
  poster: {
    width: '100%',
    height: '50%',
  },
  vote: {
    color: '#fff',
    opacity: 0.8,
    margin: 6,
    fontSize: 20,
  },
});
