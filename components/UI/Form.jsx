const Form = ({ className = '', children, onSubmit }) => {
  return (
    <form
      method="POST"
      onSubmit={onSubmit}
      className={`m-8 flex flex-col items-center gap-6 ${className}`}
    >
      {children}
    </form>
  );
};

export default Form;
