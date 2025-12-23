const Button = ({ label, type="submit" }) => {
  return (
    <button type={type} className=" w-full  py-2 bg-green-500 rounded-lg text-white">
      {label}
    </button>
  );
};
export default Button;
