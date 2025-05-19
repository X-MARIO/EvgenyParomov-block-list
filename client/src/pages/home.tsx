import {authControllerGetSessionInfo} from "@/shared/api/generated";
import {useQuery} from "@tanstack/react-query";
import {UiButton} from "@/shared/ui/ui-button";

export const HomePage = () => {

  const { data } = useQuery({
    queryKey: ['session'],
    queryFn: () => authControllerGetSessionInfo()
  });

  return (
      <main className={'flex min-h-screen flex-col items-center justify-between p-24'}>
        { data?.email }
        <UiButton variant="primary">Test</UiButton>
        <UiButton variant="secondary">Test</UiButton>
        <UiButton variant="outlined">Test</UiButton>
        <UiButton disabled variant="primary">Test</UiButton>
      </main>
  )
}
