const Form = ({ className = '', children, onSubmit }) => {
  return (
    <form
      method="POST"
      onSubmit={onSubmit}
      className={` ${className} m-8 flex flex-col items-center gap-6 `}
    >
      {children}
    </form>
  );
};

export default Form;
