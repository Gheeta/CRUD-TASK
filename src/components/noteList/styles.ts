import {Dimensions, StyleSheet} from 'react-native';

// const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  noteContainer: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 2,
    borderRadius: 5,
  },
  noteDate: {
    fontSize: 14,
    color: 'gray',
  },
  noteDesc: {
    fontSize: 18,
    color: 'black',
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
  iconRow: {
    flexDirection: 'row',
    gap: 15,
  },
});
