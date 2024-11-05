import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";

interface WelcomeScreenProps {
  navigation: NavigationProp<any>;
}

export default function WelcomeScreen({
  navigation,
}: Readonly<WelcomeScreenProps>) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.headerWrapper}>
          <Image
            style={styles.image}
            source={require("../assets/logo-brand.png")}
            resizeMode="contain"
            accessible={true}
            accessibilityLabel={"Little Lemon Logo"}
          />
          <Text style={styles.regularText}>
            Little Lemon, your local Mediterranean Bistro
          </Text>
        </View>
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <Pressable
          onPress={() => navigation.navigate("Subscribe")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Newsletter</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerWrapper: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  regularText: {
    fontSize: 20,
    padding: 20,
    marginVertical: 8,
    color: "#000",
    textAlign: "center",
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
  },
  buttonWrapper: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#495e57",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: 300,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});