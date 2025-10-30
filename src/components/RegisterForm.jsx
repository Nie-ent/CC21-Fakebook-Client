import { useForm } from 'react-hook-form'
import { registerSchema } from '../validation/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'

function Register() {

    const { handleSubmit, register, formState, reset } = useForm({
        resolver: zodResolver(registerSchema),
        mode: 'onSubmit'
    })

    const { isSubmitting, errors } = formState
    console.log('isSubmitting', isSubmitting)
    console.log('errors', errors)

    const onSubmit = async (data) => {
        try {
            // alert(JSON.stringify(data, null, 2))
            const res = await axios.post('http://localhost:8899/api/auth/register', data)
            console.log('res', res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="text-3xl text-center opacity-70">Create a new account</div>
            <div className="divider opacity-60"></div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 p-4 pt-3'>
                <div className="flex gap-2">

                    <div className="w-full">
                        <input type="text"
                            placeholder='First name'
                            className='input input-bordered w-full'
                            {...register('firstName')} />
                        <p className="text-sm text-error">{errors.firstName?.message}</p>
                    </div>

                    <div className="w-full">
                        <input type="text"
                            placeholder='Last name'
                            className='input input-bordered w-full'
                            {...register('lastName')} />
                        <p className="text-sm text-error">{errors.lastName?.message}</p>
                    </div>

                </div>

                <div className="w-full">
                    <input type="text"
                        placeholder='Email or Phone number'
                        className='input input-bordered w-full'
                        {...register('identity')} />
                    <p className="text-sm text-error">{errors.identity?.message}</p>
                </div>

                <div className="w-full">
                    <input type="password"
                        placeholder='New password'
                        className='input input-bordered w-full'
                        {...register('password')} />
                    <p className="text-sm text-error">{errors.password?.message}</p>
                </div>

                <div className="w-full">
                    <input type="password"
                        placeholder='Confirm password'
                        className='input input-bordered w-full'
                        {...register('confirmPassword')} />
                    <p className="text-sm text-error">{errors.confirmPassword?.message}</p>
                </div>

                <button disabled={isSubmitting} className='btn btn-secondary text-xl text-white'>Sign up</button>
            </form>
        </>
    )
}
export default Register
