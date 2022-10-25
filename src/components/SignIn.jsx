import { Formik } from 'formik';
import * as yup from 'yup';
import { Pressable, StyleSheet, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const initialValues = {
  username: '',
  password: '',
};

const LoginForm = ({ onSubmit }) => {
  const styles = StyleSheet.create({
    container: {
      padding: '1em',
    },
    button: {
      backgroundColor: 'dodgerblue',
      borderRadius: '3px',
      textAlign: 'center',
      padding: '0.5em',
      color: 'white',
      height: '3em',
      display: 'flex',
      justifyContent: 'center',
    },
    inputField: {
      height: '3em',
      padding: '0.5em',
      border: '1px solid grey',
      borderRadius: '3px',
      marginBottom: '1em',
    },
  });

  return (
    <View style={styles.container}>
      <FormikTextInput
        style={styles.inputField}
        placeholder="Username"
        name="username"
      />
      <FormikTextInput
        style={styles.inputField}
        placeholder="Password"
        name="password"
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    const fields = { ...values };
    console.log(fields);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
