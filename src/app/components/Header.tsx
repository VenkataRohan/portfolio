"use client";
import { motion } from 'framer-motion';
import { Box, Flex, Link, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box
      as="header"
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-4 shadow-lg fixed w-full z-50"
    >
      <Flex
        maxW="6xl"
        mx="auto"
        px={6}
        m={5}
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
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 hover:from-purple-500 hover:to-indigo-500 transition-all duration-300"
          >
            Venkata Rohan
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <Flex as="nav" gap={8} align="center">
          {['About', 'Projects', 'Skills', 'Achievements', 'Contact'].map((link, index) => (
            <motion.div
              key={link}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
             
            >
              <Link
                href={`#${link.toLowerCase()}`}
                className="text-lg font-semibold text-gray-300 hover:text-purple-400 transition-colors duration-300"
                px = {10}
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