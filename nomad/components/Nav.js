import { View, Text, StyleSheet } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
const Nav = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon_container}>
        <Entypo style={styles.icons} name="magnifying-glass" size={24} />
      </View>
      <View style={styles.icon_container}>
        <AntDesign style={styles.icons} name="camerao" size={24} />
      </View>
      <View style={styles.icon_container}>
        <AntDesign style={styles.icons} name="home" size={24} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Set flexDirection to "row" for horizontal layout
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 4,
  },
  icons: {
    width: 50,
    margin: 5,
    alignItems: "center",
  },
  icon_container: {
    alignItems: "center",
  },
});

export default Nav;
