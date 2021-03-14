import * as Yup from 'yup';
import Messages from './messages'

export const LoginValidation = Yup.object().shape({
    email: Yup.string().email().required('Required'),
    password: Yup.string().required('Required')
});

export const FirsAccessValidation = Yup.object().shape({
    doc: Yup.string().required('Required'),
    username: Yup.string().required('Required')
});