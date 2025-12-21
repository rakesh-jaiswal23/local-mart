 const InputField =  ({
  name,
  type = 'text',
  className = '',
  required = false,
  placeholder,
  label,
  id,
   maxLength= ""
})=> {
  return (
    <div className="w-full flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="text-sm font-medium">
          {label}
        </label>
      )}
      <input
        name={name}
        placeholder={placeholder}
        id={id}
        required={required}
        type={type}
        className={`w-full border p-2 rounded-md outline-none ${className}`}
        maxLength={maxLength}
      />
    </div>
  );
};
export default InputField;