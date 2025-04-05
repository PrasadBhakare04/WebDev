import { Box, Image, Heading, Text, VStack, Badge, Wrap, WrapItem } from '@chakra-ui/react';

const MovieCard = ({ movie }) => {
    return (
        <Box
            bg="gray.700"
            borderRadius="lg"
            overflow="hidden"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.02)' }}
        >
            <Image
                src={movie.poster}
                alt={movie.name}
                height="400px"
                width="100%"
                objectFit="cover"
            />
            <Box p={4}>
                <VStack align="start" spacing={2}>
                    <Heading size="md">{movie.name}</Heading>
                    <Text color="gray.400">Director: {movie.director}</Text>
                    <Text color="gray.400">Cast:</Text>
                    <Wrap>
                        {movie.cast.map((actor, index) => (
                            <WrapItem key={index}>
                                <Badge colorScheme="blue">{actor}</Badge>
                            </WrapItem>
                        ))}
                    </Wrap>
                </VStack>
            </Box>
        </Box>
    );
};

export default MovieCard;