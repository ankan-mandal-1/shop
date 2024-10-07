import Image from 'next/image'
import styles from "./page.module.css"
import {Box, LayoutList, ArrowShapeUpFromLine} from '@gravity-ui/icons';
import bg from "@/public/assets/bg.jpg"
import AddNavbar from '@/app/components/AddNavbar';

const page = () => {
  return (
    <div className="dashboard_container">

      <AddNavbar />

      <div className={styles.content}>
        <h1>Add Product</h1>
        <div>
          <label>Product Name</label>
          <input name="name" placeholder="Product Name" className={styles.input}/>
        </div>
        <div>
          <label>Product Category</label>
          <select name="cars" id="cars" className={styles.input}>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div>
          <label>Original Price</label>
          <input name="name" placeholder="Original Price" className={styles.input}/>
        </div>
        <div>
          <label>Discounted Price</label>
          <input name="name" placeholder="Discounted Price" className={styles.input}/>
        </div>
        <div>
          <label>Description</label>
          <textarea name="name" placeholder="Description" className={styles.input}/>
        </div>
        <div>
          <label>Product Image (4 images only)</label>
          <div className={styles.image_content}>
            <Image src={bg} className={styles.image} />
            <Image src={bg} className={styles.image} />
            <Image src={bg} className={styles.image} />
            <label className={styles.upload}>
              <ArrowShapeUpFromLine />Upload
              <input type="file" name="" id="" hidden/>
            </label>
          </div>
        </div>
        <button>Add Product</button>
      </div>

    </div>
  )
}

export default page