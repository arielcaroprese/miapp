/* eslint-disable prettier/prettier */
import React from 'react';

import { View, Text, Modal, Button } from 'react-native';

import { styles } from './styles';

const CustomModal = ({ title, description, selectedItem, buttonText, handleDeleteItem, modalVisible }) => {
  return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContentContainer}>
            <View>
              <Text style={styles.modalTitle}>{title}</Text>
            </View>
            <View>
              <Text style={styles.modalDescription}>{description}</Text>
            </View>
            <View style={styles.modalButtonContainer}>
              <Button
                title={buttonText}
                color="#ff8a20"
                onPress={() => handleDeleteItem(selectedItem.id)}
              />
            </View>
          </View>
        </View>
      </Modal>
  );
};

export default CustomModal;
