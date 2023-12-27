import * as yup from 'yup';

export const forgoPasswordSchema = yup
    .object()
    .shape({
      username: yup.string().email('*Email is invalid').required('*Username is a required field')
    })
    .required();
