/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

import Banner from "../Components/Banner";
import FeaturedProducts from "../Components/FeaturedProducts";
import ProductSection from "../Components/ProductSection";
import SportsCategory from "../Components/SportsCategory";
import Testimonials from "../Components/Testimonials";
import { useState } from "react";

const MotionSection = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`theme-${theme}`}>
      <button className="btn btn-circle btn-outline" onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>
      {/* Your existing content */}
      <MotionSection delay={0.1}>
        <Banner />
      </MotionSection>

      <MotionSection delay={0.4}>
        <ProductSection />
      </MotionSection>

      <MotionSection delay={0.3}>
        <SportsCategory />
      </MotionSection>

      <MotionSection delay={0.3}>
        <FeaturedProducts />
      </MotionSection>

      <MotionSection delay={0.2}>
        <Testimonials />
      </MotionSection>
    </div>
  );
};

export default Home;
