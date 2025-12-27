import GuestGuard from '@/app/GuestGuard';
import LoginForm from '@/components/auth/Loginform';

const Loginpage = () => {
  return (
    <div className=" flex justify-center mt-12">
      <div className="  max-w-[400px] border border-b-black rounded-2xl  ">
        <GuestGuard>
          <LoginForm />
        </GuestGuard>
      </div>
    </div>
  );
};
export default Loginpage;
