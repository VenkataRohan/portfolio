"use client";
import { Box, Container, Tag ,Heading, Text, Link, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { useInView } from 'react-intersection-observer';
import { useState, useRef, useEffect } from 'react';
import { animate, useMotionValue, motion } from "framer-motion";
import useMeasure from "react-use-measure";
interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  bgColor: string;
  isOpenSource? : boolean;
  onClick: () => void;
}

// const projects = [
//   {
//     title: 'LightDash',
//     description: `Implemented frontend functionality for auto-triggering threshold configuration modals using threshold uuid. Reduced manual
//     configuration steps by 30%, improving setup time and enhancing the overall user experience for configuring alerts.`,
//     techStack: ['React', 'Node.js'],
//     githubLink: 'https://github.com/VenkataRohan/stock-exchange',
//     bgColor: 'linear(to-br, teal.400, blue.500)', // Gradient background
//   },
//   {
//     title: 'Cal.com',
//     description: `Enhanced user experience by adding functionality to preserve the order of questions asked during the booking process, ensuring
//     that confirmation emails are more intuitive and accurate.`,
//     techStack: ['Next.js'],
//     githubLink: 'https://github.com/lightdash/lightdash',
//     bgColor: 'linear(to-br, red.400, green.500)', // Gradient background
//   },
//   {
//     title: 'Rocket.Chat',
//     description: `Developed and raised a PR for the Notify on Reactions feature, enabling users to receive notifications for reactions added to their
//     messages. Improved user engagement by an estimated 20% in team interactions. Collaborated closely with project maintainers.`,
//     techStack: ['React', 'Meteor.js', 'TypeScript'],
//     githubLink: 'https://github.com/RocketChat/Rocket.Chat',
//     bgColor: 'linear(to-br, purple.400, gray.500)', // Gradient background
//   },
// ];

const projects = [
  {
    title: 'LightDash',
    description: `Implemented frontend functionality for auto-triggering threshold configuration modals using threshold uuid. Reduced manual
    configuration steps by 30%, improving setup time and enhancing the overall user experience for configuring alerts.`,
    techStack: ['React', 'Node.js'],
    githubLink: 'https://github.com/VenkataRohan/stock-exchange',
    bgColor: 'linear(to-br, teal.400, blue.500)', // Gradient background
    isOpenSource : true
  },
  {
    title: 'Cal.com',
    description: `Enhanced user experience by adding functionality to preserve the order of questions asked during the booking process, ensuring
    that confirmation emails are more intuitive and accurate.`,
    techStack: ['Next.js'],
    githubLink: 'https://github.com/lightdash/lightdash',
    bgColor: 'linear(to-br, pink.400, yellow.500)', // Gradient background
    isOpenSource : true
  },
  {
    title: 'Rocket.Chat',
    description: `Developed and raised a PR for the Notify on Reactions feature, enabling users to receive notifications for reactions added to their
    messages. Improved user engagement by an estimated 20% in team interactions. Collaborated closely with project maintainers.`,
    techStack: ['React', 'Meteor.js', 'TypeScript'],
    githubLink: 'https://github.com/RocketChat/Rocket.Chat',
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

// const ProjectCard: React.FC<ProjectCardProps> = ({
//   title,
//   description,
//   techStack,
//   githubLink,
//   bgColor,
//   onClick,
// }) => (
//   <Box
//     bgGradient={bgColor}
//     p="1.5rem"
//     borderRadius="1rem"
//     boxShadow="0 4px 15px rgba(0, 0, 0, 0.1)"
//     border="1px solid rgba(255, 255, 255, 0.2)"
//     transition="transform 0.3s ease, box-shadow 0.3s ease"
//     _hover={{
//       transform: 'scale(1.05)',
//       boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
//     }}
//     animation={`${floatAnimation} 4s ease-in-out infinite`}
//     onClick={onClick}
//     cursor="pointer"
//     flex="0 0 auto"
//     w={{ base: '280px', sm: '300px', md: '320px' }} // Fixed card width
//     minH="400px" // Minimum height to ensure consistency
//     mx={4}
//     display="flex"
//     flexDirection="column"
//     justifyContent="space-between" // Ensure content is spaced properly
//   >
//     <Box>
//       <Heading as="h3" size="lg" mb={3} color="white">
//         {title}
//       </Heading>
//       <Text mb={4} color="gray.200">
//         {description}
//       </Text>
//       <Text mb={4} color="gray.100">
//         Tech Stack: {techStack.join(', ')}
//       </Text>
//     </Box>
//     <Link
//       href={githubLink}
//       color="blue.100"
//       _hover={{ textDecoration: 'underline', color: 'blue.300' }}
//     >
//       View on GitHub
//     </Link>
//   </Box>
// );

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  githubLink,
  bgColor,
  onClick,
}) => (
  <Box
    bgGradient={bgColor}
    p="1.5rem"
    borderRadius="1rem"
    boxShadow="0 4px 15px rgba(0, 0, 0, 0.1)"
    border="1px solid rgba(255, 255, 255, 0.2)"
    transition="transform 0.3s ease, box-shadow 0.3s ease"
    _hover={{
      transform: 'scale(1.05)',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
    }}
    animation={`${floatAnimation} 4s ease-in-out infinite`}
    onClick={onClick}
    cursor="pointer"
    flex="0 0 auto"
    w={{ base: '280px', sm: '300px', md: '320px' }} // Fixed card width
    minH="400px" // Minimum height to ensure consistency
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
            <Tag key={index} colorScheme="teal.900" borderRadius="full" size="md" variant="solid">
              {tech}
            </Tag>
          ))}
        </Box>
      </Box>
    </Box>

    <Link
      href={githubLink}
      color="gray.800"
      _hover={{
        textDecoration: 'underline',
        color: 'blue.300',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)',
      }}
      display="flex"
      alignItems="center"
      mt="auto" // Push the link to the bottom
    >
      View on GitHub
    </Link>
  </Box>
);

