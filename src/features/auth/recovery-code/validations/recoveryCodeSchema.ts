import * as yup from 'yup';

export const recoveryCodeSchema = yup
  .object()
  .shape({
    code: yup.string().required('*Code is a required field').min(5, 'El código debe tener 5 caracteres'),
  })
  .required();
