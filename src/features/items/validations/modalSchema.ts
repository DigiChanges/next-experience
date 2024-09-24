
import * as yup from 'yup';

export const modalSchema = yup
  .object()
  .shape({
    name: yup.string().required('*Item name is a required field'),
    description: yup.number().max(99, '*Max length is 2 numbers').required('*Item Description is a required field').typeError('')
  })
  .required();
