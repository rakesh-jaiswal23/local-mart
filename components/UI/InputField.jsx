import { forwardRef } from "react";

const InputField = forwardRef(
  ({ error, as = "input", className = "", label, ...props }, ref) => {
    const Component = as;

    return (
      <div className="w-full flex flex-col gap-1">
        {label && (
          <label
            htmlFor={props.id || props.name}
            className="text-sm font-medium"
          >
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </label>
        )}

        <Component
          ref={ref}
          {...props}
          className={`w-full border p-2 rounded-md outline-none ${className}`}
        />

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}
      </div>
    );
  }
);

export default InputField;
