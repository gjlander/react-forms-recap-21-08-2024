const RadioInput = ({ label, name, value, onChange, checked }) => {
    return (
        <div className='form-control'>
            <label className='label justify-start gap-4 cursor-pointer'>
                <input
                    type='radio'
                    name={name}
                    value={value}
                    onChange={onChange}
                    checked={checked}
                    className='radio checked:bg-primary'
                />
                <span className='label-text'>{label}</span>
            </label>
        </div>
    );
};

export default RadioInput;
