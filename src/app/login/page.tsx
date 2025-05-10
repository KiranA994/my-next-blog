"use client";
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '@/store/AuthContext';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

interface Login {
    email: string;
    password: string;
}

export default function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const { login } = useAuth();  // Use the login function from AuthContext
    const router = useRouter();  // Access Next.js's router for navigation
  

    const onSubmit = (data:Login) => {
    console.log(data);
    login();  // Set the user as logged in
    router.push('/');  // Redirect to the blog page after login
    };

    return (
<>
        <div className="bg-[url('/login.webp')] bg-cover bg-no-repeat bg-center">
        <div className='p-10'>
            <Header />
        </div>
        <div className='flex items-center justify-center w-full h-screen'>
            <form onSubmit={handleSubmit(onSubmit)} className='border border-solid border-orange-600 rounded-[0.5rem] p-10'>
                <h2 className='flex justify-center text-3xl font-comic-relief mb-2.5 text-green-700'>Login</h2>
                <div className='flex flex-col gap-2.5'>
                <label htmlFor="email" className='pl-2.5 text-green-700'>Email</label>
                <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className='pl-2.5 border border-solid border-blue-700 rounded-[0.5rem] h-[1.875rem] min-w-2xs'
                />
                {errors.email && <span className='text-red-700'>{errors.email.message}</span>}
                </div>
        
                <div className='flex flex-col gap-2.5 mt-2.5'>
                <label htmlFor="password" className='pl-2.5 text-green-700'>Password</label>
                <input
                    id="password"
                    type="password"
                    {...register('password')}
                    className='pl-2.5 border border-solid border-blue-700 rounded-[0.5rem] h-[1.875rem]'
                />
                {errors.password && <span className='text-red-700'>{errors.password.message}</span>}
                </div>
        
                <div className='flex justify-center items-center mt-6'>
                <button type="submit" className='text-green-700 cursor-pointer border border-solid border-blue-700 p-2.5 w-2/4 rounded-[0.5rem]'>Submit</button>
                </div>
                
            </form>
        </div>
        </div>
</>

    );
}