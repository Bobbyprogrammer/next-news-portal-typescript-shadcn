
"use client"
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,

} from "@/components/ui/navigation-menu";


import { Switch } from "@/components/ui/switch"
import { Button } from "./ui/button";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname()

  return (
    <header className="py-4 bg-white text-gray-900 shadow-md transition-colors">
      <nav className="max-w-7xl flex mx-auto px-4 sm:px-6 lg:px-8 justify-between items-center">
        <div className="text-xl font-bold">
          <Link href={"/"}>Daily News</Link>
        </div>

        {/*desktop navigation*/}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex space-x-8">
            <NavigationMenuItem className="flex gap-5 text-lg">
              <NavigationMenuLink  className="hover:text-gray-600">
              <ul className="flex gap-4">
              <li>
                  <Link href={'/news'} className={`${pathname === '/news' ? 'text-red-600 font-semibold' : ''}`}>News</Link>
                </li>
              <li>
                  <Link href={'/services'} className={`${pathname === '/services' ? 'text-red-600 font-semibold' : ''}`}>Services</Link>
                </li>
              <li>
                  <Link href={'/contact'} className={`${pathname === '/contact' ? 'text-red-600 font-semibold' : ''}`}>Contact</Link>
                </li>
              
              </ul>
              </NavigationMenuLink>
            
        
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

				{/*color switcher and login btn*/}
				<div className="hidden lg:flex items-center space-x-4 gap-6">
					<div className="flex gap-3 justify-center items-center">
						<span>Dark Mode</span>
						<Switch />
					</div>
				
					<Button variant="default" className="">Login</Button>
					
				</div>

        {/*hamburgermenu*/}
        <MobileMenu/>
       
      </nav>
    </header>
  );
};

export default Navbar;
