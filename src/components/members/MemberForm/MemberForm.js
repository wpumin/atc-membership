import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useHistory, useRouteMatch, Prompt } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { StyledMemberForm } from './MemberForm.styled'
import { PATH } from '../../../const/Constant'
import Schema from './Schema'
import Highlight from '../../UI/Highlight'
import Swal from 'sweetalert2'
import { FIELDS_IN_FORM } from '../../../const/Constant'

const MemberForm = () => {
    const { REACT_APP_JSON_SERVER } = process.env
    const match = useRouteMatch()
    const { id } = match.params
    let history = useHistory()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: yupResolver(Schema),
    })

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

    const onSubmit = async (data) => {
        if (id) {
            await axios.put(`${REACT_APP_JSON_SERVER}/members/${id}`, data)
            Swal.fire({
                position: 'center',
                icon: 'success',
                text: 'Your member has been saved',
                showConfirmButton: false,
                timer: 2000,
            })
            console.log('member edited!')
            setTimeout(() => {
                history.push(PATH)
            }, 2150)
        } else {
            await setMember(data)
            await axios
                .post(REACT_APP_JSON_SERVER + '/members', data)
                .then(() => {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Added!',
                        text: 'Your member has been saved',
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

    const loadMembers = async () => {
        await axios
            .get(REACT_APP_JSON_SERVER)
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
                    .get(`${REACT_APP_JSON_SERVER}/members/${id}`)
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
                        console.log(err)
                        Swal.fire({
                            position: 'center',
                            icon: 'warning',
                            title: 'Not found!',
                            text: 'Your member has been not found',
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

    const invalidClass = 'invalid'
    const nameClasses = NAME_ERROR ? invalidClass : ''
    const departmentClasses = DEPARTMENT_ERROR ? invalidClass : ''
    const roleClasses = ROLE_ERROR ? invalidClass : ''
    const emailClasses = EMAIL_ERROR ? invalidClass : ''
    const telClasses = TEL_ERROR ? invalidClass : ''
    const locationClasses = LOCATION_ERROR ? invalidClass : ''

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
                    {FIELDS_IN_FORM.slice(0, FIELDS_IN_FORM.length - 1).map(
                        (field, index) => (
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
                                    placeholder={`Enter your ${
                                        field.name === 'tel'
                                            ? field.name + ' (+66) XX XXX XXXX'
                                            : field.name
                                    }`}
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
                        )
                    )}
                    <div className="form-group col">
                        <label htmlFor="comment">
                            Comment <span className="text-danger">*</span>
                        </label>
                        <textarea
                            tabIndex={FIELDS_IN_FORM.length + 1}
                            className={`${
                                errors.comment?.message
                                    ? 'form-control invalid'
                                    : 'form-control'
                            }`}
                            id="comment"
                            aria-required="true"
                            placeholder="Enter your comment"
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
                            tabIndex={FIELDS_IN_FORM.length + 2}
                            aria-label="back button"
                            className="btn btn-primary mt-2"
                            onClick={(e) => backHandler(e)}
                        >
                            Back
                        </button>
                        <button
                            tabIndex={FIELDS_IN_FORM.length + 3}
                            aria-label="edit button"
                            className="btn btn-secondary mt-2"
                            onClick={finishEnteringHandler}
                        >
                            Edit
                        </button>
                    </div>
                ) : (
                    <button
                        tabIndex={FIELDS_IN_FORM.length + 2}
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

export default MemberForm
