import "./AddNavbar.css"
import {Box, LayoutList} from '@gravity-ui/icons';
import Link from "next/link";

const AddNavbar = () => {
  return (
    <div className={"navlink"}>
        <Link href="/dashboard/add">
        <div className={"navBtn"}>
          <Box style={{ width: '25px', height: '25px' }}/>
          <div>Add Product</div>
        </div>
        </Link>

        <Link href="/dashboard/add/category">
        <div className={"navBtn"}>
          <LayoutList style={{ width: '25px', height: '25px' }}/>
          <div>Add Category</div>
        </div>
        </Link>
      </div>
  )
}

export default AddNavbar