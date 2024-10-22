"use client"
import "./BottomNavbar.css"
import {CirclePlus, House, ShoppingBag, SquareListUl, Gear} from '@gravity-ui/icons';
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomNavbar = () => {

    const pathname = usePathname();

  return (
    <div className="bottom_navbar">
        <ul className="icon">
            <Link href="/dashboard">
                <li className="icon_box">
                    <House style={{ width: '32px', height: '32px' }} color={pathname === "/dashboard" ? "black" : "gray"}  />
                    Home
                </li>
            </Link>
            <Link href="/dashboard/products">
                <li className="icon_box">
                    <ShoppingBag style={{ width: '32px', height: '32px' }} color={pathname === "/dashboard/products" ? "black" : "gray"}  />
                    Products
                </li>
            </Link>
            <Link href="/dashboard/add">
            <li className="icon_box">
                <CirclePlus style={{ width: '32px', height: '32px' }} color={pathname === "/dashboard/add" ? "black" : "gray"} />
                Add
            </li>
            </Link>
            <Link href="/dashboard/orders">
            <li className="icon_box">
                <SquareListUl style={{ width: '32px', height: '32px' }} color={pathname === "/dashboard/orders" ? "black" : "gray"}  />
                Orders
            </li>
            </Link>
            <Link href="/dashboard/settings">
            <li className="icon_box">
                <Gear style={{ width: '32px', height: '32px' }} color={pathname === "/dashboard/settings" ? "black" : "gray"}  />
                Setting
            </li>  
            </Link>
        </ul>
    </div>
  )
}

export default BottomNavbar