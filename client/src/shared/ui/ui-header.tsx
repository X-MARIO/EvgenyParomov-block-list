import {UiLogo} from "@/shared/ui/ui-logo";
import clsx from "clsx";

export const UiHeader = ({className}: { className?: string }) => {
    return <header className={clsx(className, "px-4 py-5 border-b border-b-slate-300 flex justify-between")}>
        <UiLogo/>
    </header>
}