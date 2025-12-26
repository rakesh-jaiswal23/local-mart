import SignUpForm from '@/components/auth/SignUpForm';
const SignUpPage = () => {
  return (
    <div className=" flex justify-center mt-12">
      <div className="  max-w-[600px] border border-b-black rounded-2xl  ">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
