'use client';
import { FcGoogle } from 'react-icons/fc';
import Button from '@/components/UI/Button';

import InputField from '@/components/UI/InputField';
import SocialButton from '@/components/UI/SocialButton';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import SelectField from '@/components/UI/SelectField';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '@/schemas/signupSchema';
import Form from '../UI/Form';
import { signUp } from '@/lib/service/authService';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthState, selectIsAuthenticated } from '@/lib/features/auth/authSelector';
import { setAccessToken } from '@/lib/features/auth/authSlice';
import { useEffect } from 'react';

const SignUpForm = () => {
  // const options = [
  //   { label: 'user', value: 'user' },
  //   { label: 'seller', value: 'seller' },
  // ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuthenticated);
  const { role } = useSelector(selectAuthState);
  async function onSubmit(data) {
    try {
      const res = await signUp(data);
      dispatch(setAccessToken(res?.data?.accessToken));
      reset();
      toast.success(res?.data?.message);
      // if (role === 'admin') router.replace('/admin');
      // else if (role === 'seller') router.replace('/store');
      // else router.replace('/');
    } catch (error) {
      console.log(error);

      toast.error(error?.data?.message || 'Something went wrong');
    }
  }
  useEffect(() => {
    if (!isAuth) return;

    if (role === 'user') {
      router.replace('/');
    } else if (role === 'seller') {
      router.replace('/store');
    } else if (role === 'admin') {
      router.replace('/admin');
    }
  }, [isAuth, role]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-3xl font-bold leading-4">Register</h1>
      <p>Hello there! Signup to continue.</p>

      {/* <SelectField
        label="Select Role"
        options={options}
        {...register('role')}
        error={errors.role?.message}
      /> */}

      <div className="flex flex-col gap-4 md:flex-row">
        <InputField
          placeholder="Enter your name"
          {...register('name')}
          error={errors.name?.message}
        />
        <InputField
          placeholder="Enter your email"
          type="email"
          {...register('email')}
          error={errors.email?.message}
        />
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <InputField
          placeholder="Enter your password"
          type="password"
          {...register('password')}
          error={errors.password?.message}
        />
        <InputField
          placeholder="Confirm your password"
          type="password"
          {...register('confirmPassword')}
          error={errors.confirmPassword?.message}
        />
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <InputField
          placeholder="Enter phone number"
          type="tel"
          {...register('phoneNumber')}
          error={errors.phoneNumber?.message}
        />
        <InputField
          placeholder="Referral code"
          {...register('referralcode')}
          error={errors.referralcode?.message}
        />
      </div>

      <Button type="submit" label={isSubmitting ? '...Submitting' : 'Continue'} />

      <div className="flex justify-between gap-4 w-full mt-4">
        <SocialButton provider="Google" icon={<FcGoogle />} />
        <SocialButton provider="Github" icon={<FaGithub />} />
      </div>

      <div className="text-gray-500 mt-4">
        Already have an account?{' '}
        <Link href="/login">
          <span className="text-blue-700">Login</span>
        </Link>
      </div>
    </Form>
  );
};

export default SignUpForm;
