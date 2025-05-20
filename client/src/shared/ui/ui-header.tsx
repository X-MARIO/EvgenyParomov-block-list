import {UiLogo} from "@/shared/ui/ui-logo";
import clsx from "clsx";
import {ReactNode} from "react";

export const UiHeader = ({className, right}: { className?: string, right?: ReactNode }) => {
    return <header
        className={clsx(className, "px-4 py-5 border-b border-b-slate-300 flex justify-between items-center")}>
        <UiLogo/>
        {right}
    </header>
}