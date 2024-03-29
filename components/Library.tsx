'use client'
import { TbPlaylist } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';
import useAuthModal from '@/hooks/useAuthModal';
import { useUser } from '@/hooks/useUser';
import useUploadModal from '@/hooks/useUploadModal';

const Library = () => {
    const authModal = useAuthModal();
    const uploadModal = useUploadModal();
    const { user } = useUser();

    const onClick = () => {
        if (!user) {
            return authModal.onOpen();
        }

        //TODO: check for subscription
        return uploadModal.onOpen();
    }
    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 pt-4">
                <div className="inline-flex items-center gap-x-2">
                    <TbPlaylist size={26} className='text-neutral-400' />
                    <p className='text-md font-medium text-neutral-400'>Your Library</p>
                </div>
                <AiOutlinePlus
                    size={20}
                    onClick={onClick}
                    className='text-neutral-400 cursor-pointer hover:text-white transition'
                />
            </div>
            <div className="flex flex-col mt-4 gap-y-2 px-3">List of Songs!</div>
        </div>
    )
}

export default Library