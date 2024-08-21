import { useState } from 'react';
import TextInput from './TextInput';
import RadioInput from './RadioInput';

const SignUpForm = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        profilePic: '',
        accountType: '',
    });
    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            if (
                !form.firstName ||
                !form.lastName ||
                !form.email ||
                !form.password ||
                !form.profilePic ||
                !form.accountType
            ) {
                throw new Error('Please fill out all fields!');
            }
            localStorage.setItem('user', JSON.stringify(form));
            setForm({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                profilePic: '',
                accountType: '',
            });
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };
    const textInputs = [
        {
            label: 'First Name',
            id: 'firstName',
            name: 'firstName',
            type: 'text',
            placeHolder: 'John',
            required: true,
        },
        {
            label: 'Last Name',
            id: 'lastName',
            name: 'lastName',
            type: 'text',
            placeHolder: 'Doe',
            required: true,
        },
        {
            label: 'Email',
            id: 'email',
            name: 'email',
            type: 'email',
            placeHolder: 'johndoe@example.com',
            required: true,
        },
        {
            label: 'Password',
            id: 'password',
            name: 'password',
            type: 'password',
            placeHolder: 'Keep it secret, keep it safe',
            required: true,
        },
        {
            label: 'Profile Picture',
            id: 'profilePic',
            name: 'profilePic',
            type: 'url',
            placeHolder: 'A valid url',
            required: true,
        },
    ];
    const radioInputs = [
        {
            label: 'Student',
            id: 'student',
            name: 'accountType',
            required: true,
            value: 'student',
        },
        {
            label: 'Alumni',
            id: 'alumni',
            name: 'accountType',
            required: true,
            value: 'alumni',
        },
    ];
    return (
        <form
            onSubmit={handleSubmit}
            id='sign-up-form'
            className='flex flex-col gap-4 border-2 rounded p-6 w-1/2 my-4'
        >
            <h2 className='text-4xl m-4'>Sign Up</h2>
            {textInputs.map((input) => (
                <TextInput
                    key={input.id}
                    {...input}
                    value={form[input.name]}
                    onChange={handleChange}
                />
            ))}
            <fieldset
                className={`flex flex-col gap-4 border p-3 ${
                    !form.accountType && `border-error`
                }`}
            >
                <legend>Choose Account Type</legend>
                <RadioInput
                    {...radioInputs[0]}
                    onChange={handleChange}
                    checked={form.accountType === 'student'}
                />
                <RadioInput
                    {...radioInputs[1]}
                    onChange={handleChange}
                    checked={form.accountType === 'alumni'}
                />
                <span className='label-text-alt text-error'>*required</span>
            </fieldset>
            {/* <label htmlFor='first-name'>First Name</label>
            <input
                id='first-name'
                name='firstName'
                className='input input-bordered'
                type='text'
                value={form.firstName}
                onChange={handleChange}
                required
            />
            <label htmlFor='last-name'>Last Name</label>
            <input
                id='last-name'
                name='lastName'
                className='input input-bordered'
                type='text'
                value={form.lastName}
                onChange={handleChange}
                required
            />
            <label htmlFor='email'>Email</label>
            <input
                id='email'
                name='email'
                className='input input-bordered'
                type='email'
                value={form.email}
                onChange={handleChange}
                required
            />
            <label htmlFor='password'>Password</label>
            <input
                id='password'
                name='password'
                className='input input-bordered'
                type='password'
                value={form.password}
                onChange={handleChange}
                required
            />
            <label htmlFor='profile-pic'>Profile Picture</label>
            <input
                id='profile-pic'
                name='profilePic'
                className='input input-bordered'
                type='url'
                value={form.profilePic}
                onChange={handleChange}
                required
            />
            <fieldset className='flex flex-col gap-4 border p-3'>
                <legend>Choose Account Type</legend>
                <div>
                    <input
                        type='radio'
                        name='accountType'
                        id='student'
                        value='student'
                        onChange={handleChange}
                        checked={form.accountType === 'student'}
                        required
                    />
                    <label htmlFor='student'>Student</label>
                </div>
                <div>
                    <input
                        type='radio'
                        name='accountType'
                        id='alumni'
                        value='alumni'
                        onChange={handleChange}
                        checked={form.accountType === 'alumni'}
                    />
                    <label htmlFor='alumni'>Alumni</label>
                </div>
            </fieldset> */}
            <button className='btn' type='submit'>
                Sign Up
            </button>
        </form>
    );
};
export default SignUpForm;
