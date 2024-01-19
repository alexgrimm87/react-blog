import {FC} from "react";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/use-auth";
import {Container} from "../../../common/components/container/container.component";
import {Input} from "../../../common/components/input/input.component";
import {Button} from "../../../common/components/button/button.component";
import {ErrorsList} from '../../../common/components/errors-list/errors-list.component';

interface SignInPageProps {}

interface SignInFormValues {
  email: string;
  password: string;
}

const validationSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(6)
});

export const SignInPage:FC<SignInPageProps> = () => {
  const {signIn} = useAuth();

  const {register, handleSubmit, formState} = useForm<SignInFormValues>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(validationSchema)
  });

  const navigate = useNavigate();

  const onSubmit = async (values: SignInFormValues) => {
    try {
      await signIn(values);
      navigate('/');
    } catch (e) {
      toast.error("Something went wrong. Please, try again later");
    }
  };

  return (
    <Container>
      <h1 className="text-4xl text-center mb-4">Sign up</h1>
      <p className="text-center mb-4">
        <Link to="/sign-up">Need an account?</Link>
      </p>
      <form className="max-w-xl mx-auto flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
        <ErrorsList errors={formState.errors} />
        <Input type="email" placeholder="Email" {...register('email')} />
        <Input type="password" placeholder="Password" {...register('password')} />
        <div className="flex justify-end">
          <Button type="submit" btnStyle="GREEN" size="LG" disabled={formState.isSubmitting}>
            Sign in
          </Button>
        </div>
      </form>
    </Container>
  );
};
