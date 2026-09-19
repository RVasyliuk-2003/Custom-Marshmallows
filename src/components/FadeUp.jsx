import { motion } from "framer-motion";

export const FadeUp = ({
  children,
  duration = 0.6,
  delay = 0,
  yOffset = 0,
  xOffset = 0,
  className = "",
  as = "div",
  ...props
}) => {
  const Component = motion[as] || motion.div;

  return (
    <Component
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};
