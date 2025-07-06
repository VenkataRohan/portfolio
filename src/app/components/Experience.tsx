"use client";
import { Box, Heading, Text, VStack, HStack, UnorderedList, ListItem } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    title: "Software Developer @ Equinix",
    duration: "June 2023 - Present",
    companyName: "Equinix",
    description: [
      "Built **HRGPT** - a **RAG (Retrieval-Augmented Generation)** system using **vector database** technology for intelligent HR assistance, achieving **95% user satisfaction** and reducing query response time by **85%**.",
      "Developed **vectorization pipeline** for ServiceNow knowledge articles and deployed **webhook** in **Azure Function App** using **Node.js** for real-time database updates, improving knowledge retrieval accuracy by **90%**.",
      "Established **CI/CD pipeline** using **GitHub Actions** for automated deployment and designed **ChatGPT-like interface** using **React.js** for HRGPT frontend, deployed **Node.js** server on **Azure App Service**.",
      "Engineered a **full-stack application** to streamline user reassignment process in **Coupa**, ensuring pending approvals from departed employees were automatically transferred to their respective managers using **React**, **Node.js** and **MySQL**, reducing reassignment time by **80%**.",
      "Streamlined work order approval process in **SAP FieldGlass** using **Node.js** integrated with **MS Teams**, allowing users to approve or reject directly from Teams, reducing manual effort by **75%**.",
      "Automated visualization of supplier information from **Coupa** to **Oracle Fusion** using **React** and **Node.js**, reducing manual checking time by **90%** and ensuring accurate data flow by tracking incidents in **ServiceNow**."
    ],
  },
  {
    title: "Software Developer Intern @ Equinix",
    duration: "February 2023 - June 2023",
    companyName: "Equinix",
    description: [
      "Developed a **DAG Visualizer** using **React Flow** to preview DAGs before deployment, generating interactive graphs for visualizing upstream and downstream task dependencies, reducing deployment errors by **30%**.",
      "Created a robust **Oracle Integration Cloud (OIC)** integration to eliminate discrepancies in ledger postings, fully automating the process to save **24 hours** of manual effort per month and minimizing risk of manual errors."
    ],
  },
  {
    title: "Software Developer Intern @ 5th Bridge Data Technologies LLP",
    duration: "July 2022 - August 2022",
    companyName: "5th Bridge Data Technologies LLP",
    description: [
      "Implemented **customizable Kendo grids** and **multi-step forms** in **React** for school supply list management.",
      "Built **APIs** to retrieve and update quote request data in the database."
    ],
  },
  {
    title: "Backend Developer Intern @ Content Erra",
    duration: "June 2021 - July 2021",
    companyName: "Content Erra",
    description: [
      "Designed an algorithm with **O(n) time complexity** to reduce manual effort by **50%**.",
      "Extracting and processing **disability benefits data** efficiently."
    ],
  },
];

// Define animations using `@emotion/react`
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const slideInFromLeft = keyframes`
  0% { opacity: 0; transform: translateX(-100%); }
  100% { opacity: 1; transform: translateX(0); }
`;

const Experience = () => {
  // Use Intersection Observer to detect when the section is in view
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

  return (
    <section id="experience">
      <Box
        id="experience"
        py={12}
        bg="gray.900"
        color="white"
        ref={sectionRef}
        position="relative"
        overflow="hidden"
      >
        <Box maxW="7xl" mx="auto" px={6} position="relative" zIndex={10}>
          {/* Section Title */}
          <Box
            textAlign="center"
            mb={12}
            animation={sectionInView ? `${slideInFromLeft} 1s ease-in-out` : "none"}
          >
            <Text
              display="inline-block"
              px={4}
              py={2}
              fontSize="sm"
              fontWeight="semibold"
              color="cyan.300"
              bg="cyan.900"
              rounded="full"
              textTransform="uppercase"
            >
              My Experience
            </Text>
          </Box>

          {/* Vertical Stepper */}
          <VStack spacing={0} align="start" position="relative">
            {steps.map((step, index) => {
              // Use Intersection Observer for each step
              const { ref: stepRef, inView: stepInView } = useInView({
                threshold: 0.2, // Trigger when 20% of the step is visible
              });

              return (
                <HStack
                  key={index}
                  ref={stepRef}
                  align="start"
                  spacing={4}
                  w="full"
                  opacity={stepInView ? 1 : 0} // Start invisible for fade-in animation
                  animation={
                    stepInView ? `${fadeIn} 0.8s ease-in-out ${index * 0.2}s forwards` : "none"
                  }
                >
                  {/* Step Indicator */}
                  <Box position="relative" zIndex={10}>
                    <Box
                      w={10}
                      h={10}
                      bg="cyan.500"
                      rounded="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      boxShadow="0 0 8px rgba(103, 232, 249, 0.6)"
                      _hover={{
                        transform: "scale(1.1)",
                        transition: "transform 0.3s ease-in-out",
                      }}
                    >
                      <Text color="white" fontWeight="bold" fontSize="sm">
                        {index + 1}
                      </Text>
                    </Box>
                    {/* Vertical Line */}
                    {index !== steps.length - 1 && (
                      <Box
                        position="absolute"
                        top="100%"
                        left="50%"
                        // h="calc(100%)" // Adjust based on spacing
                        w="5px"
                        bg="cyan.500"
                        opacity="0.4"
                        transform="translateX(-50%)"
                      />
                    )}
                  </Box>

                  {/* Step Content */}
                  <Box
                    w="full"
                    pb={8}
                  >
                    <Box
                      p={6}
                      bg="gray.800"
                      rounded="3xl"
                      shadow="lg"
                      borderWidth="2px"
                      borderColor="cyan.800"
                      transform="rotateY(0deg)" // Initial rotation
                      transition="transform 0.6s ease-in-out, box-shadow 0.3s ease-in-out"
                      _hover={{
                        transform: "rotateY(15deg) translateY(-6px)", // 3D tilt effect
                        boxShadow: "0 10px 20px rgba(103, 232, 249, 0.3)",
                      }}
                    >
                      <Heading as="h3" size="lg" color="cyan.300" mb={2}>
                        {step.title}
                      </Heading>
                      <Text fontSize="sm" fontWeight="semibold" color="cyan.100">
                        {step.duration}
                      </Text>
                      <Text fontSize="sm" fontWeight="semibold" color="cyan.100" mt={1}>
                        {step.companyName}
                      </Text>
                      <Text mt={4} color="gray.300">
                        <UnorderedList spacing={2}>
                          {step.description.map((point, pointIndex) => (
                            <ListItem key={pointIndex} color="gray.300">
                              {point.split('**').map((part, partIndex) => 
                                partIndex % 2 === 1 ? (
                                  <Text as="span" key={partIndex} fontWeight="bold" color="cyan.200">
                                    {part}
                                  </Text>
                                ) : (
                                  part
                                )
                              )}
                            </ListItem>
                          ))}
                        </UnorderedList>
                      </Text>
                    </Box>
                  </Box>
                </HStack>
              );
            })}
          </VStack>
        </Box>
      </Box>
    </section>
  );
};

export default Experience;