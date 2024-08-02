import React, {useState, useMemo} from 'react';
import {View, TouchableOpacity} from 'react-native';
import SearchInput from '../../components/searchInput';
import Svg_Active_Add from '../../assets/svgs/Svg_Active_Add';

import {useDispatch, useSelector} from 'react-redux';
import {setNewNote, setUpdateNote} from '../../store/slices/noteSlice';
import NoteModal from '@components/noteModal';
import NoteList from '@components/noteList';
import {styles} from './styles';

interface TNote {
  idNumber: string;
  description: string;
  date: string;
  color: string;
}

// to generate random id
const generateRandomId = () => {
  return Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
};

// to get current date
const getCurrentDate = () => {
  const now = new Date();
  return now.toLocaleDateString();
};

const NoteScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [description, setDescription] = useState('');
  const [selectedBox, setSelectedBox] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [currentNote, setCurrentNote] = useState<any>(null);

  const dispatch = useDispatch();
  const notes = useSelector((state: any) => state.note.noteList);

  const handleDescriptionChange = (text: string) => setDescription(text);
  const handleSearchChange = (text: string) => setSearchValue(text);
  const handleIconPress = () => setModalVisible(true);
  const handleCloseEditModal = () => setEditModalVisible(false);

  const handleCloseModal = () => {
    const id = generateRandomId();
    const date = getCurrentDate();
    const noteData = {
      idNumber: id,
      date: date,
      description,
      color: selectedColor,
    };
    dispatch(setNewNote(noteData));
    setDescription('');
    setSelectedBox(null);
    setSelectedColor('');
    setModalVisible(false);
  };

  const handleEditNote = (noteId: string) => {
    const noteToEdit = notes.find((note: TNote) => note.idNumber === noteId);
    if (noteToEdit) {
      setCurrentNote(noteToEdit);
      setDescription(noteToEdit.description);
      setSelectedColor(noteToEdit.color);
      setEditModalVisible(true);
    }
  };

  const handleSaveEdit = () => {
    const updatedNotes = notes.map((note: TNote) =>
      note.idNumber === currentNote.idNumber
        ? {...note, description, color: selectedColor}
        : note,
    );
    dispatch(setUpdateNote(updatedNotes));
    setCurrentNote(null);
    setDescription('');
    setSelectedColor('');
    setEditModalVisible(false);
  };

  const handleBoxPress = (index: number, color: string) => {
    setSelectedBox(index);
    setSelectedColor(color);
  };

  const handleDeleteNote = (noteId: string) => {
    const updatedNotes = notes.filter(
      (note: TNote) => note.idNumber !== noteId,
    );
    dispatch(setUpdateNote(updatedNotes));
  };

  // Memoized filtered notes based on searchValue
  const filteredNotes = useMemo(() => {
    return notes.filter((note: TNote) =>
      note.description.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }, [notes, searchValue]);

  return (
    <View style={styles.container}>
      <SearchInput
        value={searchValue}
        onChangeText={handleSearchChange}
        placeholder="Search for ..."
      />
      <TouchableOpacity style={styles.iconContainer} onPress={handleIconPress}>
        <Svg_Active_Add />
      </TouchableOpacity>
      <NoteModal
        isVisible={modalVisible}
        onClose={handleCloseModal}
        onSave={handleCloseModal}
        description={description}
        onDescriptionChange={handleDescriptionChange}
        selectedColor={selectedColor}
        onBoxPress={handleBoxPress}
        selectedBox={selectedBox}
        editMode={false}
      />
      <NoteModal
        isVisible={editModalVisible}
        onClose={handleCloseEditModal}
        onSave={handleSaveEdit}
        description={description}
        onDescriptionChange={handleDescriptionChange}
        selectedColor={selectedColor}
        onBoxPress={handleBoxPress}
        selectedBox={selectedBox}
        editMode={true}
      />
      <NoteList
        notes={filteredNotes}
        onEditNote={handleEditNote}
        onDeleteNote={handleDeleteNote}
        onBoxPress={handleBoxPress}
      />
    </View>
  );
};

export default NoteScreen;
