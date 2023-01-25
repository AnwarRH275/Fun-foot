import { FlatList, View, Text, StyleSheet } from 'react-native';

const data = [
  { key: '1', section: 'Section 1' },
  { key: '2', section: 'Section 2' },
  { key: '3', section: 'Section 3' },
  { key: '4', section: 'Section 4' },
];

const Grid = () => {
  return (
    <FlatList
      data={data}
      numColumns={2} // Number of columns
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{item.section}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    height: 150, // Adjust the height of each section
    width: '50%', // Adjust the width of each section
  },
  itemText: {
    fontSize: 18,
  },
});

export default Grid;
