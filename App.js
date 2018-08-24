import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Filemon Steven Juliyanto</Text>
        <Text>XI RPL 2</Text>
        <Text>19</Text>
        <Image source={require('./gb1.jpg')} style={{width: 100, height: 100}} />
       </View>
    );
  }
}	

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
