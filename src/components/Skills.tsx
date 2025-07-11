import { motion, Variants } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaFigma
} from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase } from 'react-icons/si';

// Define skill icons mapping
const skillIcons: { [key: string]: JSX.Element } = {
  'HTML5': <FaHtml5 className="text-primary" size={20} />,
  'CSS3': <FaCss3Alt className="text-primary" size={20} />,
  'JavaScript': <FaJs className="text-primary" size={20} />,
  'React': <FaReact className="text-primary" size={20} />,
  'Tailwind CSS': <SiTailwindcss className="text-primary" size={20} />,
  'Node.js': <FaNodeJs className="text-primary" size={20} />,
  'Express.js': <SiExpress className="text-primary" size={20} />,
  'MongoDB': <SiMongodb className="text-primary" size={20} />,
  'Firebase': <SiFirebase className="text-primary" size={20} />,
  'Python': <FaPython className="text-primary" size={20} />,
  'Git': <FaGitAlt className="text-primary" size={20} />,
  'GitHub': <FaGithub className="text-primary" size={20} />,
  'Figma': <FaFigma className="text-primary" size={20} />,
};

// Define animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

const Skills = () => {
  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS',
    'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Python', 'REST APIs',
    'Git', 'GitHub', 'VS Code', 'Figma', 'Docker'
  ];

  return (
    <section id="skills" className="py-12 md:py-20 bg-gradient-to-b from-background to-background/95">
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 text-foreground">
            Skills & Technologies
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with to build modern web applications
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3 justify-center"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm sm:text-base font-medium text-foreground hover:bg-muted/80 hover:shadow-md transition-all duration-300"
              variants={itemVariants}
            >
              {skillIcons[skill]}
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;