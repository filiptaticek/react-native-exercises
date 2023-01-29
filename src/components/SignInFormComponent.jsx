import { Text, Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';

const styles = StyleSheet.create({
    button: {
        backgroundColor:"#0066CC",
        borderWidth:2,
        borderColor:"#B3B3B3",
        margin:5,
        padding:5,
        textAlign:"center",
    },
    textCenter:{
        textAlign:"center",
        color:"#FFFFFF"
    }
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
    return (
      <View>
        <FormikTextInput name="username" placeholder="Your username please" />
        <FormikTextInput name="password" placeholder="Your password please" />
        <Pressable style={styles.button} onPress={onSubmit}>
          <Text style={styles.textCenter}>Signin</Text>
        </Pressable>
      </View>
    );
  };

const SignInFormComponent = () => {
    const onSubmit = (values) => {
        console.log(values);
      };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignInFormComponent