import { Text, StyleSheet, View } from 'react-native';

export default function Title(props) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    paddingLeft: 4,
  },

  titleContainer: {
    borderColor: '#f06',
    borderStyle: 'solid',
    borderLeftWidth: 6,
    borderRadius: 1,
    marginVertical: 10,
  },
});
