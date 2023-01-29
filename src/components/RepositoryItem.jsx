import { View, StyleSheet, Image, Text } from 'react-native';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection:"row"
  },
  flexItemA: {
    flexGrow: 0,
  },
  flexItemB: {
    flexGrow: 1,
    padding:5
  },
  logo: {
    height:66,
    width:66,
    flexGrow:0,
  },
  textBold: {
    fontWeight:"bold",
  },
  textCenter:{
    textAlign:"center"
  },
  languageButton: {
    backgroundColor:"#1357a6",
    color:"#FFFFFF",
    marginLeft:71,
    padding:5
  },
  componentGap: {
    backgroundColor:"#808080",
    height:15,
    marginTop:15
  },
  component:{
    paddingTop:15,
  },
  category: {
    flexGrow: 0,
    flexBasis:"25%",
    padding:10,
    textAlign:"center"
  },
});

const TextCenter = ({text,bold})=>{
  return(
    <Text style={[styles.textCenter,bold&&styles.textBold]}>{text}</Text>
  )
}

export const RepositoryItem = ({ 
  fullName,
  description,
  language,
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
  ownerAvatarUrl
}) => (
    <View style={styles.component}>
      <View style={styles.flexContainer}>
        <View style={styles.flexItemA}>
          <Image style={styles.logo} source={{uri:ownerAvatarUrl}} />
        </View>
        <View style={styles.flexItemB}>
          <Text style={styles.textBold}>{fullName}</Text>
          <Text>{description}</Text>
        </View>
      </View>
      <View style={styles.flexContainer}>
        <View style={styles.flexItemA}>
          <Text style={styles.languageButton}>
            Language:{language}
          </Text>
        </View>
      </View>
      <View style={styles.flexContainer}>
        <View style={styles.category}>
          <TextCenter text={stargazersCount} bold/>
          <TextCenter text="Stars"/>
        </View>
        <View style={styles.category}>
          <TextCenter text={forksCount} bold/>
          <TextCenter text="Forks"/>
        </View>
        <View style={styles.category}>
          <TextCenter text={reviewCount} bold/>
          <TextCenter text="Reviews"/>
        </View>
        <View style={styles.category}>
          <TextCenter text={ratingAverage} bold/>
          <TextCenter text="Ratings"/>
        </View>
      </View>
      <View style={styles.componentGap} />
    </View>
  );