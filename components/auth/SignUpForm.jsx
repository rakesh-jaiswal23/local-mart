'use client';
import { FcGoogle } from 'react-icons/fc';
import Button from '../UI/Button';
import Form from '../UI/Form';
import InputField from '../UI/InputField';
import SocialButton from '../UI/SocialButton';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import SelectField from '../UI/SelectField';
import { useState } from 'react';

const SignUpForm = () => {
  const options = [
    { label: 'User', value: 'user' },
    { label: 'Shopkeeper', value: 'shopkeeper' },
  ];
  const [country, setCountry] = useState('');
  return (
    <Form>
      <h1 className="text-3xl font-bold leading-4">Register</h1>
      <p> Hello there! Signup to continue. </p>

      <SelectField
        id="role"
        label="Select role"
        name="role"
        options={options}
        value={country}
        onChange={setCountry}
        placeholder="Choose your country"
        className="flex-1"
      />

      <div className="flex flex-col gap-4 md:flex-row">
        <InputField
          className="flex-1 "
          name="name"
          required
          type="text"
          placeholder="Enter your name"
        />
        <InputField
          className="flex-1"
          name="email"
          required
          type="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <InputField
          className="flex1"
          name="password"
          required
          type="password"
          placeholder="Enter your password"
        />
        <InputField
          className="flex-1"
          name="confirmPassword"
          required
          type="confirmPassword"
          placeholder="Re-enter your password"
        />
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <InputField
          name="phoneNumber"
          type="tel"
          placeholder="Enter phone number"
          required
          maxLength={16}
        />
        <InputField name="referralcode" placeholder="Enter referral code" maxLength={10} />
      </div>

      <div className="text-center text-gray-500 text-sm">
        <p>By continuing you confirm that you agreen with </p>
        <span> our </span>
        <Link href="termand condition">
          <span className="text-blue-700">Term and Condition</span>
        </Link>
      </div>

      <Button type="submit" label="Continue" />

      <div className="flex items-center gap-3 w-full">
        <span className="flex-1 border-t"></span>
        <span className="text-sm whitespace-nowrap">or continue with</span>
        <span className="flex-1 border-t"></span>
      </div>

      <div className="flex justify-between gap-4 w-full">
        <SocialButton provider="Google" icon={<FcGoogle />} />
        <SocialButton provider="Github" icon={<FaGithub />} />
      </div>

      <div className="text-gray-500">
        Already have an account ?{' '}
        <Link href="/login">
          <span className="text-blue-700">Login</span>
        </Link>
      </div>
    </Form>
  );
};
export default SignUpForm;
