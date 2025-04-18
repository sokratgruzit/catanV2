import { ReactElement, useState, useEffect } from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "../../../types/interfaces";
import { motion, useAnimation } from "framer-motion";

export function Button({
  color,
  onClick,
  title,
  customStyles,
  className,
  width = 202,
  height = 70,
}: ButtonProps): ReactElement {
  const [buttonDimensions, setButtonDimensions] = useState({ width, height });
  const [fontSize, setFontSize] = useState(16);

  const pathControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      let newFontSize = 16;
      if (windowWidth <= 390) {
        setButtonDimensions({ width: 130, height: 45.5 });
        newFontSize = 12;
      } else if (windowWidth <= 512) {
        setButtonDimensions({ width: 150, height: 50 });
        newFontSize = 14;
      } else {
        setButtonDimensions({ width: 202, height: 70 });
        newFontSize = 16;
      }

      newFontSize = Math.min(
        newFontSize,
        Math.floor(buttonDimensions.width / 10)
      );
      setFontSize(newFontSize);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`${styles.btn} ${className}`}
      onMouseOver={() => {
        pathControls.start({
          x: 6,
          y: 6,
          opacity: .8,
          transition: {
            ease: "easeInOut",
            duration: .3
          }
        });

        textControls.start({
          x: 0,
          y: 0,
          transition: {
            ease: "easeInOut",
            duration: .3
          }
        });
      }}
      onMouseOut={() => {
        pathControls.start({
          x: 0,
          y: 0,
          opacity: .6,
          transition: {
            ease: "easeInOut",
            duration: .3
          }
        });

        textControls.start({
          x: -6,
          y: -6,
          transition: {
            ease: "easeInOut",
            duration: .3
          }
        });
      }}
      onClick={() => {
        onClick?.();

        pathControls.start({
          x: [6, 10, 6],
          y: [6, 10, 6],
          opacity: [.8, 1, .8],
          transition: {
            ease: "easeInOut",
            duration: .3
          }
        });

        textControls.start({
          x: [0, 4, 0],
          y: [0, 4, 0],
          transition: {
            ease: "easeInOut",
            duration: .3
          }
        });
      }}
      style={{ 
        ...buttonDimensions, 
        ...customStyles
      }}
    >
      <svg
        className={styles.svgBackground}
        width={buttonDimensions.width}
        height={buttonDimensions.height}
        viewBox="0 0 252 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M98.2606 15.4389L98.3725 15.5H98.5H139.5H139.693L139.836 15.37L145.193 10.5H251.5V49.7929L231.793 69.5H10.5V12.5H92.8725L98.2606 15.4389Z"
          stroke={color}
        />
        <motion.path 
          d="M0 2H33L38.5 5H89.5L95 0H242V40L222 60H0V2Z" 
          fill={color} 
          initial={{ x: 0, y: 0, opacity: .6 }}
          animate={pathControls}
        />
      </svg>
      <motion.span initial={{ x: -6, y: -6 }} animate={textControls} style={{ fontSize: `${fontSize}px` }}>{title}</motion.span>
    </div>
  );
}
