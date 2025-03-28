"use client";
import { motion } from 'framer-motion';
import { Box, Flex, Link, IconButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      as="header"
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-4 shadow-lg fixed w-full z-10"
      zIndex={50}
      height="auto"
      alignItems="center"
    >
      <Flex
        mx="auto"
        px={6}
        m={1}
        justify="space-between"
        align="center"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            href="#home"
            className="text-2xl font-bold"
            bgGradient="linear(to-r, gray.500, green.500)"
            _hover={{ bgGradient: "linear(to-r, gray.600, green.600)" }}
            bgClip={["text"]}
          >
            Venkata Rohan
          </Link>
        </motion.div>

        {/* Best Project Link */}
        <motion.div
          initial={{ opacity: 0, x: -50, y: -50 }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              delay: 1,
              duration: 5,
              type: "spring",
              stiffness: 120,
              damping: 2,
              bounce: 0.5,
            },
          }}
        >
          <Link
            href="#bestproject"
            bgGradient="linear(to-r, blue.400, purple.500)"
            _hover={{ bgGradient: 'linear(to-r, purple.500, blue.400)', borderColor: 'purple.500' }}
            color="transparent"
            bgClip="text"
            fontSize="2xl"
            fontWeight="bold"
            transition="all 0.3s"
            border="2px"
            borderColor="blue.400"
            borderRadius="md"
            px={2}
            display={{ base: 'none', md: 'block' }} 
          >
            Best Project
          </Link>
        </motion.div>

        {/* Hamburger Icon for Mobile */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          aria-label="Toggle Navigation"
        />

        {/* Navigation Links */}
        <Flex
          as="nav"
          gap={8}
          align="center"
          justify="end"
          display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
          direction={{ base: 'column', md: 'row' }}
          width={{ base: 'full', md: 'auto' }}
          mt={{ base: 4, md: 0 }}
        >
          {['About', 'Projects', 'Skills', 'Coding Profile', 'Contact'].map((link, index) => (
            <motion.div
              key={link}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link
                href={`#${link.toLowerCase()}`}
                className="text-lg font-semibold text-gray-300 hover:text-purple-400 transition-colors duration-300"
                bgGradient="linear(to-r, pink.200, green.200)"
                _hover={{ bgGradient: "linear(to-r, pink.600, green.600)" }}
                bgClip={["text"]}
                px={2}
              >
                {link}
              </Link>
            </motion.div>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;