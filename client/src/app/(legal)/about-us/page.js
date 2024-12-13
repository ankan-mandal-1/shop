import React from 'react'
import styles from "@/app/page.module.css"

export const metadata = {
  title: 'About Us',
  description: "Discover Fleket, the platform that lets you launch your dream online store for free. Learn about our mission to empower entrepreneurs with easy-to-use tools for building a successful e-commerce business.",
}

const AboutUs = () => {
  return (
    <>
    <br/>
    <div className={styles.container}>
      <div className="about-us-container">
      <section className="hero">
        <h1>Welcome to Fleket</h1><br/>
        <p>
          The platform that lets you turn your dreams into reality without any barriers! We believe everyone should have the opportunity to start their own online business, regardless of their technical skills or budget. That’s why we offer an easy-to-use, no-cost platform to help you create a stunning online store – absolutely free! Whether you’re selling handmade jewelry, vintage clothing, or any other product, we make it simple to showcase your products and start making sales in no time.
        </p>
      </section><br/>

      <section className="features">
        <h2>What We Offer:</h2><br/>
        <ul>
          <li>
            <strong>Free Store Creation</strong>: No hidden fees, no setup costs. Just sign up and get started with your online store immediately.
          </li>
          <li>
            <strong>User-Friendly Website Builder</strong>: You don’t need to be tech-savvy to design your store. Our drag-and-drop builder makes customization effortless, so you can focus on what matters most: your business.
          </li>
          <li>
            <strong>Powerful Features</strong>: From product listings to payment integrations, we provide all the tools you need to manage your store effectively and grow your business.
          </li>
          <li>
            <strong>Real Success Stories</strong>: Thousands of entrepreneurs have already taken the plunge with Fleket. Whether it’s Sarah T., who launched her handmade jewelry shop, or Mike L., who started selling vintage clothing, our platform has empowered them to make their entrepreneurial dreams a reality.
          </li>
        </ul>
      </section><br/>

      <section className="why-choose-us">
        <h2>Why Choose Fleket?</h2><br/>
        <ul>
          <li>
            <strong>No Costs, No Catch</strong>: Start your e-commerce journey without the burden of fees. All the essential features are available for free to help you succeed.
          </li>
          <li>
            <strong>Easy-to-Use Interface</strong>: From your store’s layout to adding products and managing orders, Fleket makes it effortless to build and run your online store.
          </li>
          <li>
            <strong>Quick Launch</strong>: You can create and launch your store within hours, so you can start selling and making money right away.
          </li>
        </ul>
      </section><br/>

      <section className="get-started">
        <h2>Get Started Today!</h2><br/>
        <p>
          Don’t wait any longer to bring your business idea to life. Sign up for free, and in just a few simple steps, you’ll be on your way to owning a professional online store. Whether you're a seasoned entrepreneur or a first-time seller, Fleket is here to support you every step of the way.
        </p>
        <br/>
        <h2>Contact Us</h2><br/>
        <p>
          Email: iamhelloguy@gmail.com
        </p>
        <br/>
      </section>
    </div>
      </div>
    </>
  )
}

export default AboutUs