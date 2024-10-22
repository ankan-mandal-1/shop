import LoginForm from "@/app/components/LoginForm"
import styles from "../page.module.css"
import Link from "next/link"

const LoginPage = () => {
  return (
    <div className={styles.input_cont}>
        <div className={styles.container} >
            <h1 className={styles.login_h1}>Login</h1>
            <LoginForm />
        </div>
    </div>
  )
}

export default LoginPage