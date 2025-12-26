'use client';
import Link from 'next/link';
import InputField from '../UI/InputField';
import SocialButton from '../UI/SocialButton';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import Form from '../UI/Form';
import Button from '../UI/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/schemas/loginSchema';
import { login } from '@/lib/service/authService';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '@/lib/features/auth/authThunk';
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';
import { selectIsAuthenticated } from '@/lib/features/auth/authSelector';
import { useEffect } from 'react';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuth = useSelector(selectIsAuthenticated);
  async function onSubmit(formdata) {
    try {
      const res = await dispatch(loginUser(formdata)).unwrap();
      console.log(res);
      reset();

      toast.success(`Welcome ${res?.data?.user?.name}`);
    } catch (err) {
      toast.error(err.message);
    }
  }

  useEffect(() => {
    if (isAuth) {
      router.replace('/');
    }
  }, [isAuth]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-3xl font-bold leading-4 "> Welcome Back </h1>
      <p> Sign in to your account </p>

      {/* email */}
      <InputField
        name="email"
        type="email"
        required
        placeholder="Enter Email address"
        {...register('email')}
        error={errors.email?.message}
      />
      {/* password */}
      <InputField
        type="password"
        name="password"
        required
        placeholder="Enter password"
        {...register('password')}
        error={errors.password?.message}
      />

      {/* checkboc and  forget pass */}

      <div className="flex justify-around gap-8">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="checkbox"
            className="w-4 h-4 accent-black cursor-pointer"
            {...register('checkbox')}
          />
          <label className="">Remember me </label>
        </div>
        <Link href="/forgetpassword" className="text-blue-700">
          Forget password?
        </Link>
      </div>

      {/* sign in button */}

      <Button type="submit" label={isSubmitting ? '...Submitting' : 'Login'} />

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
