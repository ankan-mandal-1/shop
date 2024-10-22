"use client"
import "./Sidebar.css"
import Link from "next/link";
import { usePathname } from "next/navigation";
import {CirclePlus, House, ShoppingBag, SquareListUl, Gear} from '@gravity-ui/icons';

const Sidebar = () => {

    const pathname = usePathname();

  return (
    <div className="sidebar">
        <ul className="icon_sidebar">
            <Link href="/dashboard">
                <li className="icon_box_sidebar">
                    <House style={{ width: '32px', height: '32px' }} color={pathname === "/dashboard" ? "black" : "gray"}  />
                    Home
                </li>
            </Link>
            <Link href="/dashboard/products">
                <li className="icon_box_sidebar">
                    <ShoppingBag style={{ width: '32px', height: '32px' }} color={pathname === "/dashboard/products" ? "black" : "gray"}  />
                    Products
                </li>
            </Link>
            <Link href="/dashboard/add">
            <li className="icon_box_sidebar">
                <CirclePlus style={{ width: '32px', height: '32px' }} color={pathname === "/dashboard/add" || pathname === "/dashboard/add/category" ? "black" : "gray"} />
                Add
            </li>
            </Link>
            <Link href="/dashboard/orders">
            <li className="icon_box_sidebar">
                <SquareListUl style={{ width: '32px', height: '32px' }} color={pathname === "/dashboard/orders" ? "black" : "gray"}  />
                Orders
            </li>
            </Link>
            <Link href="/dashboard/settings">
            <li className="icon_box_sidebar">
                <Gear style={{ width: '32px', height: '32px' }} color={pathname === "/dashboard/settings" ? "black" : "gray"}  />
                Setting
            </li>  
            </Link>
        </ul>
    </div>
  )
}

export default Sidebar