const Project: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState<ProjectCardProps | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  // Handle project click to open modal
  const handleProjectClick = (project: ProjectCardProps) => {
    setSelectedProject(project);
    onOpen();
  };


  useEffect(() => {
    let controls : any;
    // let finalPosition = -1055 ;
    // controls = animate(xTranslation, [0, finalPosition], {
    //   ease: "linear", duration: 5,
    //   repeat: Infinity,
    //   repeatType: "loop",
    //   repeatDelay: 0,
    // })
    return () => controls?.stop();
  },[width])



  const handleHover = () => setIsPaused(true);
  const handleLeave = () => setIsPaused(false);


  return (
    <section id="projects">
      <Container
        maxW={"100%"}
        py={20}
        px={6}
        centerContent
        bgGradient="linear(to-r, #7928CA, #FF0080)"
        borderRadius="lg"
        boxShadow="0 4px 20px rgba(0, 0, 0, 0.2)"
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
        //   onMouseEnter={handleHover}
        //   onMouseLeave={handleLeave}
        >
           <motion.div
                  className='flex flex-row'
                  ref = {ref}
                  style = {{ x: xTranslation }}
                >
            {[...projects, ...projects, ...projects].map((project, index) => {
              const { ref: cardRef, inView: cardInView } = useInView({
                threshold: 0.2,
              });

              return (
                  <ProjectCard
                    key = {index}
                    title={project.title}
                    description={project.description}
                    techStack={project.techStack}
                    githubLink={project.githubLink}
                    bgColor={project.bgColor}
                    isOpenSource = {project.isOpenSource}
                    //@ts-ignore
                    onClick={() => handleProjectClick(project)}
                  />
              );
            })}
        </motion.div>
          </Box>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent bg="gray.800" color="white">
          <ModalHeader>{selectedProject?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={4}>{selectedProject?.description}</Text>
            <Text mb={4}>Tech Stack: {selectedProject?.techStack.join(', ')}</Text>
            <Link
              href={selectedProject?.githubLink}
              color="blue.100"
              _hover={{ textDecoration: 'underline', color: 'blue.300' }}
            >
              View on GitHub
            </Link>
          </ModalBody>
        </ModalContent>
      </Modal>
    </section>
  );
};

export default Project;



// "use client";
// import { Box, Container, Grid, Heading, Text, Link } from '@chakra-ui/react';
// import { keyframes } from '@emotion/react';
// import { useInView } from 'react-intersection-observer'; // Import the hook

// interface ProjectCardProps {
//   title: string;
//   description: string;
//   techStack: string[];
//   githubLink: string;
//   bgColor: string;
// }

// const projects = [
//   {
//     title: 'LightDash',
//     description: `Implemented frontend functionality for auto-triggering threshold configuration modals using threshold uuid. Reduced manual
//     configuration steps by 30%, improving setup time and enhancing the overall user experience for configuring alerts.`,
//     techStack: ['React', 'Node.js'],
//     githubLink: 'https://github.com/VenkataRohan/stock-exchange',
//     bgColor: 'linear(to-br, teal.400, blue.500)', // Gradient background
//   },
//   {
//     title: 'Cal.com',
//     description: `Enhanced user experience by adding functionality to preserve the order of questions asked during the booking process, ensuring
//     that confirmation emails are more intuitive and accurate.`,
//     techStack: ['Next.js'],
//     githubLink: 'https://github.com/lightdash/lightdash',
//     bgColor: 'linear(to-br, red.400, green.500)', // Gradient background
//   },
//   {
//     title: 'Rocket.Chat',
//     description: `Developed and raised a PR for the Notify on Reactions feature, enabling users to receive notifications for reactions added to their
//     messages. Improved user engagement by an estimated 20% in team interactions. Collaborated closely with project maintainers.`,
//     techStack: ['React', 'Meteor.js', 'TypeScript'],
//     githubLink: 'https://github.com/RocketChat/Rocket.Chat',
//     bgColor: 'linear(to-br, purple.400, gray.500)', // Gradient background
//   },
// ];

