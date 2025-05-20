import {authControllerGetSessionInfo} from "@/shared/api/generated";
import {useQuery} from "@tanstack/react-query";
import {UiButton} from "@/shared/ui/ui-button";
import {UiTextField} from "@/shared/ui/ui-text-field";
import {UiSelectField} from "@/shared/ui/ui-select-field";
import {UiLink} from "@/shared/ui/ui-link";
import {UiSpinner} from "@/shared/ui/ui-spinner";
import {UiPageSpinner} from "@/shared/ui/ui-page-spinner";

export const HomePage = () => {

    const {data} = useQuery({
        queryKey: ['session'],
        queryFn: () => authControllerGetSessionInfo()
    });

    return (
        <main className={'flex min-h-screen flex-col items-center justify-between p-24'}>
            {data?.email}
            <UiButton variant="primary">Test</UiButton>
            <UiButton variant="secondary">Test</UiButton>
            <UiButton variant="outlined">Test</UiButton>
            <UiButton disabled variant="primary">Test</UiButton>
            <UiTextField label={'Text field'} inputProps={{placeholder: 'Enter email'}}></UiTextField>
            <UiTextField error={'Text field'} inputProps={{placeholder: 'Enter email'}}></UiTextField>
            <UiTextField inputProps={{placeholder: 'Enter email'}}></UiTextField>
            <UiSelectField selectProps={{placeholder: 'Enter email'}}
                           options={[{value: "1", label: 'Label 1'}]}></UiSelectField>
            <UiLink href={'/'}>texas</UiLink>
            <UiSpinner className={"text-teal-600 w-20 h-20"} />
            <UiPageSpinner />
        </main>
    )
}
