import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, StyleSheet } from 'react-native';

export default function CountriesScreen() {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    fetch('https://drive.google.com/uc?export=download&id=1ozjX2tuBLpibvM9k0X61YwQKYnVUrNv-')
      .then((response) => response.json())
      .then((data) => setFlags(data))
      .catch((error) => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <Image source={{ uri: item.flag }} style={styles.flag} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={flags}
        renderItem={renderItem}
        keyExtractor={(item) => item.code}
        numColumns={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  flag: {
    width: 100,
    height: 60,
    margin: 5,
  },
});
