import * as yup from 'yup';
export const profileUpdateSchema = yup
  .object()
  .shape({
    first_name: yup.string().min(3).max(20),
    last_name: yup.string().min(3).max(20),
    phone: yup.number().min(6),
  })
  .required();
