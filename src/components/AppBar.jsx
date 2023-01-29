import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Link } from "react-router-native";
import Constants from 'expo-constants';
import theme from './theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#000000",
    paddingBottom: 30,
    opacity:0.7,
    display:"flex",
    flexDirection:"row"
  },
  category: { 
    margin:5
  },
  text: {
    color:"#FFFFFF",
    fontFamily:theme.fonts.main
  }
});

export const AppBar = () => {
  return(
    <View 
      style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.category}>
          <Link to="/">
            <Text style={styles.text}>
              Repositoriesss
            </Text>
          </Link>
        </View>
        <View style={styles.category}>
          <Link to="/signin">
            <Text style={styles.text}>
              Sign in
            </Text>
          </Link>
        </View>
      </ScrollView>
    </View>
    )
};