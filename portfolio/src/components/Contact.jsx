import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div>
          <ul className="list-disc list-inside">
            <li><strong>Email:</strong> <a href="mailto:mongarerobert3@gmail.com"><em>mongarerobert3@gmail.com</em></a></li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/robert-mong-are-553162210/"><em>https://www.linkedin.com/in/robert-mong-are-553162210/</em></a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/mongarerobert3"><em>https://github.com/mongarerobert3</em></a></li>
          </ul>
        </div>

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");