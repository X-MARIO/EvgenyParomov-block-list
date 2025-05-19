import clsx from "clsx";
import {InputHTMLAttributes, useId} from "react";

export type UiTextFieldProps = {
    readonly className?: string;
    readonly label?: string;
    readonly error?: string;
    readonly inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export const UiTextField = ({className, error, label, inputProps}: UiTextFieldProps) => {
    const id = useId();
    return (
        <div className={clsx(className, 'flex flex-col gap-1')}>
            {label && (
                <label htmlFor={id} className={'block'}>{label}</label>
            )}
            <input {...inputProps} id={id}
                   className={clsx(inputProps?.className, 'rounded border border-slate-300 focus:border-teal-600 px-2 h-10 outline-none')}/>
            {error && (
                <div className="text-rose-400 text-sm">{error}</div>
            )}
        </div>
    )
}