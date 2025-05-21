import {SignUpForm} from "@/features/auth";
import {UiHeader} from "@/shared/ui/ui-header";
import {UiFormPageLayout} from "@/shared/ui/layouts/ui-form-page-layout";

export const SignUpPage = () => {
    return (
        <UiFormPageLayout title={"Sign Up"} header={<UiHeader/>} form={<SignUpForm/>}/>
    );
}