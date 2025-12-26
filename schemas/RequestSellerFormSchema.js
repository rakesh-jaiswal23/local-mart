import { z } from 'zod';
export const RequestSellerFormSchema = z.object({
  username: z.string().min(3, 'userName musb be at least 3  characters'),

  name: z.string().min(2, 'Name must be at least 2 characters'),

  description: z.string().optional(),

  contactNumber: z
    .string()
    .min(10, 'Contact number must be at least 10 digits')
    .max(16, 'Contact number should be less than or equal to 16 digits')
    .refine(
      val => !val || /^[0-9]{10,16}$/.test(val),
      'Contact number must be digits only, between 10 and 16 digits',
    ),

  address: z.string().min(5, 'Address is required'),

  storelogo: z
    .any()
    .refine(files => files instanceof FileList && files.length > 0, 'Store logo is required')
    .refine(files => files?.[0]?.size <= 5 * 1024 * 1024, 'Max image size is 5MB')
    .refine(
      files => ['image/jpeg', 'image/png', 'image/webp'].includes(files?.[0]?.type),
      'Only JPG, PNG, WEBP allowed',
    ),
});
