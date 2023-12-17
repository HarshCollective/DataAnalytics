'use client';

import { useCallback, useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "./MenuItem";
import useLoginModal from "@/app/hooks/useLoginModal";


interface UserMenuProps {
  currentUser?: any
}

const UserMenu: React.FC<UserMenuProps> = ({
  currentUser
}) => {
  const router = useRouter();

  const loginModal = useLoginModal();



  return (
    <div className="">
      <div
        className="
             
            w-[50vw]
            md:w-10/12
            bg-white 
            overflow-hidden 
            
            top-12 
            text-sm
          "
      >
        <div className="flex flex-col cursor-pointer px-8">
          {currentUser ? (
            <div className="flex">

              <MenuItem
                label="Questions"
                onClick={() => router.push('/questions')}
              />
              <MenuItem
                label="Logout"
                onClick={() => { signOut(); router.push('/') }}
              />
            </div>
          ) : (
            <>
              <MenuItem
                label="Login"
                onClick={loginModal.onOpen}
              />
            </>
          )}
        </div>
      </div>

    </div>
  );
}

export default UserMenu;