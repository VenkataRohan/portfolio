"use client";
import { Box, Container, Tag, Heading, Text, Link, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { useInView } from 'react-intersection-observer';
import { useState, useRef, useEffect } from 'react';
import { animate, useMotionValue, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { log } from 'console';
interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  bgColor: string;
  isOpenSource?: boolean;
  onClick: () => void;
}

// {
//   title: 'LightDash',
//   description: `Implemented frontend functionality for auto-triggering threshold configuration modals using threshold uuid. Reduced manual
//   configuration steps by 30%, improving setup time and enhancing the overall user experience for configuring alerts.`,
//   techStack: ['React', 'Node.js'],
//   githubLink: 'https://github.com/VenkataRohan/stock-exchange',
//   bgColor: 'linear(to-br, teal.400, blue.500)', // Gradient background
//   isOpenSource : true
// },
// {
//   title: 'Cal.com',
//   description: `Enhanced user experience by adding functionality to preserve the order of questions asked during the booking process, ensuring
//   that confirmation emails are more intuitive and accurate.`,
//   techStack: ['Next.js'],
//   githubLink: 'https://github.com/lightdash/lightdash',
//   bgColor: 'linear(to-br, red.400, green.500)',
//   isOpenSource : true
// },
// {
//   title: 'Rocket.Chat',
//   description: `Developed and raised a PR for the Notify on Reactions feature, enabling users to receive notifications for reactions added to their
//   messages. Improved user engagement by an estimated 20% in team interactions. Collaborated closely with project maintainers.`,
//   techStack: ['React', 'Meteor.js', 'TypeScript'],
//   githubLink: 'https://github.com/RocketChat/Rocket.Chat',
//   bgColor: 'linear(to-br, purple.400, gray.500)', // Gradient background
//   isOpenSource : true
// },

// const projects = [
//   {
//     title: 'LightDash',
//     description: `Implemented frontend functionality for auto-triggering threshold configuration modals using threshold uuid. Reduced manual
//     configuration steps by 30%, improving setup time and enhancing the overall user experience for configuring alerts.`,
//     techStack: ['React', 'Node.js'],
//     githubLink: 'https://github.com/VenkataRohan/stock-exchange',
//     bgColor: 'linear(to-br, teal.400, blue.500)', // Gradient background
//     isOpenSource : true
//   },
//   {
//     title: 'Cal.com',
//     description: `Enhanced user experience by adding functionality to preserve the order of questions asked during the booking process, ensuring
//     that confirmation emails are more intuitive and accurate.`,
//     techStack: ['Next.js'],
//     githubLink: 'https://github.com/lightdash/lightdash',
//     bgColor: 'linear(to-br, red.400, green.500)',
//     isOpenSource : true
//   },
//   {
//     title: 'Rocket.Chat',
//     description: `Developed and raised a PR for the Notify on Reactions feature, enabling users to receive notifications for reactions added to their
//     messages. Improved user engagement by an estimated 20% in team interactions. Collaborated closely with project maintainers.`,
//     techStack: ['React', 'Meteor.js', 'TypeScript'],
//     githubLink: 'https://github.com/RocketChat/Rocket.Chat',
//     bgColor: 'linear(to-br, purple.400, gray.500)', // Gradient background
//     isOpenSource : true
//   },
//   {
//     title: 'Stock Exchange',
//     description: `Created a full-stack application that simulates Real time trading of stocks and containerized using Docker for efficient deployment.
//     processing, optimizing for high performance and fault tolerance and utilised Prisma ORM for database manipulation.Utilised Nginx for Load Balancing across websockets servers`,
//     techStack: ['React.js','Node.js','Typescript','RabbitMQ','PostgreSQL','Prisma','Docker','Nginx'],
//     githubLink: 'https://github.com/VenkataRohan/stock_exchange',
//     bgColor: 'linear(to-br, purple.400, gray.500)', // Gradient background
//   },
//   {
//     title: 'Social Media App',
//     description: `Developed a cross-platform mobile application allowing users to log in via email, send messages using Socket.io, and share live
//     locations through expo-location and react-native-maps enhancing user interaction and engagement.
//     Added features like image, video, and document sharing, voice messages, scheduled messaging, group creation.`,
//     techStack: ['React Native', 'Node.js', 'Socket.io', 'Firebase'],
//     githubLink: 'https://github.com/VenkataRohan/expo-client',
//     bgColor: 'linear(to-br, purple.400, gray.500)', // Gradient background
//   },
//   {
//     title: 'Parents Portal',
//     description: `Built a web application that displays marks secured by the student, his attendance, List of holidays of the current semester.
//     Added forgot password feature, OTP will be sent to registered email (Nodemailer). Allows parents to register a complaint.
//     Worked on staff login feature which enables staff members to edit the marks and attendance of the student.`,
//     techStack: ['Node.js', 'MySQl'],
//     githubLink: 'https://github.com/VenkataRohan/expo-client',
//     bgColor: 'linear(to-br, purple.400, gray.500)', // Gradient background
//   },
//   {
//     title: 'Interior Design',
//     description: `VR project - Reduced time and human efforts by 90% by creating a web application which allows users to design their room i.e move objects anywhere in the room using DragControls package and change the color of the objects and scale them to fit in the room using DatGUl package.`,
//     techStack: ['Three.js'],
//     githubLink: 'https://github.com/VenkataRohan/interior-design',
//     bgColor: 'linear(to-br, purple.400, gray.500)', // Gradient background
//   },
// ];

const projects = [
  {
    title: 'LightDash',
    description: `Implemented frontend functionality for auto-triggering threshold configuration modals using threshold uuid. Reduced manual
    configuration steps by 30%, improving setup time and enhancing the overall user experience for configuring alerts.`,
    techStack: ['React', 'Node.js'],
    githubLink: 'https://github.com/lightdash/lightdash/pull/12119',
    bgColor: 'linear(to-br, teal.400, blue.500)', // Gradient background
    isOpenSource : true
  },
  {
    title: 'Cal.com',
    description: `Enhanced user experience by adding functionality to preserve the order of questions asked during the booking process, ensuring
    that confirmation emails are more intuitive and accurate.`,
    techStack: ['Next.js'],
    githubLink: 'https://github.com/calcom/cal.com/pull/18192',
    bgColor: 'linear(to-br, pink.400, yellow.500)', // Gradient background
    isOpenSource : true
  },
  {
    title: 'Rocket.Chat',
    description: `Developed and raised a PR for the Notify on Reactions feature, enabling users to receive notifications for reactions added to their
    messages. Improved user engagement by an estimated 20% in team interactions. Collaborated closely with project maintainers.`,
    techStack: ['React', 'Meteor.js', 'TypeScript'],
    githubLink: 'https://github.com/RocketChat/Rocket.Chat/pull/32475',
    bgColor: 'linear(to-br, gray.400, orange.500)', // Gradient background
    isOpenSource : true
  },
  {
    title: 'Stock Exchange',
    description: `Created a full-stack application that simulates Real time trading of stocks and containerized using Docker for efficient deployment.
    processing, optimizing for high performance and fault tolerance and utilised Prisma ORM for database manipulation.Utilised Nginx for Load Balancing across websockets servers`,
    techStack: ['React.js','Node.js','Typescript','RabbitMQ','PostgreSQL','Prisma','Docker','Nginx'],
    githubLink: 'https://github.com/VenkataRohan/stock_exchange',
    bgColor: 'linear(to-br, teal.500, purple.700)', // Gradient background
  },
  {
    title: 'Social Media App',
    description: `Developed a cross-platform mobile application allowing users to log in via email, send messages using Socket.io, and share live
    locations through expo-location and react-native-maps enhancing user interaction and engagement.
    Added features like image, video, and document sharing, voice messages, scheduled messaging, group creation.`,
    techStack: ['React Native', 'Node.js', 'Socket.io', 'Firebase'],
    githubLink: 'https://github.com/VenkataRohan/expo-client',
    bgColor: 'linear(to-br, blue.400, pink.500)', // Gradient background
  },
  {
    title: 'Parents Portal',
    description: `Built a web application that displays marks secured by the student, his attendance, List of holidays of the current semester.
    Added forgot password feature, OTP will be sent to registered email (Nodemailer). Allows parents to register a complaint.
    Worked on staff login feature which enables staff members to edit the marks and attendance of the student.`,
    techStack: ['Node.js', 'MySQl'],
    githubLink: 'https://github.com/VenkataRohan/expo-client',
    bgColor: 'linear(to-br, green.400, yellow.500)', // Gradient background
  },
  {
    title: 'Interior Design',
    description: `VR project - Reduced time and human efforts by 90% by creating a web application which allows users to design their room i.e move objects anywhere in the room using DragControls package and change the color of the objects and scale them to fit in the room using DatGUl package.`,
    techStack: ['Three.js'],
    githubLink: 'https://github.com/VenkataRohan/interior-design',
    bgColor: 'linear(to-br, purple.800, gray.500)', // Gradient background
  },
];


const floatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;


const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  githubLink,
  bgColor,
  isOpenSource,
  onClick,
}) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    whileHover={{
      scale: 1.05, // Slight scaling effect
      boxShadow: '0 8px 20px red', 
      borderRadius : '2rem',
      background: 'linear-gradient(45deg, #6a1b9a, #d32f2f)', // Add your gradient here
      // padding: '20px', // Optional padding
    }}
    style={{
    }}
  >
    <Box
      bgGradient={bgColor}
      p="1.5rem"
      m={2}
      borderRadius="1rem"
      onClick={onClick}
      cursor="pointer"
      flex="0 0 auto"
      w={{ base: '280px', sm: '300px', md: '320px' }} // Fixed card width
      minH="500px" // Minimum height to ensure consistency
      // h={{ base: '800px', md: '400px' }} // Responsive height
      mx={4}
      display="flex"
      flexDirection="column"
      justifyContent="space-between" // Ensure content is spaced properly
    >

      <Box>
        <Heading as="h3" size="lg" mb={3} color="white" fontFamily="bold, sans-serif">
          {title}
        </Heading>
        <Text mb={4} color="gray.100" fontSize="md" lineHeight="1.5">
          {description}
        </Text>

        <Box mb={4}>
          <Text fontWeight="bold" color="gray.900" mb={2}>Tech Stack:</Text>
          <Box display="flex" flexWrap="wrap" gap={2}>
            {techStack.map((tech, index) => (
              <Tag key={index} 
              bgGradient="linear(to-r, teal.800, red.800)"
              borderRadius="full" size="md" variant="solid">
                {tech}
              </Tag>
            ))}
          </Box>
        </Box>
      </Box>
            {isOpenSource &&  
               <Heading
               as="h6"
               size="md"
               mt={4}
               color="transparent"
               fontFamily="bold, sans-serif"
               bgGradient="linear(to-br, pink.900, green.800)"
               backgroundClip="text"
             >
               Open Source Contribution
             </Heading>
             
            }

      <Link
        href={githubLink}
        color="gray.800"
        _hover={{
          textDecoration: 'underline',
          color: 'blue.700',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)',
        }}
        display="flex"
        alignItems="center"
        mt="auto" // Push the link to the bottom
        target='_blank'
      >
        View on GitHub
      </Link>
    </Box>
  </motion.div>
);

