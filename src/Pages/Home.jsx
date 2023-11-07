import React from "react";
import { motion } from "framer-motion";
import bg from "../assets/bg.jpg";

export default function Home() {
  return (
    <motion.div
      className="home"
      style={{ backgroundImage: `url(${bg})` }}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
      <div className="home-p">
        Text Placeholder
        <p>
          Garuman Trading PLC is founded in 2018 by four visionary interpreneur
          from different perspective background of business and economic.
          currently working in export/import, metallic minerals and pulse and
          oil seed.
        </p>
        <p>
          Garuman Trading PLC is founded in 2018 by four visionary interpreneur
          from different perspective background of business and economic
        </p>
      </div>
    </motion.div>
  );
}
