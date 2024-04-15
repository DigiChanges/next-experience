import * as yup from 'yup';


export const settingUpdatePasswordSchema  = yup
    .object()
    .shape({
      password: yup
            .string()
            .required('*Password is a required field')
            .min(8, 'La contraseña debe tener al menos 8 caracteres'),
      newPassword: yup
            .string()
            .required('*New Password is a required field')
            .min(8, 'La contraseña debe tener al menos 8 caracteres'),
      confirmPassword: yup
            .string()
            .required('*Confirm New Password is a required field')
            .oneOf([yup.ref('password')], 'Las contraseñas deben coincidir')
    })
    .required();
