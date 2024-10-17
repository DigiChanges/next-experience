import * as yup from 'yup';

export const profileImageSchema = yup
  .object()
  .shape({
    file: yup
      .mixed()
      .transform((v) => (!v || v.length === 0 ? undefined : v))
      .optional()
      .nullable(),
  })
  .required();

export const createUserSchema = yup
  .object()
  .shape({
    name: yup.string().min(3).required('*User name is a required field'),
    lastName: yup.string().min(3).required('*Lastname is a required field'),
    phone: yup.number(),
    email: yup.string().email('Enter a valid email address').required('*Email is a required field'),
    password: yup
      .string()
      .required('*Password is a required field')
      .min(8, 'La contraseña debe tener al menos 8 caracteres'),
    role: yup.string().min(3).required('*Role is a required field'),
    active: yup.boolean().required('*Active user is a required field'),
  })
  .required();
