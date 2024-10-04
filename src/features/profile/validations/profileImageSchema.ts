import * as yup from 'yup';

export const profileImageSchema = yup
    .object()
    .shape({
      file: yup.mixed().transform((v) => ((!v || v.length === 0) ? undefined : v)).optional().nullable()
    }).required();
