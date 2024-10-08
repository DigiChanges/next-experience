
import * as yup from 'yup';

export const registerSchema = yup
    .object()
    .shape({
      username: yup.string().email('Enter a valid email address').required('*Username is a required field'),
      password: yup
            .string()
            .required('*Password is a required field')
            .min(8, 'La contraseña debe tener al menos 8 caracteres'),
      confirmPassword: yup
            .string()
            .required('*Confirm Password is a required field')
            .oneOf([yup.ref('password')], 'Las contraseñas deben coincidir'),
      profileImage: yup.mixed().required('Image is required')
    })
    .required();
