import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { styles } from './styles';

interface TNote {
  idNumber: string;
  description: string;
  date: string;
  color: string;
}

interface NoteListProps {
  notes: TNote[];
  onEditNote: (noteId: string) => void;
  onDeleteNote: (noteId: string) => void;
  onBoxPress: (index: number, color: string) => void;
}

const NoteList = ({
  notes,
  onEditNote,
  onDeleteNote,
  onBoxPress,
}: NoteListProps) => {
  const boxColors = [
    {color: 'orange'},
    {color: '#ccc'},
    {color: 'green'},
    {color: 'blue'},
    {color: 'red'},
  ];

  const Delete = <Icon2 name="delete" size={24} color="#900" />;
  const Edit = <Icon name="edit" size={26} color="#000" />;

  return (
    <FlatList
      data={notes}
      keyExtractor={item => item.idNumber}
      renderItem={({item}) => (
        <View style={[styles.noteContainer, {backgroundColor: item.color}]}>
          <Text style={styles.noteDesc}>{item.description}</Text>
          <Text style={styles.noteDate}>{item.date}</Text>
          <View style={styles.rowContainer}>
            {boxColors.map((box, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={[
                    styles.box,
                    {backgroundColor: box.color},
                    item.color === box.color && styles.focusedBox,
                  ]}
                  onPress={() => onBoxPress(index, box.color)}
                />
              </View>
            ))}
          </View>
          <View style={styles.iconRow}>
            <TouchableOpacity onPress={() => onEditNote(item.idNumber)}>
              {Edit}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onDeleteNote(item.idNumber)}>
              {Delete}
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};



export default NoteList;
