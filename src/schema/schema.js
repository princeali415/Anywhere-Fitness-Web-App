import * as yup from 'yup';

export default yup.object().shape({
    name: yup
    .string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters long'),

    email: yup
    .string()
    .email('Email address must be valid')
    .required('Email is required'),

    password: yup
    .string()
    .required('Password is required'),
    
    tos: yup.boolean()
    .oneOf([true], "You must accept the Terms and Conditions to continue"),
});