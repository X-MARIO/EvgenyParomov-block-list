import {ButtonHTMLAttributes} from "react";
import clsx from "clsx";

type UiButtonVariant = 'primary' | 'secondary' | 'outlined';

export type UiButtonProps = {
    readonly variant: UiButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const UiButton = ({className, variant, ...props}: UiButtonProps) => {
    return <button {...props} className={clsx(
        className,
        "px-4 h-10 rounded cursor-pointer flex gap-2 items-center justify-center",
        {
            'primary': 'text-white bg-teal-500 hover:bg-teal-600 disabled:opacity-50 shadow shadow-teal-500/30',
            'secondary': 'text-white bg-rose-500 hover:bg-rose-600 disabled:opacity-50 shadow shadow-rose-500/30',
            'outlined': 'border border-slate-300 hover:bg-slate-500 disabled:opacity-50',
        }[variant],
    )}/>
}