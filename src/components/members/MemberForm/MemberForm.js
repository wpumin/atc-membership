import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Schema from './Schema'
import { StyledMemberForm } from './MemberForm.styled'
import axios from 'axios'
import { useHistory, useRouteMatch, Prompt } from 'react-router-dom'
import Highlight from '../../UI/Highlight'
import { JSON_SERVER } from '../../../const/Constant'
import { PATH } from '../../../const/Constant'
import Swal from 'sweetalert2'

const fieldList = [
    {
        name: 'name',
    },
    {
        name: 'department',
    },
    {
        name: 'role',
    },
    {
        name: 'email',
    },
    {
        name: 'tel',
    },
    {
        name: 'location',
    },
    {
        name: 'comment',
    },
]

const AddMember = () => {
    let history = useHistory()
    let match = useRouteMatch()
    const { id } = match.params

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: yupResolver(Schema),
    })

    const onSubmit = async (data) => {
        if (id) {
            await axios.put(`${JSON_SERVER}/members/${id}`, data)
            Swal.fire({
                position: 'center',
                icon: 'success',
                text: 'Your membership has been saved',
                showConfirmButton: false,
                timer: 2000,
            })
            setTimeout(() => {
                history.push(PATH)
            }, 2150)
        } else {
            await setMember(data)
            await axios
                .post(JSON_SERVER + '/members', data)
                .then(() => {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Added!',
                        text: 'Your membership has been saved',
                        showConfirmButton: false,
                        timer: 2000,
                    })
                    console.log('member added!')
                })
                .catch((err) => {
                    console.log(err)
                })
                .finally(() => {
                    setTimeout(() => {
                        history.push(PATH)
                    }, 2150)
                })
        }
    }

    const initialValue = {
        id: '',
        name: '',
        department: '',
        role: '',
        email: '',
        tel: '',
        location: '',
        comment: '',
        watchlist: false,
    }

    // initial data of obj
    const [member, setMember] = useState(initialValue)

    const [isEntering, setIsEntering] = useState(false)

    const loadMembers = async () => {
        await axios
            .get(JSON_SERVER)
            .then((res) => {
                setMember({ ...member, id: res.data[res.data.length] + 1 })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        loadMembers()
        if (id) {
            const loadMemberInfo = async (id) => {
                await axios
                    .get(`${JSON_SERVER}/members/${id}`)
                    .then((res) => {
                        if (res.data) {
                            setMember(res.data)
                            setValue('name', res.data.name)
                            setValue('department', res.data.department)
                            setValue('role', res.data.role)
                            setValue('email', res.data.email)
                            setValue('tel', res.data.tel)
                            setValue('location', res.data.location)
                            setValue('comment', res.data.comment)
                            setValue('watchlist', res.data.watchlist)
                        }
                    })
                    .catch((err) => {
                        Swal.fire({
                            position: 'center',
                            icon: 'warning',
                            title: 'Not found!',
                            text: 'Your membership has been not found',
                            showConfirmButton: false,
                            timer: 2000,
                        })
                        history.push('/not-found')
                    })
            }
            loadMemberInfo(id)
        }
        if (match.path === '/member/add') {
            const loadMemberInitialValue = async () => {
                await setValue('name', initialValue.name)
                await setValue('department', initialValue.department)
                await setValue('role', initialValue.role)
                await setValue('email', initialValue.email)
                await setValue('tel', initialValue.tel)
                await setValue('location', initialValue.location)
                await setValue('comment', initialValue.comment)
                await setValue('watchlist', false)
            }
            loadMemberInitialValue()
        }
    }, [match.path])

    const finishEnteringHandler = () => {
        setIsEntering(false)
    }

    const fromFocusHandler = () => {
        setIsEntering(true)
    }

    const backHandler = (e) => {
        e.preventDefault()
        history.goBack()
    }

    const NAME_ERROR = errors.name?.message
    const DEPARTMENT_ERROR = errors.department?.message
    const ROLE_ERROR = errors.role?.message
    const EMAIL_ERROR = errors.email?.message
    const TEL_ERROR = errors.tel?.message
    const LOCATION_ERROR = errors.location?.message

    const nameClasses = NAME_ERROR ? 'invalid' : ''
    const departmentClasses = DEPARTMENT_ERROR ? 'invalid' : ''
    const roleClasses = ROLE_ERROR ? 'invalid' : ''
    const emailClasses = EMAIL_ERROR ? 'invalid' : ''
    const telClasses = TEL_ERROR ? 'invalid' : ''
    const locationClasses = LOCATION_ERROR ? 'invalid' : ''

    return (
        <StyledMemberForm role="form">
            <Prompt
                when={isEntering}
                message={(location) =>
                    'Are you sure, you want to leave?\nAll your entered data will be lost'
                }
            />
            {!id ? (
                <Highlight color="primary" text="Add Member" />
            ) : (
                <Highlight color="secondary" text="Edit Member" />
            )}
            <form onFocus={fromFocusHandler} onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    {fieldList
                        .slice(0, fieldList.length - 1)
                        .map((field, index) => (
                            <div
                                className="from-group col-12 col-md-6 mb-0 mb-md-2"
                                key={index}
                            >
                                <label
                                    htmlFor={field.name}
                                    aria-label={field.name}
                                >
                                    {field.name}{' '}
                                    <span className="text-danger">*</span>
                                </label>
                                <input
                                    tabIndex={index + 1}
                                    type="text"
                                    className={`
                                ${field.name === 'name' && nameClasses}
                                ${
                                    field.name === 'department' &&
                                    departmentClasses
                                }
                                ${field.name === 'role' && roleClasses}
                                ${field.name === 'email' && emailClasses}
                                ${field.name === 'tel' && telClasses}
                                ${field.name === 'location' && locationClasses}
                                 form-control`}
                                    id={field.name}
                                    aria-required="true"
                                    placeholder={`enter your ${field.name}`}
                                    {...register(field.name)}
                                />
                                <small
                                    id="nameValidator"
                                    className="form-text text-danger"
                                >
                                    {field.name === 'name' && NAME_ERROR}
                                    {field.name === 'department' &&
                                        DEPARTMENT_ERROR}
                                    {field.name === 'role' && ROLE_ERROR}
                                    {field.name === 'email' && EMAIL_ERROR}
                                    {field.name === 'tel' && TEL_ERROR}
                                    {field.name === 'location' &&
                                        LOCATION_ERROR}
                                </small>
                            </div>
                        ))}
                    <div className="form-group col">
                        <label htmlFor="comment">
                            Comment <span className="text-danger">*</span>
                        </label>
                        <textarea
                            tabIndex={fieldList.length + 1}
                            className={`${
                                errors.comment?.message
                                    ? 'form-control invalid'
                                    : 'form-control'
                            }`}
                            id="comment"
                            aria-required="true"
                            placeholder="enter your comment"
                            rows="4"
                            {...register('comment')}
                        />

                        <small
                            id="telValidator"
                            className="form-text text-danger"
                        >
                            {errors.comment?.message}
                        </small>
                    </div>
                </div>
                {id ? (
                    <div className="action-button">
                        <button
                            tabIndex={fieldList.length + 1}
                            aria-label="back button"
                            className="btn btn-primary mt-2"
                            onClick={(e) => backHandler(e)}
                        >
                            Back
                        </button>
                        <button
                            tabIndex={fieldList.length + 2}
                            aria-label="edit button"
                            className="btn btn-secondary mt-2"
                            onClick={finishEnteringHandler}
                        >
                            Edit
                        </button>
                    </div>
                ) : (
                    <button
                        tabIndex={fieldList.length + 1}
                        aria-label="add button"
                        onClick={finishEnteringHandler}
                        className="btn btn-primary btn-block mt-2"
                    >
                        Add
                    </button>
                )}
            </form>
        </StyledMemberForm>
    )
}

export default AddMember
