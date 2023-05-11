
import "./home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {

  const containerVariants = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 0.3, type: "spring", stiffness: 70 },
      // transition={{delay:0.7 , duration:1 , type:"spring"}}
    },
    exit: {
      y: "-100vh",
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="home-info">
        <h1 id="simple_arc" className="textomimage">
          Agri-Cure
        </h1>
        <p className="textomimage2">
          Welcome to our innovative agricultural website! We are revolutionizing
          the way farmers and agricultural professionals diagnose plant diseases
          by utilizing the power of machine learning. Our advanced ML model can
          detect the disease present in plants with just the image of an
          infected leaf, making it easier and faster for you to identify and
          treat the problem. With our technology, we aim to improve crop health
          and increase yields, ultimately contributing to a more sustainable and
          prosperous agricultural industry.
        </p>
        <Link to="/start" className="btn-link">
          Get Started
        </Link>
      </div>
    </motion.div>
  );
}

export default Home;
