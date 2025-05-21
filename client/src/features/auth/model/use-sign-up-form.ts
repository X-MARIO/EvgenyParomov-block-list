import {useRouter} from "next/router";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {authControllerSignUp} from "@/shared/api/generated";
import {routes} from "@/shared/constants/routes";

export const useSignUpForm = () => {
    const router = useRouter();

    const {register, handleSubmit} = useForm<{
        readonly email: string;
        readonly password: string;
    }>();

    const signUpMutation = useMutation({
        mutationFn: authControllerSignUp,
        onSuccess() {
            router.push(routes.home);
        }
    });

    return {
        register,
        handleSubmit: handleSubmit((data) => signUpMutation.mutate(data)),
        isPending: signUpMutation.isPending,
    }
}