"use client";
import {
    Box,
    Flex,
    Heading,
    Text,
    Image,
    Tag,
    TagLabel,
    useColorModeValue,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Button,
    Link,
} from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

// Dynamic data for the project
const projectData = {
    title: "Stock Exchange",
    description: [
        `The Stock Exchange project was built using a **microservices architecture** to handle real-time trading of stocks. When a user places an order, the frontend sends a request to the API server, which publishes the order to a **RabbitMQ broker**. This ensures that the order is stored until the order book engine picks it up for processing. RabbitMQ provided high performance and fault tolerance by decoupling the services and ensuring reliable message delivery through features like message acknowledgments and durable queues. For real-time updates, we used a **WebSocket-based pub-sub model** to scale the system and handle multiple clients efficiently. 
        This model reduced WebSocket connection overhead and ensured low latency for real-time updates, making it highly scalable and reliable.Used Docker for efficient deployment, utilised **Prisma ORM** for database manipulation, **Nginx** for Load Balancing across websockets servers`,
        "With a strong foundation in **microservices architecture**, **real-time systems**, and **cloud technologies**, I've successfully delivered projects that improve efficiency and user engagement.",
    ],
    images: [
        {
            src: "/SE_Demo.gif",
            alt: "Stock Exchange Demo",
            width: 600,
            height: 400,
            title: "Real-Time Trading Demo",
        },
        {
            src: "/architecture.png",
            alt: "Architecture Diagram",
            width: 600,
            height: 400,
            title: "System Architecture",
        },
    ],
    technologies: [
        "React.js",
        "Node.js",
        "TypeScript",
        "Tailwind CSS",
        "RabbitMQ",
        "WebSocket",
        "PostgreSQL",
        "Prisma",
        "Docker", 
        "Nginx"
    ],
    githubLink: "https://github.com/VenkataRohan/stock_exchange", // GitHub link
};

// Animation Variants for Technologies
const techVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1, // Staggered delay for each tag
            duration: 0.5,
            ease: "easeOut",
        },
    }),
    hover: {
        scale: 1.2,
        rotateY: 15,
        transition: { duration: 0.3 },
    },
};

const BestProject = () => {
    const textColor = useColorModeValue("gray.50", "gray.300");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedImage, setSelectedImage] = useState("");

    // Handle image click
    const handleImageClick = (src: string) => {
        setSelectedImage(src);
        onOpen();
    };

    return (
        <section id="bestproject" style={{ scrollMarginTop: "60px" }}> {/* Add scroll offset here */}
            <Box
                bg="radial-gradient(circle, #1a202c, #2d3748, #4a5568)"
                py={6}
            >
                <Box maxW="7xl" mx="auto" px={6}>
                    {/* Section Title */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ amount: 0.1 }} // Trigger when 50% of the element is in view
                    >
                        <Heading
                            as="h2"
                            fontSize={{ base: "3xl", md: "4xl" }}
                            fontWeight="bold"
                            textAlign="center"
                            mb={4}
                            color="blue.800"
                            bg="cyan.400"
                            rounded="full"
                        >
                            {projectData.title}
                        </Heading>
                    </motion.div>

                    {/* Content */}
                    <Flex direction={{ base: "column", md: "row" }} align="center" gap={14}>
                        {/* Images */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ amount: 0.1 }} 
                            style={{ width: "100%", maxWidth: "600px" }}
                        >
                            <Flex direction="column-reverse" gap={8}>
                                {projectData.images.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                        onClick={() => handleImageClick(image.src)}
                                        style={{ cursor: "pointer", position: "relative" }}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={image.width}
                                            height={image.height}
                                            borderRadius="xl"
                                            boxShadow="lg"
                                        />
                                        <Heading
                                            position="absolute"
                                            bottom="0"
                                            left="0"
                                            right="0"
                                            p={4}
                                            fontSize="xl"
                                            color="white"
                                            bg="rgba(0, 0, 0, 0.5)"
                                            textAlign="start"
                                            borderRadius="0 0 10px 10px"
                                        >
                                            {image.title}
                                        </Heading>
                                    </motion.div>
                                ))}
                            </Flex>
                        </motion.div>

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ amount: 0.2 }} // Trigger when 50% of the element is in view
                            style={{ width: "100%", maxWidth: "600px" }}
                        >
                            <Flex direction="column" gap={6}>
                                {projectData.description.map((paragraph, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        viewport={{ amount: 0.2 }} // Trigger when 50% of the element is in view
                                    >
                                        <Text
                                            fontSize="lg"
                                            color={textColor}
                                            lineHeight="tall"
                                            dangerouslySetInnerHTML={{
                                                __html: paragraph.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                                            }}
                                        />
                                    </motion.div>
                                ))}

                                {/* Technologies Used */}
                                <Box mt={8}>
                                    <Heading as="h3" fontSize="xl" fontWeight="semibold" color="gray.50" mb={4}>
                                        Technologies Used
                                    </Heading>
                                    <Flex wrap="wrap" gap={3}>
                                        {projectData.technologies.map((tech, index) => (
                                            <motion.div
                                                key={index}
                                                variants={techVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                whileHover="hover"
                                                custom={index} // Pass index for staggered delay
                                                viewport={{ amount: 0.2 }} // Trigger when 50% of the element is in view
                                                style={{ display: "inline-block" }}
                                            >
                                                <Tag
                                                    size="md"
                                                    borderRadius="full"
                                                    boxShadow="md"
                                                    bgGradient="linear(to-r, purple.500, green.500)" // Gradient background
                                                    color="white" // White text for contrast
                                                >
                                                    <TagLabel fontSize="sm" fontWeight="medium">
                                                        {tech}
                                                    </TagLabel>
                                                </Tag>
                                            </motion.div>
                                        ))}
                                    </Flex>
                                </Box>

                                {/* GitHub Link */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ amount: 0.2 }} // Trigger when 50% of the element is in view
                                >
                                    <Link
                                        href={projectData.githubLink}
                                        isExternal
                                        _hover={{ textDecoration: "none" }}
                                    >
                                        <Button
                                            colorScheme="purple"
                                            variant="solid"
                                            size="lg"
                                            bgGradient="linear(to-r, purple.500, blue.500)"
                                            _hover={{ bgGradient: "linear(to-r, purple.600, blue.600)" }}
                                        >
                                            View on GitHub
                                        </Button>
                                    </Link>
                                </motion.div>
                            </Flex>
                        </motion.div>
                    </Flex>
                </Box>

                {/* Modal for Enlarged Image */}
                <Modal isOpen={isOpen} onClose={onClose} size="6xl">
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton bg="red.500" color="white" />

                        <ModalBody p={0}>
                            <Image
                                src={selectedImage}
                                alt="Enlarged Image"
                                width="100%"
                                height="auto"
                                borderRadius="md"
                            />
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Box>
        </section>
    );
};

export default BestProject;