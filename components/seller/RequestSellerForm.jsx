import { assets } from '@/assets/assets';

import Image from 'next/image';
import { useForm } from 'react-hook-form';
import InputField from '../UI/InputField';
import Button from '../UI/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { RequestSellerFormSchema } from '@/schemas/RequestSellerFormSchema';
import { sellerRequest } from '@/lib/service/authService';
import toast from 'react-hot-toast';

function RequestSellerForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(RequestSellerFormSchema) });

  const logo = watch('storelogo');
  const handleFormSubmit = async formdata => {
    try {
      const res = await sellerRequest(formdata);
      console.log(res);
      toast.success(res.data?.message);
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  };

  return (
    <div className="mx-6 min-h-[70vh] my-16">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="max-w-7xl mx-auto flex flex-col items-start gap-3 text-slate-500"
      >
        {/* Title */}
        <div>
          <h1 className="text-3xl ">
            Add Your <span className="text-slate-800 font-medium">Store</span>
          </h1>
          <p className="max-w-lg">
            To become a seller on Localmart, submit your store details for review. Your store will
            be activated after admin verification.
          </p>
        </div>

        <label htmlFor="storelogo" className="mt-10 cursor-pointer">
          Store Logo
          <Image
            src={logo?.[0] instanceof File ? URL?.createObjectURL(logo[0]) : assets.upload_area}
            className="rounded-lg mt-2 h-16 w-auto"
            alt=""
            width={150}
            height={100}
          />
          <input id="storelogo" type="file" accept="image/*" hidden {...register('storelogo')} />
          <p className="text-red-500 text-sm">{errors?.storelogo?.message}</p>
        </label>
        <InputField
          label="username"
          name="localmart"
          type="text"
          {...register('username')}
          className="mt-2 max-w-lg  border-slate-300 outline-slate-400"
          placeholder="Enter your store username "
          error={errors?.username?.message}
        />
        <InputField
          label="name"
          name="name"
          type="text"
          {...register('storeName')}
          className="mt-2 max-w-lg  border-slate-300 outline-slate-400"
          placeholder="Enter your store name"
          error={errors?.name?.message}
        />
        <InputField
          label="description"
          name="description"
          type="text"
          {...register('description')}
          rows={5}
          as="textarea"
          className="mt-2 max-w-lg  border-slate-300 outline-slate-400"
          placeholder="Enter your store description"
          error={errors?.description?.message}
        />
        <InputField
          label="contact Number"
          name="contact"
          type="number"
          {...register('contactNumber')}
          className="mt-2 max-w-lg  border-slate-300 outline-slate-400"
          placeholder="Enter your store contact number"
          error={errors?.contactNumber?.message}
        />
        <InputField
          label="address"
          name="address"
          type="text"
          {...register('address')}
          rows={5}
          as="textarea"
          className="mt-2 max-w-lg  border-slate-300 outline-slate-400"
          placeholder="Enter your store description"
          error={errors?.address?.message}
        />
        <Button
          className="bg-slate-800 text-white px-12 py-2 rounded mt-10 mb-40 active:scale-95 hover:bg-slate-900 transition max-w-[150px] "
          label="Submit"
        />
      </form>
    </div>
  );
}

export default RequestSellerForm;
