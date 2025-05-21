import {UiTextField} from "@/shared/ui/ui-text-field";
import {UiButton} from "@/shared/ui/ui-button";
import {routes} from "@/shared/constants/routes";
import {UiLink} from "@/shared/ui/ui-link";
import {useSignUpForm} from "../model/use-sign-up-form";

export const SignUpForm = () => {
    const {isPending, register, handleSubmit} = useSignUpForm();

    return (
        <form className={"flex flex-col gap-2"} onSubmit={handleSubmit}>
            <UiTextField label={"Email"} inputProps={{type: 'email', ...register("email", {required: true})}}/>
            <UiTextField label={"Password"}
                         inputProps={{type: 'password', ...register("password", {required: true,})}}/>
            <UiButton disabled={isPending} variant={"primary"}>Sign Up</UiButton>
            <UiLink className={"text-center"} href={routes.home}>Sign In</UiLink>
        </form>
    );
}