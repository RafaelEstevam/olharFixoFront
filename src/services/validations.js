import * as Yup from 'yup';
import {Messages} from './messages'

export const LoginValidation = Yup.object().shape({
    email: Yup.string().email(Messages.error.email_format).required(Messages.error.required),
    password: Yup.string().required(Messages.error.required)
});

export const FirsAccessValidation = Yup.object().shape({
    doc: Yup.string().required(Messages.error.required),
    username: Yup.string().required(Messages.error.required)
});