/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Input from './components/atoms/Input/index';
import CustomModal from './components/molecules/CustomModal/index';

import styles from './styles';

const App = () => {
  const [text, setText] = useState('');
  const [textList, setTextList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleOnChangeInput = (value) => {
    setText(value);
  };

  const addItem = () => {
    if (text !== ''){
    setTextList([...textList, { id: textList.length + 1, value: text}]);
    setText('');
    }
  };

  const handleDeleteItem = (id) => {
    const newList = textList.filter(itemList => itemList.id !== id);
    setTextList(newList);
    setSelectedItem({});
    setModalVisible(!modalVisible);
  };

  const onHandleModal = (id) => {
    setSelectedItem(textList.find(itemList => itemList.id === id));
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          Lista de compras
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Ej: Detergente"
          value={text}
          handleOnChangeText={handleOnChangeInput}
        />
        <Button
          title="Agregar"
          color="#ff8a20"
          onPress={() => addItem()}
        />
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Lista</Text>
        <FlatList
          data={textList}
          renderItem={({ item }) => (
            <TouchableOpacity onPress = {() => onHandleModal(item.id)}>
              <Text style={styles.textList}>{item.value}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <CustomModal
        modalVisible={modalVisible}
        title="¿Desea eliminar el siguiente item?"
        description={selectedItem.value}
        buttonText="Si"
        selectedItem={selectedItem}
        handleDeleteItem={handleDeleteItem}
      />
    </View>
  );
};

export default App;
