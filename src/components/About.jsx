import { motion } from "framer-motion";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      {/* About Section */}
      <motion.section
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="heading">About Us</h1>
        <p className="para">
          We are a leading tech company specializing in AI-powered website
          solutions and student training programs.
        </p>
      </motion.section>

      {/* Our Mission Section */}
      <motion.section
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="heading">Our Mission</h1>
        <p className="para">
          Our goal is to empower businesses and students by providing cutting-edge
          AI-driven tools and education.
        </p>
      </motion.section>

      {/* Our Vision Section */}
      <motion.section
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h1 className="heading">Our Vision</h1>
        <p className="para">
          We envision a future where AI is seamlessly integrated into daily
          workflows, enhancing productivity and learning experiences worldwide.
        </p>
      </motion.section>
    </div>
  );
};

export default About;
