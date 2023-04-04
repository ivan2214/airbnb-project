"use client";
import Container from "../Container";
import Categories from "./Categories";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";

interface NavBarProps {
  currentUser?: SafeUser | null;
}

const NavBar: React.FC<NavBarProps> = ({ currentUser }) => {
  return (
    <div className="fixed z-10 w-full bg-white shadow-sm">
      <div
        className="border-b-[1px]
      py-4"
      >
        <Container>
          <div
            className="flex items-center
          justify-between
          gap-3
          md:gap-0
          "
          >
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories/>
    </div>
  );
};

export default NavBar;
