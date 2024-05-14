'use client'

import { useEffect, useState } from "react";
import { getUserPhotoAvatar } from "@/msal/msalGraph";
import { msalInstance } from "@/msal/msal";
import Image from "next/image";
import { extractInitials } from "@/msal/userHelper";

interface UserAvatarProps {
    showInfo?: boolean;
}

export default function UserAvatar({ showInfo }: UserAvatarProps) {
    const [userPhoto, setUserPhoto] = useState<string | null>(null);
    const [showUserInitials, setShowUserInitials] = useState(false);
    const [userInitials, setUserInitials] = useState('?');

    const user = msalInstance.getActiveAccount();

    useEffect(() => {
        if (user) {
            getUserPhotoAvatar().then((response: any) => {
                console.log("getUserPhotoAvatar", response);
                if (response instanceof Blob) {
                    const url = URL.createObjectURL(response);
                    setUserPhoto(url);
                } else if (typeof response === "string") {
                    setUserPhoto(response);
                    setShowUserInitials(false);
                } else {
                    console.log("Unsupported photo data type.");
                }
            });
            setShowUserInitials(false);
            setUserInitials(extractInitials(user.name));
            console.log(user);
        }
    }, []) //intentionally left the dependency blank.

    function onImgError() {
        setShowUserInitials(true);
    }

    return (
        // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/role-supports-aria-props
        <div className="flex gap-4 justify-center h-10 my-auto mx-auto antialiased">
            {
                showUserInitials ?
                    <div className="flex justify-center rounded-full h-10 w-10 bg-gray-300 ">
                        <div className="text-gray-900 text-lg font-bold my-auto mx-auto drop-shadow-md antialiased">{userInitials}</div>
                    </div>
                    :
                    userPhoto &&
                    <Image
                        alt='User Avatar'
                        priority
                        placeholder="empty"
                        className="rounded-full h-10 w-10"
                        aria-placeholder="avatar goes here"
                        onError={onImgError}
                        width={10}
                        height={10}
                        src={userPhoto ?? ''}
                    />
            }
            {
                showInfo &&
                <div className="flex flex-col items-start justify-center">
                    <h3 className="text-md font-medium drop-shadow">{user?.name}</h3>
                    <h4 className="text-xs">{user?.username}</h4>
                </div>
            }
        </div>
    )
}