const Project: React.FC = () => {

  const SLOW_DURATION = 50;
  const FAST_DURATION = 10;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState<ProjectCardProps | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [rerender, setRerender] = useState<boolean>(false);
  const [mustFinish, setMustFinish] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(FAST_DURATION);
  // Handle project click to open modal
  const handleProjectClick = (project: ProjectCardProps) => {
    setSelectedProject(project);
    onOpen();
  };


  useEffect(() => {
    let controls: any;
    let finalPosition = -2462;

    if(mustFinish) {

        controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition), onComplete: () =>{
        setMustFinish(false);
        setRerender (!rerender);
        },
      });
    } else{
      
        controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear", 
        duration: duration, 
        repeat: Infinity, 
        repeatType: "loop", 
        repeatDelay: 0,
        })
      }

    return () => controls?.stop();
  }, [width, rerender, mustFinish, duration])


  return (
    <section id="projects" style={{ scrollMarginTop: "30px" }}>
      <Container
        maxW={"100%"}
        py={20}
        px={6}
        centerContent
        bgGradient="linear(to-r, #7928CA, #FF0080)"
        borderRadius="lg"
        boxShadow="0 4px 20px rgba(0, 0, 0, 0.2)"
        overflow={'visible'}
      >
        <motion.div
          initial={{ opacity: 0, y: -20, x: -100 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1 }}
        // viewport={{ once : true }}
        >
          <Box
            textAlign="center"
            mb={12}
          >
            <Text
              display="inline-block"
              px={4}
              py={2}
              fontSize="lg"
              fontWeight="semibold"
              color="cyan.300"
              bg="cyan.900"
              rounded="full"
              textTransform="uppercase"
            >
              Open Source Contributions / Projects
            </Text>
          </Box>
        </motion.div>
        <Box
          ref={containerRef}
          overflowX="scroll" // Enable manual scrolling
          w="100%"
          py={4}
          sx={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            scrollbarWidth: 'none',
            scrollBehavior: 'smooth', // Smooth scrolling
          }}
        >
          <motion.div
            className='flex flex-row'
            ref={ref}
            style={{ x: xTranslation }}
            initial="hidden"
            whileInView="visible"
            onHoverStart={() => {
              setMustFinish(true);
              setDuration(SLOW_DURATION);
            }}
            onHoverEnd={() => { 
              setMustFinish(true);
              setDuration(FAST_DURATION);
            }}
          >
            {[...projects, ...projects].map((project, index) => {

              return (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  githubLink={project.githubLink}
                  bgColor={project.bgColor}
                  isOpenSource={project.isOpenSource}
                  //@ts-ignore
                  onClick={() => handleProjectClick(project)}
                />
              );
            })}
          </motion.div>
        </Box>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" motionPreset="scale">
  <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(10px)" />
  <ModalContent
    bg="gray.800"
    color="white"
    borderRadius="lg"
    border="1px solid"
    borderColor="gray.700"
    boxShadow="xl"
  >
    <ModalHeader
      fontSize="2xl"
      fontWeight="bold"
      bgGradient="linear(to-r, blue.400, purple.400)"
      bgClip="text"
      pb={4}
    >
      {selectedProject?.title}
    </ModalHeader>
    <ModalCloseButton
      size="lg"
      color="gray.400"
      _hover={{ color: "white", bg: "gray.700" }}
    />
    <ModalBody>
      <Text mb={6} fontSize="lg" lineHeight="tall">
        {selectedProject?.description}
      </Text>
      <Box
        mb={6}
        p={4}
        bg="gray.700"
        borderRadius="md"
        borderLeft="4px solid"
        borderColor="blue.400"
      >
        <Text fontWeight="semibold" color="gray.200">
          Tech Stack:
        </Text>
        <Text color="gray.300">{selectedProject?.techStack.join(", ")}</Text>
      </Box>
      <Link
        href={selectedProject?.githubLink}
        color="blue.200"
        _hover={{
          textDecoration: "underline",
          color: "blue.400",
        }}
        display="inline-flex"
        alignItems="center"
        gap={2}
        target='_blank'
      >
        <Box as="span" fontSize="lg">
          👨‍💻
        </Box>
        View on GitHub
      </Link>
    </ModalBody>
  </ModalContent>
</Modal>
    </section>
  );
};

export default Project;




