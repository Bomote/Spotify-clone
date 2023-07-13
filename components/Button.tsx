import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button
            type={type}
            className={twMerge(`
                bg-green-500
                w-full
                px-3
                py-2
                rounded-full
                text-black
                font-bold
                transition
                hover:opacity-75
                border-transparent
                disabled:cursor-not-allowed
                disabled:opacity-50
            `, className)}
            disabled={disabled}
            ref={ref}
            {...props}
        >{children}</button>
    )
})

Button.displayName = "Button";

export default Button;