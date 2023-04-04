"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { SafeUser } from "@/app/types";
import { signOut } from "next-auth/react";
interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prevValue) => !prevValue);
  }, []);
  return (
    <div
      className="
  relative
  "
    >
      <div className="flex items-center gap-3">
        <div
          onClick={() => {}}
          className="
      hidden
      cursor-pointer
      rounded-full
      px-4
      py-3
      font-semibold
      transition
      hover:bg-neutral-100
      md:block
      "
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="
         flex
         cursor-pointer
         items-center gap-3 rounded-full
         border-[1px]
         border-neutral-200
         p-4
         transition
         hover:shadow-sm
         md:px-2
         md:py-1
         "
        >
          <AiOutlineMenu size={18} />
          <div
            className="
          hidden md:block
          "
          >
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="
      absolute
      right-0
      top-12
      w-[40vw]
      overflow-hidden
      rounded-xl
      bg-white
      text-sm
      shadow-md
      md:w-3/4
      "
        >
          <div className="flex cursor-pointer flex-col">
            {currentUser ? (
              <>
                <MenuItem label="My trips" onClick={() => {}} />
                <MenuItem label="My favorites" onClick={() => {}} />
                <MenuItem label="My reservations" onClick={() => {}} />
                <MenuItem label="My properties" onClick={() => {}} />
                <MenuItem label="Airbnb your home" onClick={() => {}} />
                <hr />
                <MenuItem label="Logout" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem label="Login" onClick={loginModal.onOpen} />
                <MenuItem label="Sign up" onClick={registerModal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
