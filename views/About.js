import { Image, StyleSheet, Text, View, FlatList } from 'react-native';
import { alunos } from '../data/mock';


function CardAbout({aluno}) {
  return(
    
    <View style={styles.card}>
      <Text style={styles.text}>{aluno.nome}</Text>
      <Image style={styles.poster} source={aluno.img}/>
      <Text style={styles.text}>RM {aluno.rm}</Text>
    </View>
  )
}

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EQUIPE DESENVOLVIMENTO</Text>
      <FlatList  data={alunos} renderItem={({item})=><CardAbout aluno={item}/>} horizontal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: '10%',
    marginBottom: '5%',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    marginVertical: 10,
    fontSize: 20,
  },
  card: {
    position: 'relative',
    height: '70%',
    width: 170,
    backgroundColor: '#111',
    borderRadius: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 2,
    marginHorizontal: 10
  },
  poster: {
    position: 'absolute',
    bottom: '35%',
    width: '80%',
    height: '50%',
    borderRadius: '50%',
  },
  personalInfo: {
    color: 'pink',
  },
});
