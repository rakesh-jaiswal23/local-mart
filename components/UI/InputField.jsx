import { forwardRef } from 'react';

const InputField = forwardRef(({ error, ...props }, ref) => {
  return (
    <div className="w-full flex flex-col gap-1">
      {props.label && (
        <label htmlFor={props.id || props.name} className="text-sm font-medium">
          {props.label}
        </label>
      )}
      <input
        {...props}
        ref={ref}
        className={`w-full border p-2 rounded-md outline-none ${props.className || ''}`}
        autoComplete={props.name}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
});

export default InputField;
