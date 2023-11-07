import React from "react";
import { motion } from "framer-motion";
import coffee from "../assets/coffeeCup.jpg";
import lithium from "../assets/lithium.jpg";
import pulse from "../assets/pulse.jpg";
export default function Service() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="service">
      OUR PRODUCT
      <div className="service-container">
        <p className="service_p">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores rerum
          et quam minima dicta labore, ex sequi accusantium neque molestiae
          perferendis! Porro odio exercitationem error suscipit laborum nihil
          nam odit.
        </p>
        <div className="coffee-img">
          <img src={coffee} alt="" />
        </div>
        <p className="service_p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi itaque
          officiis quisquam officia, dolorem necessitatibus perspiciatis iusto
          deserunt delectus cupiditate. Obcaecati odit doloribus molestias
          voluptates, perferendis sed non similique in.
        </p>
        <div className="lithium-img">
          <img src={lithium} alt="" />{" "}
        </div>
        <p className="service_p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi itaque
          officiis quisquam officia, dolorem necessitatibus perspiciatis iusto
          deserunt delectus cupiditate. Obcaecati odit doloribus molestias
          voluptates, perferendis sed non similique in.
        </p>
        <div className="pulse-img">
          <img src={pulse} alt="" />{" "}
        </div>
      </div>
    </motion.div>
  );
}
