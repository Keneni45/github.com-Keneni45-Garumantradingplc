import React from "react";
import { motion } from "framer-motion";
import lithium from "../assets/lithium.jpg";
import pulse from "../assets/pulse.jpg";

export default function About() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%", bottom: 0 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="about-container">
      <div>
        {" "}
        <h1 style={{ marginLeft: "500px" }}>Lorem</h1>
      </div>
      <div className="about-1">
        <div>
          <img
            src={lithium}
            alt=""
            style={{ width: "100px", height: "100px", marginLeft: "300px" }}
          />
        </div>
        <div>
          <p style={{ marginLeft: "400px", marginRight: "400px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            eveniet officia dolorem quaerat, eius odio nam voluptate repudiandae
            dicta debitis accusantium deleniti ducimus quis? Dignissimos illum
            numquam ducimus accusantium unde.
          </p>
        </div>
      </div>
      <div>
        {" "}
        <h1 style={{ marginLeft: "500px" }}>Lorem</h1>
      </div>
      <div className="about-1">
        <div>
          <img
            src={lithium}
            alt=""
            style={{ width: "100px", height: "100px", marginLeft: "300px" }}
          />
        </div>
        <div>
          <p style={{ marginLeft: "400px", marginRight: "400px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            eveniet officia dolorem quaerat, eius odio nam voluptate repudiandae
            dicta debitis accusantium deleniti ducimus quis? Dignissimos illum
            numquam ducimus accusantium unde.
          </p>
        </div>
      </div>
      <div>
        {" "}
        <h1 style={{ marginLeft: "500px" }}>Lorem</h1>
      </div>
      <div className="about-1">
        <div>
          <img
            src={lithium}
            alt=""
            style={{ width: "100px", height: "100px", marginLeft: "300px" }}
          />
        </div>
        <div>
          <p style={{ marginLeft: "400px", marginRight: "400px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            eveniet officia dolorem quaerat, eius odio nam voluptate repudiandae
            dicta debitis accusantium deleniti ducimus quis? Dignissimos illum
            numquam ducimus accusantium unde.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
