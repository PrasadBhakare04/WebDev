import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    VStack,
    FormControl,
    FormLabel,
    Input,
    Button,
    useToast,
    Heading,
    Box,
} from '@chakra-ui/react';
import axios from 'axios';

const CreatePage = () => {
    const navigate = useNavigate();
    const toast = useToast();
    const [formData, setFormData] = useState({
        name: '',
        poster: '',
        director: '',
        cast: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const movieData = {
                ...formData,
                cast: formData.cast.split(',').map(actor => actor.trim()),
            };

            await axios.post('http://localhost:5000/api/movies', movieData);

            toast({
                title: 'Movie added successfully',
                status: 'success',
                duration: 3000,
            });

            navigate('/');
        } catch (error) {
            toast({
                title: 'Error adding movie',
                description: error.message,
                status: 'error',
                duration: 3000,
            });
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Container maxW="container.md" py={8}>
            <Box bg="gray.700" p={8} borderRadius="lg">
                <VStack spacing={6}>
                    <Heading>Add New Movie</Heading>
                    <FormControl>
                        <FormLabel>Movie Name</FormLabel>
                        <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter movie name"
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Poster URL</FormLabel>
                        <Input
                            name="poster"
                            value={formData.poster}
                            onChange={handleChange}
                            placeholder="Enter poster URL"
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Director</FormLabel>
                        <Input
                            name="director"
                            value={formData.director}
                            onChange={handleChange}
                            placeholder="Enter director name"
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Cast (comma-separated)</FormLabel>
                        <Input
                            name="cast"
                            value={formData.cast}
                            onChange={handleChange}
                            placeholder="Enter cast names separated by commas"
                        />
                    </FormControl>

                    <Button
                        colorScheme="blue"
                        width="full"
                        onClick={handleSubmit}
                    >
                        Add Movie
                    </Button>
                </VStack>
            </Box>
        </Container>
    );
};

export default CreatePage;