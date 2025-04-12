import { Box, Button, Container, Flex, Heading } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <Box bg="gray.800" py={4} mb={8}>
            <Container maxW="container.xl">
                <Flex justify="space-between" align="center">
                    <RouterLink to="/">
                        <Heading size="lg" color="white">Movie Showcase</Heading>
                    </RouterLink>
                    <RouterLink to="/create">
                        <Button colorScheme="blue">Add Movie</Button>
                    </RouterLink>
                </Flex>
            </Container>
        </Box>
    );
};

export default Navbar;

