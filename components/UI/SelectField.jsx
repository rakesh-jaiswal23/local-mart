import { forwardRef } from "react";

const SelectField = forwardRef(({ error, options, ...props }, ref) => {
  return (
    <div className="w-full flex flex-col gap-1">
      {props.label && <label className="text-sm font-medium">{props.label}</label>}
      <select {...props} ref={ref} className="w-full border p-2 rounded-md outline-none">
        <option value="">Select an option</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
});

export default SelectField;
