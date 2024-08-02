import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import Svg_Close_icon from '../../assets/svgs/Svg_Close_icon';
import { styles } from './styles';

interface NoteModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSave: () => void;
  description: string;
  onDescriptionChange: (text: string) => void;
  selectedColor: string;
  onBoxPress: (index: number, color: string) => void;
  selectedBox: number | null;
  editMode: boolean;
}

const NoteModal = ({
  isVisible,
  onClose,
  onSave,
  description,
  onDescriptionChange,
  selectedColor,
  onBoxPress,
  selectedBox,
  editMode,
}: NoteModalProps) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const boxColors = [
    {color: 'orange'},
    {color: '#ccc'},
    {color: 'green'},
    {color: 'blue'},
    {color: 'red'},
  ];

  useEffect(() => {
    // Enable button only if a color is selected and description is not empty
    setIsButtonDisabled(selectedBox === null || description.trim() === '');
  }, [selectedBox, description]);
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} style={styles.modal}>
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>
            {editMode ? 'Edit Note' : 'Add Note'}
          </Text>
          <TouchableOpacity onPress={onClose}>
            <Svg_Close_icon />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TextInput
            style={styles.textInput}
            placeholder={
              editMode ? 'Edit description...' : 'Enter description...'
            }
            placeholderTextColor="#888"
            value={description}
            onChangeText={onDescriptionChange}
            multiline={true}
          />
          <View style={styles.rowContainer}>
            {boxColors.map((box, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.box,
                  {backgroundColor: box.color},
                  selectedBox === index && styles.focusedBox,
                ]}
                onPress={() => onBoxPress(index, box.color)}
              />
            ))}
          </View>
        </View>
        <TouchableOpacity
          style={[styles.button, isButtonDisabled && styles.disabledButton]}
          onPress={onSave}
          disabled={isButtonDisabled}>
          <Text
            style={[
              styles.buttonText,
              isButtonDisabled && styles.disabledButtonText,
            ]}>
            {editMode ? 'Save Changes' : 'Add Note'}
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

// const styles = StyleSheet.create({
//   modal: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     width: width * 0.8,
//     height: height * 0.6,
//     padding: 20,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     justifyContent: 'space-between',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//   },
//   title: {
//     color: 'red',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   content: {
//     flex: 1,
//   },
//   textInput: {
//     width: '100%',
//     height: 100,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 10,
//     padding: 10,
//     marginTop: 50,
//     textAlignVertical: 'top',
//     color: 'black',
//   },
//   button: {
//     width: '100%',
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: '#ccc',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonText: {
//     color: 'green',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   rowContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginVertical: 20,
//     gap: 5,
//   },
//   box: {
//     width: 40,
//     height: 40,
//     borderRadius: 5,
//     borderWidth: 2,
//     borderColor: 'transparent',
//   },
//   focusedBox: {
//     borderColor: 'black',
//   },
// });

export default NoteModal;
