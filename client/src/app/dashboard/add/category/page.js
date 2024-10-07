import Image from 'next/image'
import styles from "../page.module.css"
import {Box, LayoutList, ArrowShapeUpFromLine} from '@gravity-ui/icons';
import bg from "@/public/assets/bg.jpg"
import AddNavbar from '@/app/components/AddNavbar';

const page = () => {
  return (
    <div className="dashboard_container">

      <AddNavbar />

      <div className={styles.content}>
        <h1>Add Category</h1>
        <div>
          <label>Category Name</label>
          <input name="name" placeholder="Category Name" className={styles.input}/>
        </div>
        <button>Add Catgory</button>
      </div>

    </div>
  )
}

export default page