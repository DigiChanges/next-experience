
import * as yup from 'yup';

export const modalSchema = yup
  .object()
  .shape({
    name: yup.string().required('*Item name is a required field'),
    type: yup.number().required('*Item Type is a required field')
  })
  .required();
