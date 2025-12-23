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

const SignUpForm = () => {
  const options = [
    { label: 'User', value: 'user' },
    { label: 'Shopkeeper', value: 'shopkeeper' },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = data => {
    console.log('Form submitted:', data);
    // axios.post("/api/signup", data)
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-3xl font-bold leading-4">Register</h1>
      <p>Hello there! Signup to continue.</p>

      <SelectField
        label="Select Role"
        options={options}
        {...register('role')}
        error={errors.role?.message}
      />

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
