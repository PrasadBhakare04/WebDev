import { useState, useEffect } from 'react';
import { Container, SimpleGrid, Spinner, Center, Text } from '@chakra-ui/react';
import MovieCard from '../components/MovieCard';
import axios from 'axios';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/movies');
                setMovies(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (loading) {
        return (
            <Center h="50vh">
                <Spinner size="xl" />
            </Center>
        );
    }

    if (error) {
        return (
            <Center h="50vh">
                <Text color="red.500">Error: {error}</Text>
            </Center>
        );
    }

    return (
        <Container maxW="container.xl" py={8}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {movies.map((movie) => (
                    <MovieCard key={movie._id} movie={movie} />
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default HomePage;