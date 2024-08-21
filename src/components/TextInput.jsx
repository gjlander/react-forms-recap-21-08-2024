const TextInput = ({
    label,
    id,
    name,
    type,
    placeHolder,
    required,
    value,
    onChange,
}) => {
    return (
        <label className='form-control w-full'>
            <div className='label'>
                <span className='label-text'>{label}</span>
            </div>
            <input
                id={id}
                name={name}
                type={type}
                placeholder={placeHolder}
                // required={required}
                value={value}
                onChange={onChange}
                className={`input input-bordered w-full ${
                    !value && 'input-error'
                }`}
            />
            <div className='label'>
                <span className='label-text-alt text-error'>
                    {required && '*required'}
                </span>
            </div>
        </label>
    );
};

export default TextInput;
