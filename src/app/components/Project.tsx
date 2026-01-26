"use client";
import { Box, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { SiReact, SiNodedotjs, SiNextdotjs, SiMeteor, SiTypescript, SiRabbitmq, SiPostgresql, SiPrisma, SiNginx, SiSocketdotio, SiFirebase, SiMysql, SiThreedotjs } from "react-icons/si";
import { FaDocker, FaGithub, FaCodeBranch } from "react-icons/fa6";
import { IconType } from "react-icons";
import { useInView } from 'react-intersection-observer';
import { useState, useRef, useEffect } from 'react';
import { animate, useMotionValue, motion } from "framer-motion";
import useMeasure from "react-use-measure";

interface TechItem {
  name: string;
  icon: IconType;
  color: string;
}

interface ProjectData {
  title: string;
  description: string;
  techStack: TechItem[];
  githubLink: string;
  isOpenSource?: boolean;
}

interface ProjectCardProps extends ProjectData {
  onClick: () => void;
}

const projects = [
  {
    title: 'LightDash',
    description: `Implemented frontend functionality for auto-triggering threshold configuration modals using threshold uuid. Reduced manual configuration steps by 30%, improving setup time and enhancing the overall user experience for configuring alerts.`,
    techStack: [
      { name: 'React', icon: SiReact, color: 'text-cyan-400' },
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' }
    ],
    githubLink: 'https://github.com/lightdash/lightdash/pull/12119',
    isOpenSource: true
  },
  {
    title: 'Cal.com',
    description: `Enhanced user experience by adding functionality to preserve the order of questions asked during the booking process, ensuring that confirmation emails are more intuitive and accurate.`,
    techStack: [
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' }
    ],
    githubLink: 'https://github.com/calcom/cal.com/pull/18192',
    isOpenSource: true
  },
  {
    title: 'Rocket.Chat',
    description: `Notify on Reactions feature: Enabled users to receive notifications for reactions. Improved user engagement by ~20% in team interactions. Collaborated closely with project maintainers.`,
    techStack: [
      { name: 'React', icon: SiReact, color: 'text-blue-400' },
      { name: 'Meteor.js', icon: SiMeteor, color: 'text-orange-500' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' }
    ],
    githubLink: 'https://github.com/RocketChat/Rocket.Chat/pull/32475',
    isOpenSource: true
  },
  {
    title: 'Stock Exchange',
    description: `Real-time stock trading simulation. Microservices architecture, Dockerized, high-performance fault tolerance. Nginx load balancing for websockets.`,
    techStack: [
      { name: 'React', icon: SiReact, color: 'text-cyan-400' },
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
      { name: 'RabbitMQ', icon: SiRabbitmq, color: 'text-orange-600' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
      { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
      { name: 'Nginx', icon: SiNginx, color: 'text-green-600' }
    ],
    githubLink: 'https://github.com/VenkataRohan/stock_exchange',
  },
  {
    title: 'Social Media App',
    description: `Cross-platform mobile app. Login via email, real-time messaging (Socket.io), live location sharing. Media sharing, scheduled messaging, groups.`,
    techStack: [
      { name: 'React Native', icon: SiReact, color: 'text-cyan-400' },
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
      { name: 'Socket.io', icon: SiSocketdotio, color: 'text-white' },
      { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' }
    ],
    githubLink: 'https://github.com/VenkataRohan/expo-client',
  },
  {
    title: 'Parents Portal',
    description: `Student tracking portal: Marks, attendance, holidays. Forgot password (OTP). Parent complaints system. Staff login for data management.`,
    techStack: [
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' }
    ],
    githubLink: 'https://github.com/VenkataRohan/expo-client',
  },
  {
    title: 'Interior Design VR',
    description: `Web VR app for room design. reduced effort by 90%. Drag & drop objects, color changing, scaling using Three.js controls.`,
    techStack: [
      { name: 'Three.js', icon: SiThreedotjs, color: 'text-white' }
    ],
    githubLink: 'https://github.com/VenkataRohan/interior-design',
  },
];

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  githubLink,
  isOpenSource,
  onClick,
}) => (
  <div
    className="relative group mx-4 flex flex-col justify-between w-[85vw] md:w-[400px] min-h-[400px] p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-cyan-900/20 shrink-0"
    onClick={onClick}
  >
    {/* Gradient Glow Effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

    <div className="flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight">
          {title}
        </h3>
        {isOpenSource && (
          <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-green-400 bg-green-900/30 border border-green-800 rounded-full shrink-0 ml-2">
            Open Source
          </span>
        )}
      </div>

      <p className="text-gray-400 text-lg leading-relaxed mb-6 line-clamp-none flex-grow">
        {description}
      </p>

      {/* Tech Icons */}
      <div className="flex flex-wrap gap-3 mb-6 mt-auto">
        {techStack.slice(0, 5).map((tech, index) => (
          <div key={index} className="relative group/icon">
            <tech.icon className={`text-2xl ${tech.color} hover:scale-110 transition-transform bg-gray-800 p-1.5 rounded-lg box-content`} />
          </div>
        ))}
        {techStack.length > 5 && (
          <span className="text-gray-500 text-xs self-center">+{techStack.length - 5} more</span>
        )}
      </div>
    </div>

    {/* Bottom Link */}
    <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
      <span className="text-sm text-cyan-500 font-medium group-hover:underline flex items-center gap-2">
        View Details <span className="text-xs">→</span>
      </span>
      <FaGithub className="text-gray-500 group-hover:text-white transition-colors" />
    </div>
  </div>
);

const Project: React.FC = () => {
  const SLOW_DURATION = 95;
  const FAST_DURATION = 15;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [rerender, setRerender] = useState<boolean>(false);
  const [mustFinish, setMustFinish] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(FAST_DURATION);

  const handleProjectClick = (project: ProjectData) => {
    setSelectedProject(project);
    onOpen();
  };

  useEffect(() => {
    let controls: any;
    let finalPosition = -width / 2 - 8; // Adjust based on width of items

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        }
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return () => controls?.stop();
  }, [xTranslation, width, duration, rerender, mustFinish]);


  return (
    <section id="projects" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center"
        >
          <Box className="inline-block px-4 py-1.5 mb-4 border border-cyan-500/30 rounded-full bg-cyan-950/30">
            <p className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent uppercase tracking-wider flex items-center gap-2">
              <FaCodeBranch className="text-cyan-400" />
              Open Source & Projects
            </p>
          </Box>
          {/* <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Featured Work
          </h2> */}
          <p className="text-slate-400 max-w-2xl mx-auto text-center">
            A collection of my contributions to major open-source projects and personal technical experiments.
          </p>
        </motion.div>
      </div>

      <div className="w-full overflow-hidden py-12 mask-fade-sides">
        <motion.div
          className="flex"
          ref={ref}
          style={{ x: xTranslation }}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
          {[...projects, ...projects].map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </motion.div>
      </div>

      {/* Styled Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered motionPreset='slideInBottom'>
        <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(8px)" />
        <ModalContent className="!bg-gray-900 !border !border-gray-700 !rounded-2xl !text-white !p-0 overflow-hidden shadow-2xl shadow-cyan-900/20">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 border-b border-gray-800 flex justify-between items-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {selectedProject?.title}
            </h2>
            <ModalCloseButton className="!static !text-gray-400 hover:!text-white hover:!bg-gray-700 !rounded-full p-2" />
          </div>

          <ModalBody className="!p-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {selectedProject?.description}
            </p>

            <div className="mb-8">
              <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.techStack.map((tech, index) => (
                  <div key={index} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800 border border-gray-700 text-gray-300 text-sm">
                    <tech.icon className={tech.color} />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={selectedProject?.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-200 transform hover:-translate-y-1 shadow-lg shadow-blue-900/30"
            >
              <FaGithub className="mr-2 text-xl" />
              View Source Code on GitHub
            </a>
          </ModalBody>
        </ModalContent>
      </Modal>

      <style jsx global>{`
        .mask-fade-sides {
           mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
           -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
};

export default Project;




