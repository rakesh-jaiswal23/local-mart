import { z } from 'zod';

export const signupSchema = z
  .object({
    // role: z.string().min(1, 'Role is required'),
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().min(8, 'Confirm your password'),
    phoneNumber: z.string().min(10, 'Phone number required'),
    referralcode: z.string().max(10).optional(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });
