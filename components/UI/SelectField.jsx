const SelectField = ({
  id,
  label,
  options,
  value,
  placeholder = "Select...",
  disabled = false,
  onChange,
  className = ""
}) => {
  return (
    <div className={`w-full flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={id} className="font-light text-xl">
          {label}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={e => onChange(e.target.value)}
        disabled={disabled}
        className="w-full border p-2 rounded-md outline-none"
      >
        {placeholder && (
          <option value="" disabled hidden className="text-gray-500">
         {placeholder}
          </option>
        )}
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
