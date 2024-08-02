import Colors from "@common/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  iconContainer: {
    backgroundColor: Colors.MediumGray,
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    bottom: 60,
    right: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
});
