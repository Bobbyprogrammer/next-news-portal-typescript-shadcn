"use client";
import { IoIosCloseCircle } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="lg:hidden">
      <Button onClick={toggleMobileMenu} variant="default" className="">
        {isMobileMenuOpen ? <IoIosCloseCircle /> : <RxHamburgerMenu />}
      </Button>
    </div>
  );
};

export default MobileMenu;
