import styles from "../page.module.css"
import RegisterForm from "@/app/components/RegisterForm"

export const metadata = {
    title: 'Register',
    description: '...',
  }

const Register = () => {
  return (
    <div className={styles.input_cont}>
        <div className={styles.container} >
            <h1 className={styles.login_h1}>Register</h1>
            <RegisterForm />
        </div>
    </div>
  )
}

export default Register