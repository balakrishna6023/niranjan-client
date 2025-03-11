import { motion } from "framer-motion";
import "./services.css";

const Services = () => {
  return (
    <div className="services">
      <h1 className="heading">Our Services</h1>

      <div className="services-container">
        {/* AI Services for Websites & Apps */}
        <motion.div
          className="service-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>AI Customer Service for Websites & Apps</h2>
          <p>
            We provide AI-powered solutions to enhance the functionality and user experience of your websites and mobile applications.
          </p>
        </motion.div>

        {/* AI Training Services */}
        <motion.div
          className="service-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>AI Training</h2>
          <p>
            Our AI training programs help businesses and professionals stay ahead with the latest advancements in artificial intelligence.
          </p>
        </motion.div>

        {/* Training for Students & Courses */}
        <motion.div
          className="service-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2>Training for Students & Courses</h2>
          <p>
            We offer specialized courses for students to develop their skills in AI, programming, and emerging technologies.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
