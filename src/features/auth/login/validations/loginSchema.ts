import * as yup from 'yup';

export const loginSchema = yup
  .object()
  .shape({
    username: yup.string().email('*Email is invalid').required('*Username is a required field'),
    password: yup.string().required('*Password is a required field'),
  })
  .required();
