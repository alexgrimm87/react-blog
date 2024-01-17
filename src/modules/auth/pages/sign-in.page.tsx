import {FC} from "react";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {Link, useNavigate} from "react-router-dom";
import {useLazySignInQuery} from "../api/repository";
import {setUser} from "../service/slice";
import {useAppDispatch} from "../../../store/store";
import {Container} from "../../../common/components/container/container.component";
import {Input} from "../../../common/components/input/input.component";
import {Button} from "../../../common/components/button/button.component";

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
  const {register, handleSubmit, formState} = useForm<SignInFormValues>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(validationSchema)
  });

  const [triggerSignInQuery] = useLazySignInQuery();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (values: SignInFormValues) => {
    try {
      const {data} = await triggerSignInQuery(values, false);

      if (!data) {
        throw new Error('No data in query');
      }

      dispatch(setUser(data.user));
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
        <ul className="list-disc pl-10">
          {(Object.keys(formState.errors) as (keyof typeof formState.errors)[]
          ).map((field) => (
            <li key={`error-${field}`} className="text-blog-red font-bold">
              {formState.errors[field]!.message}
            </li>
          ))}
        </ul>
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
