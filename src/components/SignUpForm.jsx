import { useState } from 'react';

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
        localStorage.setItem('user', JSON.stringify(form));
        setForm({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            profilePic: '',
            accountType: '',
        });
    };
    return (
        <form
            onSubmit={handleSubmit}
            id='sign-up-form'
            className='flex flex-col gap-4 border-2 rounded p-6 w-1/2 my-4'
        >
            <h2 className='text-4xl m-4'>Sign Up</h2>
            <label htmlFor='first-name'>First Name</label>
            <input
                id='first-name'
                name='firstName'
                className='input input-bordered'
                type='text'
                required
                value={form.firstName}
                onChange={handleChange}
            />
            <label htmlFor='last-name'>Last Name</label>
            <input
                id='last-name'
                name='lastName'
                className='input input-bordered'
                type='text'
                required
                value={form.lastName}
                onChange={handleChange}
            />
            <label htmlFor='email'>Email</label>
            <input
                id='email'
                name='email'
                className='input input-bordered'
                type='email'
                required
                value={form.email}
                onChange={handleChange}
            />
            <label htmlFor='password'>Password</label>
            <input
                id='password'
                name='password'
                className='input input-bordered'
                type='password'
                required
                value={form.password}
                onChange={handleChange}
            />
            <label htmlFor='profile-pic'>Profile Picture</label>
            <input
                id='profile-pic'
                name='profilePic'
                className='input input-bordered'
                type='url'
                required
                value={form.profilePic}
                onChange={handleChange}
            />
            <fieldset className='flex flex-col gap-4 border p-3'>
                <legend>Choose Account Type</legend>
                <div>
                    <input
                        type='radio'
                        name='accountType'
                        id='student'
                        value='Student'
                        required
                        onChange={handleChange}
                        checked={form.accountType === 'Student'}
                    />
                    <label htmlFor='student'>Student</label>
                </div>
                <div>
                    <input
                        type='radio'
                        name='accountType'
                        id='alumni'
                        value='Alumni'
                        onChange={handleChange}
                        checked={form.accountType === 'Alumni'}
                    />
                    <label htmlFor='alumni'>Alumni</label>
                </div>
            </fieldset>
            <button className='btn' type='submit'>
                Sign Up
            </button>
        </form>
    );
};
export default SignUpForm;
