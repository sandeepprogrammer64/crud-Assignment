import React from 'react';
import { Box, Button, Flex, Heading, IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg={colorMode === 'light' ? 'gray.200' : 'gray.700'}
      color={colorMode === 'light' ? 'black' : 'white'}
    >
      <Flex align="center" mr={5} gap="500px">
        <Heading as="h3" size="lg" letterSpacing={'-.1rem'}>
          User Management Application
        </Heading>
        <Link to="/addData">
            <Button colorScheme='teal'>
          Add Data
        </Button>
        </Link>
      </Flex>

      <Box>
        <IconButton
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          aria-label="Toggle color mode"
          variant="ghost"
          size="sm"
        />
      </Box>
    </Flex>
  );
};

export default Navbar;
