import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Icons from "../../assets/Icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={Icons.menu.light} style={styles.headerIcons} />
      <Text style={styles.title}> ensome</Text>
      <Image source={Icons.sun} style={styles.headerIcons} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerIcons: {
    height: windowWidth * 0.15,
    width: windowWidth * 0.15,
  },
  title: {
    fontFamily: "SydneyBold",
    fontWeight: "bold",
    fontSize: 32,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },
});

export default Header;
