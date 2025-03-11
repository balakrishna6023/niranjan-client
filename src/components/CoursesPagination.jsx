import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import mywork_data from "../assets/courses";
import "./coursepagination.css";

const CoursesPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6; // Display 6 courses per page
  const coursesRef = useRef(null);

  // Calculate total pages
  const totalPages = Math.ceil(mywork_data.length / coursesPerPage);

  // Get current courses
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = mywork_data.slice(indexOfFirstCourse, indexOfLastCourse);

  // Scroll to the courses section on page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    if (coursesRef.current) {
      coursesRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div
      className="courses-container"
      ref={coursesRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="course-title">Available Courses</h2>
      <div className="course-list grid-container">
        {currentCourses.map((course, index) => (
          <motion.div
            key={index}
            className="course-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Add the image here */}
            <div className="course-image-container">
              <img
                src={course.image_address}
                alt={course.course_name}
                className="course-image"
              />
            </div>
            <h3 className="course-title">{course.course_name}</h3>
            <p className="course-description">{course.course_description}</p>
          </motion.div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </motion.div>
  );
};

export default CoursesPagination;