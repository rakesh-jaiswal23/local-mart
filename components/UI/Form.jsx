const { Children } = require('react');

const Form = ({ className = '', children }) => {
  return <form className={`m-8 flex flex-col items-center gap-6 ${className}`}>{children}</form>;
};
export default Form;
