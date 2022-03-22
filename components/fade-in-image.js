/**
 * @file fade-in-image.js
 */

import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const animationVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export default function FadeInImage(props) {
  const [loaded, setLoaded] = useState(false);
  const animationControls = useAnimation();

  useEffect(() => {
    if (loaded) {
      animationControls.start("visible");
    }
  }, [loaded]);

  return (
    <motion.div
      initial={"hidden"}
      animate={animationControls}
      variants={animationVariants}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <Image
        src={props.src}
        layout={props.layout}
        height={props.height}
        width={props.width}
        alt={props.alt}
        onLoad={() => setLoaded(true)}
      />
    </motion.div>
  );
}
