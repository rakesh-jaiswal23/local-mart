import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

export default function Loginpage() {
  const SocialButton = function ({ provider, icon, onclick, bgColor }) {
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
  return (
    <div className="min-h-screen flex justify-center mt-16">
      <div className=" max-h-[550px] max-w-[400px] border border-b-black rounded-2xl  ">
        <form className="m-8 flex flex-col items-center gap-6">
          <h1 className="text-3xl font-bold leading-4 "> Welcome Back </h1>
          <p> Sign in to your account </p>
          {/* email */}
          <input
            name="email"
            type="email"
            className="w-full border p-2 rounded-md outline-none "
            required
            placeholder="Enter Email address"
          />
          {/* password */}
          <input
            type="password"
            name="password"
            required
            className="w-full border p-2 rounded-md outline-none"
            placeholder="Enter password"
          />
          {/* checkboc and  forget pass */}
          <div className="flex justify-around gap-8">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="rememberMe"
                className="w-4 h-4 accent-black cursor-pointer"
              />
              <label className="">Remember me </label>
            </div>
            <Link href="/forgetpassword" className="text-blue-700">
              Forget password?
            </Link>
          </div>
          {/* sign in button */}
          <button
            // onClick={handleclick}

            className=" w-full  py-2 bg-green-500 rounded-lg text-white"
          >
            SignIn
          </button>
          {/* oauth logic  */}
          <div className="flex items-center gap-3 w-full">
            <span className="flex-1 border-t"></span>
            <span className="text-sm whitespace-nowrap">or continue with</span>
            <span className="flex-1 border-t"></span>
          </div>
          {/* google and github button  */}
          <div className="flex justify-between gap-4 w-full">
            <SocialButton provider="Google" icon={<FcGoogle />} />
            <SocialButton provider="Github" icon={<FaGithub />} />
          </div>
          {/* footer */}
          <p>Don't have an account ? <Link href="/signup" className='text-blue-700'>signup</Link></p>
        </form>
      </div>
    </div>
  );
}
