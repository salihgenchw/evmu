import "react-native-gesture-handler";
import { StyleSheet, StatusBar } from "react-native";
import AppNavigation from "./src/Navigation/Navigation";

const App = () => {
  return (
    <>
      <AppNavigation />
      <StatusBar backgroundColor="#bf3924" barStyle="default" />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
