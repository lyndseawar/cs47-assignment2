import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ImageComponent,
  Dimensions,
} from "react-native";
import Icons from "../../assets/Icons";
import Profiles from "../../assets/Profiles";

const Body = () => {
  return (
    <View style={[styles.body, styles.shadowProp]}>
      <ImageBackground
        source={Profiles.taylorswift.image}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <Text style={styles.text}>{Profiles.taylorswift.name}</Text>
        <Text style={styles.text2}>{Profiles.taylorswift.caption}</Text>
      </ImageBackground>

      <View style={styles.audioContainer}>
        <Text style={styles.hottake}>My hottest take</Text>
        <View style={styles.container}>
          <Image style={styles.playbutton} source={Icons.player.light} />
          <Image style={styles.audioWave} source={Icons.audioWave.light} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1 / 1.1,
    justifyContent: "space-between",
    alignItems: "left",
    borderRadius: 8,
  },
  imageStyle: {
    borderRadius: 10,
  },
  text: {
    padding: 8,
    color: "white",
    fontSize: 32,
    fontFamily: "Sydney",
    fontStyle: "bold",
  },
  text2: {
    padding: 8,
    color: "white",
    fontSize: 18,
    fontFamily: "Sydney",
    fontStyle: "bold",
  },
  body: {
    padding: 15,
  },
  shadowProp: {
    shadowColor: "171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  audioWave: {
    flex: 1,
    height: 50,
    resizeMode: "contain",
  },
  playbutton: {
    margin: 8,
    height: 50,
    width: 50,
  },
  hottake: {
    textAlign: "center",
    fontFamily: "Sydney",
    fontSize: 24,
    alignSelf: "flex-start",
  },
  audioContainer: {
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
});

export default Body;
