import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentContainer: {
    width: '80%',
    height: '30%',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 32,
    borderRadius: 8,
    elevation: 4,
  },
  modalTitle: {
    fontSize: 16,
    color: '#032036',
    textAlign: 'center',
  },
  modalDescription: {
    fontSize: 16,
    color: '#032036',
    textAlign: 'center',
  },
  modalButtonContainer: {
    width: '50%',
  },
});
