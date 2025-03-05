"use client";
import { Box, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    title: "Software Developer - Equinix",
    duration: "June 2023 - Present",
    companyName: "Equinix",
    description:
      "Simplified the Requisition creation process using React, TypeScript, and Tailwind CSS, reducing form submission errors by 20% and increasing process efficiency by 25%. Built 10 Node.js scripts to automate data reconciliation during Oracle R12 to Oracle Fusion migration. Developed a DAG Visualizer using React Flow to reduce deployment errors by 30%.",
  },
  {
    title: "Software Developer Intern - Equinix",
    duration: "February 2023 - June 2023",
    companyName: "Equinix",
    description:
      "Created an Oracle Integration Cloud (OIC) integration to automate ledger postings, saving 24 hours of manual effort per month. Developed a DAG Visualizer using React Flow to visualize task dependencies and reduce deployment errors.",
  },
  {
    title: "Software Developer Intern - 5th Bridge Data Technologies LLP",
    duration: "July 2022 - August 2022",
    companyName: "5th Bridge Data Technologies LLP",
    description:
      "Implemented customisable Kendo grids and multi-step forms in React for school supply list management. Built APIs to retrieve and update quote request data in the database.",
  },
  {
    title: "Backend Developer Intern - Content Erra",
    duration: "June 2021 - July 2021",
    companyName: "Content Erra",
    description:
      "Designed an algorithm with O(n) time complexity to reduce manual effort by 50%, extracting and processing disability benefits data efficiently.",
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
                        h="calc(100% + 190px)" // Adjust based on spacing
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
                        {step.description}
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