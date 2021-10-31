import * as yup from 'yup'
import 'yup-phone'

const Schema = yup
    .object({
        name: yup
            .string()
            .trim()
            .required('name ie required')
            .matches(/^[a-zA-Z\s-. ]*$/g, 'name must be only letters'),
        department: yup
            .string()
            .trim()
            .required('department is required')
            .matches(
                /^[a-zA-Z0-9\s-.& ]*$/g,
                'department must be only letters or number'
            ),
        role: yup
            .string()
            .trim()
            .required('role is required')
            .matches(/^[a-zA-Z0-9\s-.& ]*$/g, 'role must be only letters'),
        email: yup
            .string()
            .trim()
            .email('email is invalid (hint: yourmail@seconLevel.topLevel)')
            .required('email is required'),
        tel: yup
            .string()
            .trim()
            .required('tel ie required')
            .phone('TH', true, '${path} in TH format eg. +66-XX-XXX-XXXX'),
        location: yup.string().trim().required('location is required'),
        comment: yup.string().trim().required('comment is required'),
    })
    .required()

export default Schema
