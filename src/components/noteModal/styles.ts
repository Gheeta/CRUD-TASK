import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: width * 0.8,
    height: height * 0.6,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  textInput: {
    width: '100%',
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 50,
    textAlignVertical: 'top',
    color: 'black',
  },
  button: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    gap: 5,
  },
  box: {
    width: 40,
    height: 40,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  focusedBox: {
    borderColor: 'black',
  },
  disabledButton: {
    backgroundColor: '#ddd',
  },
  disabledButtonText: {
    color: '#888',
  },
});
