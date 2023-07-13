import { IconType } from "react-icons";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
}
const SidebarItem = ({ icon: Icon, label, active, href }: SidebarItemProps) => {
    return (
        <Link href={href} className={twMerge(`
        flex flex-row h-auto items-center w-full gap-x-4 font-medium text-md cursor-pointer hover:text-white transition py-1 text-neutral-400`, active && "text-white")
        }>
            <Icon width={26} />
            <p className="truncate w-full">{label}</p>
        </Link>

    )
}

export default SidebarItem