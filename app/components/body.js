import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import Profiles from "../../assets/Profiles";

const Body = () => {
  return (
    <View style={styles.body}>
      <ImageBackground
        source={Profiles.mtl.image}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <Text style={styles.text}>{Profiles.mtl.name}</Text>
        <Text style={styles.text}>{Profiles.mtl.caption}</Text>
      </ImageBackground>
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
    shadowRadius: 10,
    shadowColor: "#000",
  },
  imageStyle: {
    borderRadius: 10,
    shadowColor: "#000",
  },
  text: {
    padding: 8,
    color: "white",
    fontSize: 32,
    fontFamily: "Sydney",
    fontStyle: "bold",
  },
  body: {
    padding: 15,
  },
});

export default Body;
