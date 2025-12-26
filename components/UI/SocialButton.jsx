const SocialButton = ({ provider, icon, onclick, bgColor }) => {
  return (
    <button
      type="button"
      className={`flex items-center justify-center gap-2 flex-1 py-2 rounded-md  font-medium border`}
    >
      {icon}
      {provider}
    </button>
  );
};
export default SocialButton;
