import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Calendar, MapPin } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

// Define animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-gradient-to-b from-muted/20 to-muted/30">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-12 md:mb-16" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 text-foreground">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover my journey and passion for creating innovative web experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.p
              className="text-muted-foreground leading-relaxed text-base sm:text-lg"
              variants={itemVariants}
            >
              I'm a passionate Web Designer & Developer with a deep love for crafting innovative digital solutions. My journey in tech started with curiosity about how websites function and has grown into a comprehensive expertise in modern web development.
            </motion.p>

            <motion.p
              className="text-muted-foreground leading-relaxed text-base sm:text-lg"
              variants={itemVariants}
            >
              I believe in harnessing technology to solve real-world challenges and create meaningful, user-centric experiences.
            </motion.p>

            {/* Quick Facts */}
            <motion.div
              className="grid sm:grid-cols-2 gap-4 mt-8"
              variants={itemVariants}
            >
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-foreground">Education</h4>
                      <p className="text-sm text-muted-foreground">B.Tech CSE</p>
                      <p className="text-sm text-muted-foreground">Expected: 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-foreground">Location</h4>
                      <p className="text-sm text-muted-foreground">Mumbai, India</p>
                      <p className="text-sm text-muted-foreground">Open to relocate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div className="flex justify-center mt-6" variants={itemVariants}>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div className="relative mt-8 lg:mt-0" variants={itemVariants}>
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/10">
                <img
                  src="/avatar.png"
                  alt="About Fatema"
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full opacity-80"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-5 h-5 bg-secondary rounded-full opacity-60"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;