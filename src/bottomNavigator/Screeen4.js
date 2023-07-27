import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import React from 'react';
import CheckBox from 'react-native-check-box';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Screeen4 = ({navigation}) => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Message, setMessage] = useState('');
  const [Agree, setAgree] = useState('false');
  const submit = () => {
    if (!Name && !Email && !Phone && !Message) {
      Alert.alert('please Fill all the fields');
    } else {
      Alert.alert('Thank you');
      navigation.navigate('Screen1');
    }
  };
  return (
    <ScrollView style={styles.mainCointainer}>
      <Text style={styles.mainHeader}>level up your knowledge</Text>
      <Text style={styles.description}>
        You Can Reach Us Anytime 123@gmail.com{' '}
      </Text>
      <Text style={styles.inputLabels}>Add Your Name</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder={'kinder'}
          value={Name}
          onChangeText={userdata => setName(userdata)}
        />
      </View>
      <Text style={styles.inputLabels}>Add Your Email</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="kin@gmail.com"
          keyboardType="default"
          value={Email}
          onChangeText={Email => setEmail(Email)}
        />
      </View>
      <Text style={styles.inputLabels}>Add Your Phone</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="9592939491"
          keyboardType="number-pad"
          value={Phone}
          onChangeText={Phone => setPhone(Phone)}
        />
      </View>
      <Text style={styles.inputLabels}>Add Your Message</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle2}
          placeholder="tell us "
          value={Message}
          onChangeText={Message => setMessage(Message)}
          numberOfLines={7}
          multiline={true}
        />
      </View>
      <View style={styles.wrapper}>
        <CheckBox
          isChecked={Agree === 'true' ? true : false}
          onClick={() => setAgree(Agree === 'true' ? 'false' : 'true')}
        />
        <Text style={styles.wrapperText}>
          i have read and agree with the terms and conditions{' '}
        </Text>
      </View>
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: Agree === 'true' ? 'green' : 'grey',
          },
        ]}
        disabled={!Agree}
        onPress={submit}>
        <Text>Add</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  mainCointainer: {
    height: '100%',
    flex: 1,
    backgroundColor: 'white',
  },
  mainHeader: {
    fontSize: 18,
    paddingTop: 20,
    marginTop: 10,
    color: '#344055',
    paddingBottom: 10,
    paddingStart: 8,
    fontWeight: '500',
    textTransform: 'capitalize',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    paddingStart: 8,
    fontWeight: '600',
    paddingBottom: 18,
    marginBottom: 10,
  },
  inputContainer: {
    borderWidth: 1,
    width: '94%',
    margin: 9,
    borderRadius: 5,
  },
  inputLabels: {
    marginStart: 9,
    textTransform: 'capitalize',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 25,
  },
  inputStyle: {
    height: 40,
    borderColor: 'rgb(0,0,0.3)',
    borderRadius: 1,
  },
  inputStyle2: {
    height: 70,
  },
  wrapper: {
    padding: 10,
    flexDirection: 'row',
  },
  wrapperText: {
    textTransform: 'capitalize',
    fontSize: 13,
    fontWeight: '400',
  },
  buttonStyle: {
    height: 37,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginStart: 27,
    marginTop: 20,
  },
});
export default Screeen4;
