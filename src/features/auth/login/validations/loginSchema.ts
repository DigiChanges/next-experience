
import * as yup from 'yup';

export const loginSchema = yup
  .object()
  .shape({
    username: yup.string().email('*Email is invalid').required('*Username is a required field'),
    password: yup.string().min(8, '\'*Min length is 8\'').required('*Password is a required field')
  })
  .required();
