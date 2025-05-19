import {ButtonHTMLAttributes} from "react";
import clsx from "clsx";

type UiButtonVariant = 'primary' | 'secondary' | 'outlined';

export type UiButtonProps = {
    readonly variant: UiButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const UiButton = ({ className, ...props}: UiButtonProps) => {
    return <button {...props} className={clsx(className, '')} />
}