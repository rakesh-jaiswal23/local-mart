const Button = ({ label, type = 'submit', className="" }) => {
  return (
    <button type={type} className={` w-full  py-2 bg-green-500 rounded-lg text-white ${className || "w-full"}`}>
      {label}
    </button>
  );
};
export default Button;
