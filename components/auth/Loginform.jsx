import Link from 'next/link';
import InputField from '../UI/InputField';
import SocialButton from '../UI/SocialButton';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import Form from '../UI/Form';
import Button from '../UI/Button';

const LoginForm = () => {
  return (
    <Form>
      <h1 className="text-3xl font-bold leading-4 "> Welcome Back </h1>
      <p> Sign in to your account </p>

      {/* email */}
      <InputField name="email" type="email" required placeholder="Enter Email address" />
      {/* password */}
      <InputField type="password" name="password" required placeholder="Enter password" />

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

      <Button type="submit" label="Login" />

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

      <p>
        Don't have an account ?{' '}
        <Link href="/signup" className="text-blue-700">
          signup
        </Link>
      </p>
    </Form>
  );
};

export default LoginForm;
