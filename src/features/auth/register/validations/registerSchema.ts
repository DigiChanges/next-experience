import * as yup from 'yup';

export const registerSchema = yup
  .object()
  .shape({
    name: yup.string().required('*Name is a required field').min(3).max(20),
    lastname: yup.string().required('*Lastname is a required field').min(3).max(20),
    phone: yup.number().transform((value) => (isNaN(value) ? undefined : value)).nullable(),
    username: yup.string().email('Enter a valid email address').required('*Email is a required field'),
    password: yup
      .string()
      .required('*Password is a required field')
      .min(8, 'La contraseña debe tener al menos 8 caracteres'),
    confirmPassword: yup
      .string()
      .required('*Confirm Password is a required field')
      .oneOf([yup.ref('password')], 'Las contraseñas deben coincidir'),
  })
  .required();
