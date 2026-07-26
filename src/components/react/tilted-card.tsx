import type { SpringOptions } from "motion";
import { motion, useMotionValue, useSpring } from "motion/react";
import { type ReactNode, useRef, useState } from "react";

interface TiltedCardProps {
  children: ReactNode;
  displayOverlayContent?: boolean;
  imageHeight?: React.CSSProperties["height"];
  imageWidth?: React.CSSProperties["width"];
  overlayContent?: React.ReactNode;
  rotateAmplitude?: number;
  scaleOnHover?: number;
}

const springValues: SpringOptions = {
  damping: 30,
  mass: 2,
  stiffness: 100,
};

export default function TiltedCard({
  children,
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  overlayContent = null,
  displayOverlayContent = false,
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    damping: 30,
    mass: 1,
    stiffness: 350,
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    // biome-ignore lint/a11y/noNoninteractiveElementInteractions: Needed for hover effect
    <figure
      className="perspective-midrange relative flex flex-col items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouse}
      ref={ref}
    >
      <motion.div
        className="transform-3d relative"
        style={{
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
          width: imageWidth,
        }}
      >
        <motion.div
          className="transform-[translateZ(0)] absolute top-0 left-0 rounded-[15px] object-cover will-change-transform"
          style={{
            height: imageHeight,
            width: imageWidth,
          }}
        >
          {children}
        </motion.div>

        {displayOverlayContent && overlayContent && (
          <motion.div className="transform-[translateZ(30px)] absolute top-0 left-0 z-2 will-change-transform">
            {overlayContent}
          </motion.div>
        )}
      </motion.div>
    </figure>
  );
}
