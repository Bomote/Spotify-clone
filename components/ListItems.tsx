'use client'
import { useRouter } from "next/navigation"
import Image from "next/image"
import { FaPlay } from 'react-icons/fa';

interface ListItemsProps {
    image: string,
    name: string,
    href: string
}

const ListItems = ({ image, name, href }: ListItemsProps) => {
    const router = useRouter();

    const onClick = () => {
        //Add authentication before push
        router.push(href);
    }
    return (
        <button
            onClick={onClick}
            className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 pr-4 transition">
            <div className="relative min-h-[64px] min-w -[64px]">
                <Image className="object-cover" width={64} height={64} src={image} alt="Liked Playlist" />
            </div>
            <p className="font-medium truncate py-5">
                {name}
            </p>
            <div className="absolute flex items-center justify-center right-5 p-4 transition bg-green-500 opacity-0 rounded-full drop-shadow-md group-hover:opacity-100 hover:scale-110">
                <FaPlay className="text-black" />
            </div>
        </button>
    );
}

export default ListItems;