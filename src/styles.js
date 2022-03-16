import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    flexDirection: 'row',
  },
  listContainer: {
    padding: 16,
    flexDirection: 'column',
  },
  headerContainer: {
    backgroundColor: '#032036',
    height: 48,
    alignContent: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  listTitle: {
    color: '#032036',
    fontSize: 20,
    paddingBottom: 8,
    fontWeight: '600',
  },
  textList: {
    color: '#032036',
    fontSize: 16,
    paddingVertical: 8,
  },
});

export default styles;