// // Define animations using `@emotion/react`
// const floatAnimation = keyframes`
//   0% { transform: translateY(0); }
//   50% { transform: translateY(-10px); }
//   100% { transform: translateY(0); }
// `;

// const slideInFromLeft = keyframes`
//   0% { transform: translateX(-100%); opacity: 0; }
//   100% { transform: translateX(0); opacity: 1; }
// `;

// const fadeIn = keyframes`
//   0% { opacity: 0; transform: translateY(20px); }
//   100% { opacity: 1; transform: translateY(0); }
// `;

// const ProjectCard: React.FC<ProjectCardProps> = ({
//   title,
//   description,
//   techStack,
//   githubLink,
//   bgColor,
// }) => (
//   <Box
//     bgGradient={bgColor}
//     p="1.5rem"
//     borderRadius="1rem"
//     boxShadow="0 4px 15px rgba(0, 0, 0, 0.1)"
//     border="1px solid rgba(255, 255, 255, 0.2)"
//     transition="transform 0.3s ease, box-shadow 0.3s ease"
//     _hover={{
//       transform: 'scale(1.05)',
//       boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
//     }}
//     animation={`${floatAnimation} 4s ease-in-out infinite`}
//   >
//     <Heading as="h3" size="lg" mb={3} color="white">
//       {title}
//     </Heading>
//     <Text mb={4} color="gray.200">
//       {description}
//     </Text>
//     <Text mb={4} color="gray.100">
//       Tech Stack: {techStack.join(', ')}
//     </Text>
//     <Link
//       href={githubLink}
//       color="blue.100"
//       _hover={{ textDecoration: 'underline', color: 'blue.300' }}
//     >
//       View on GitHub
//     </Link>
//   </Box>
// );

// const Project: React.FC = () => {
//   // Use Intersection Observer to detect when the section is in view
//   const { ref: sectionRef, inView: sectionInView } = useInView({
//     // triggerOnce: true, // Trigger animation only once
//     threshold: 0.2, // Trigger when 20% of the section is visible
//   });

//   return (
//     <section id="projects" ref={sectionRef}>
//       <Container
//         // maxW="6xl"
//         maxW={"100%"}
//         py={20}
//         px={6}
//         centerContent
//         bgGradient="linear(to-r, #7928CA, #FF0080)"
//         borderRadius="lg"
//         boxShadow="0 4px 20px rgba(0, 0, 0, 0.2)"
//       >
//         {/* Section Title */}
//         {/* <Heading
//           as="h2"
//           size="2xl"
//           fontWeight="semibold"
//           mb={10}
//           color="white"
//           textAlign="center"
//           opacity={sectionInView ? 1 : 0} // Start invisible for fade-in animation
//           animation={sectionInView ? `${slideInFromLeft} 1s ease-in-out` : "none"}
//         >
//            Open Source Contrubutions / Projects
//         </Heading> */}
//         <Box
//             textAlign="center"
//             mb={12}
//             animation={sectionInView ? `${slideInFromLeft} 1s ease-in-out` : "none"}
//           >
//             <Text
//               display="inline-block"
//               px={4}
//               py={2}
//               fontSize="lg"
//               fontWeight="semibold"
//               color="cyan.300"
//               bg="cyan.900"
//               rounded="full"
//               textTransform="uppercase"
//             >
//                Open Source Contrubutions / Projects
//             </Text>
//           </Box>
//         {/* Project Grid */}
//         <Grid
//           templateColumns={{ base: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }}
//           gap={10}
//           px={{ base: 4, sm: 10 }}
//         >
//           {projects.map((project, index) => {
//             // Use Intersection Observer for each project card
//             const { ref: cardRef, inView: cardInView } = useInView({
//               // triggerOnce: true, // Trigger animation only once
//               threshold: 0.2, // Trigger when 20% of the card is visible
//             });

//             return (
//               <Box
//                 key={index}
//                 ref={cardRef}
//                 borderRadius="1rem"
//                 overflow="hidden"
//                 border="1px solid rgba(255, 255, 255, 0.1)"
//                 _hover={{
//                   boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
//                   transform: 'scale(1.05)',
//                 }}
//                 opacity={cardInView ? 1 : 0} // Start invisible for fade-in animation
//                 animation={
//                   cardInView ? `${fadeIn} 0.8s ease-in-out ${index * 0.2}s forwards` : "none"
//                 }
//               >
//                 <ProjectCard
//                   title={project.title}
//                   description={project.description}
//                   techStack={project.techStack}
//                   githubLink={project.githubLink}
//                   bgColor={project.bgColor}
//                 />
//               </Box>
//             );
//           })}
//         </Grid>
//       </Container>
//     </section>
//   );
// };

// export default Project;

