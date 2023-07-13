'use client';

import Button from "./Button";
import { useRouter } from "next/navigation";
import { twMerge } from 'tailwind-merge';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";

interface HeaderProps {
    children: React.ReactNode,
    className?: string,
}

const Header = ({ children, className }: HeaderProps) => {
    const authModel = useAuthModal();
    const router = useRouter();

    const supabaseClient = useSupabaseClient();
    const { user } = useUser();

    const handleLogout = async () => {
        const { error } = await supabaseClient.auth.signOut();
        //TODO: Reset any playing songs
        router.refresh();

        if (error) {
            toast.error(error.message);
        } else {
            toast.success('Logged out!');
        }
    }
    return (
        <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`, className)}>
            <div className="flex w-full mb-4 items-center justify-between">
                <div className="hidden items-center md:flex gap-x-2">
                    <button onClick={() => router.forward()} className="bg-black rounded-full hover:opacity-75 transition items-center justify-center flex">
                        <RxCaretLeft size={32} className="text-white" />
                    </button>
                    <button onClick={() => router.back()} className="bg-black rounded-full hover:opacity-75 transition items-center justify-center flex">
                        <RxCaretRight size={32} className="text-white" />
                    </button>
                </div>

                {/** Mobile */}
                <div className="flex md:hidden gap-x-2 items-center">
                    <button className="rounded-full bg-white hover:opacity-75 p-2 flex items-center justify-center transition">
                        <HiHome className="text-black" size={20} />
                    </button>
                    <button className="rounded-full bg-white hover:opacity-75 p-2 flex items-center justify-center transition">
                        <BiSearch className="text-black" size={20} />
                    </button>
                </div>
                <div className="flex gap-x-4 justify-between items-center">
                    {user ? (
                        <div className="flex gap-x-4 items-center">
                            <Button
                                onClick={handleLogout}
                                className="bg-white px-6 py-2"
                            >
                                Logout
                            </Button>
                            <Button
                                onClick={() => router.push('/account')}
                                className="bg-white"
                            >
                                <FaUserAlt />
                            </Button>
                        </div>
                    ) : (
                        <>
                            <div>
                                <Button
                                    onClick={authModel.onOpen}
                                    className="bg-transparent text-neutral-300 font-medium"
                                >
                                    Sign Up
                                </Button>
                            </div>
                            <div>
                                <Button
                                    onClick={authModel.onOpen}
                                    className="bg-white py-2 px-6"
                                >
                                    Log In
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            {children}
        </div>
    );
}

export default Header;