import {UiTextField} from "@/shared/ui/ui-text-field";
import {UiButton} from "@/shared/ui/ui-button";

export const SignUpForm = () => {
    return (
        <form className={"flex flex-col gap-2"}>
            <UiTextField label={"Email"}/>
            <UiTextField label={"Password"}/>
            <UiButton variant={"primary"}>Sign Up</UiButton>
        </form>
    );
}