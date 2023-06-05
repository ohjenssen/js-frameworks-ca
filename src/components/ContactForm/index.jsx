import { useForm } from "react-hook-form";
import * as S from './ContactForm.styles';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
    .object({
        fullName: yup
            .string()
            .min(3, 'Your name must be at least 3 characters.')
            .required('Please enter your full name.'),
        subject: yup
            .string()
            .min(3)
            .required(),
        email: yup
            .string()
            .required(),
        message: yup
            .string()
            .min(3)
            .required()
    })
    .required();
;

export default function ContactForm(){
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
      } = useForm({
        resolver: yupResolver(schema),
    });

    function logToConsole(data){
        console.log(data);
    }

    return (
        <S.Form onSubmit={handleSubmit(logToConsole)}>
            <div className='input'>
                <label htmlFor='fullName'>Full name</label>
                <div className='input-wrapper'>
                    <input {...register('fullName')} />
                    {isValid && <label className='valid'>&#10004;</label> }
                </div>
                {errors.fullName && <p>{errors.fullName.message}</p>}
            </div>
            <div className='input'>
                <label htmlFor='subject'>Subject</label>
                <div className='input-wrapper'>
                    <input {...register('subject')} />
                    {isValid && <label className='valid'>&#10004;</label>}
                </div>
                {errors.subject && <p>{errors.subject.message}</p>}
            </div>
            <div className='input'>
                <label htmlFor='email'>Email</label>
                <div className='input-wrapper'>
                    <input {...register('email')} />
                    {isValid && <label className='valid'>&#10004;</label>}
                </div>
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className='input'>
                <label htmlFor='message'>Message</label>
                <div className='input-wrapper'>
                    <textarea {...register('message')} />
                    {isValid && <label className='valid'>&#10004;</label>}
                </div>
                {errors.message && <p>{errors.message.message}</p>}
            </div>
            <button type='submit'>Submit</button>
        </S.Form>
    )
}
