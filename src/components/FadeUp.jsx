import { motion } from "framer-motion";

export const FadeUp = ({
  children,
  duration = 0.6,
  delay = 0,
  yOffset = 40,
  className = "",
}) => {
  return (
    <motion.div

      // Початковий стан: елемент зміщений вниз і прозорий
      initial={{ opacity: 0, y: yOffset }}

      // Стан при потраплянні в зону видимості
      whileInView={{ opacity: 1, y: 0 }}

      // Анімація спрацьовує один раз і починає показуватися, коли елемент відкрито на 20%
      viewport={{ once: true, amount: 0.2 }}
      
      // Налаштування швидкості та плавності
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0], // Плавна крива без різких рухів
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
