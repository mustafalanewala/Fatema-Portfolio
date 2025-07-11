import { motion, Variants } from 'framer-motion';

// Define animation variants
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-background/95 py-8 border-t border-primary/20">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <p className="text-center text-sm sm:text-base text-muted-foreground font-serif">
          © {currentYear} Fatema Patanwala. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;