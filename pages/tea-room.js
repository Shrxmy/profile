import React, { useState } from 'react';
import NextLink from 'next/link';
import {
    Container, Box, Text, Heading, Button, SimpleGrid,
    VStack, HStack, useColorModeValue, Badge, Divider,
    List, ListItem, ListIcon
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article';

// Framer Motion Box
const MotionBox = motion(Box);

const INGREDIENTS = [
    { id: 'water', label: '💧 Hot Water', color: 'blue.400' },
    { id: 'ice', label: '🧊 Ice Cubes', color: 'cyan.200' },
    { id: 'matcha', label: '🍵 Matcha Powder', color: 'green.400' },
    { id: 'earl_grey', label: '🍂 Earl Grey Leaves', color: 'orange.500' },
    { id: 'milk', label: '🥛 Steamed Milk', color: 'gray.100' },
    { id: 'honey', label: '🍯 Honey', color: 'yellow.400' },
    { id: 'lemon', label: '🍋 Lemon Slice', color: 'yellow.300' },
    { id: 'strawberry', label: '🍓 Strawberry Syrup', color: 'red.400' },
    { id: 'tapioca', label: '🧋 Tapioca Pearls', color: 'blackAlpha.800' }
];

const RECIPES = [
    {
        id: 'matcha_tea',
        name: 'Classic Matcha',
        ingredients: ['water', 'matcha'],
        themeLight: 'green.50',
        themeDark: 'rgba(34, 84, 61, 0.4)',
        content: (
            <VStack align="start" spacing={4}>
                <Text fontSize="lg" fontWeight="bold" color="green.500">
                    A calm, focused brew. Perfect for frontend development.
                </Text>
                <Text>
                    Matcha requires patience and precision, much like crafting pixel-perfect UI with React and Framer Motion.
                </Text>
                <Box>
                    <Badge colorScheme="green" mb={2}>Now Playing</Badge>
                    <List spacing={2}>
                        <ListItem><ListIcon as={CheckCircleIcon} color="green.500" /> LOOΠΔ - Star</ListItem>
                        <ListItem><ListIcon as={CheckCircleIcon} color="green.500" /> LOOΠΔ - Butterfly</ListItem>
                    </List>
                </Box>
            </VStack>
        )
    },
    {
        id: 'london_fog',
        name: 'London Fog',
        ingredients: ['water', 'earl_grey', 'milk'],
        themeLight: 'purple.50',
        themeDark: 'rgba(68, 51, 122, 0.4)',
        content: (
            <VStack align="start" spacing={4}>
                <Text fontSize="lg" fontWeight="bold" color="purple.500">
                    A smooth, complex blend. Great for game design.
                </Text>
                <Text>
                    The combination of citrusy bergamot and creamy milk mirrors the balance needed when developing game logic and architecture.
                </Text>
                <Box>
                    <Badge colorScheme="purple" mb={2}>Now Playing</Badge>
                    <List spacing={2}>
                        <ListItem><ListIcon as={CheckCircleIcon} color="purple.500" /> SEVENTEEN - VERY NICE</ListItem>
                        <ListItem><ListIcon as={CheckCircleIcon} color="purple.500" /> SEVENTEEN - HOT</ListItem>
                    </List>
                </Box>
            </VStack>
        )
    },
    {
        id: 'earl_grey_honey',
        name: 'Sweet Earl Grey',
        ingredients: ['water', 'earl_grey', 'honey'],
        themeLight: 'orange.50',
        themeDark: 'rgba(192, 86, 33, 0.3)',
        content: (
            <VStack align="start" spacing={4}>
                <Text fontSize="lg" fontWeight="bold" color="orange.500">
                    Warm and sweet. The backend server is running smoothly!
                </Text>
                <Text>
                    A reliable, sturdy tea enhanced with a touch of sweetness. Reminds me of connecting a robust database to a secure API.
                </Text>
            </VStack>
        )
    },
    {
        id: 'strawberry_matcha',
        name: 'Strawberry Matcha Latte',
        ingredients: ['water', 'matcha', 'milk', 'strawberry', 'ice'],
        themeLight: 'red.50',
        themeDark: 'rgba(155, 44, 44, 0.3)',
        content: (
            <VStack align="start" spacing={4}>
                <Text fontSize="lg" fontWeight="bold" color="red.500">
                    A colorful, energetic full-stack brew!
                </Text>
                <Text>
                    Layers of strawberry, milk, and matcha over ice. It&apos;s complex, sweet, and packs a punch—just like a fully integrated modern web app.
                </Text>
                <Box>
                    <Badge colorScheme="red" mb={2}>Now Playing</Badge>
                    <List spacing={2}>
                        <ListItem><ListIcon as={CheckCircleIcon} color="red.500" /> LOOΠΔ - Hi High</ListItem>
                        <ListItem><ListIcon as={CheckCircleIcon} color="red.500" /> SEVENTEEN - Left & Right</ListItem>
                    </List>
                </Box>
            </VStack>
        )
    },
    {
        id: 'bubble_tea',
        name: 'Classic Boba Tea',
        ingredients: ['water', 'earl_grey', 'milk', 'tapioca', 'ice'],
        themeLight: 'orange.100',
        themeDark: 'rgba(123, 52, 30, 0.4)',
        content: (
            <VStack align="start" spacing={4}>
                <Text fontSize="lg" fontWeight="bold" color="orange.600">
                    Chewy, sweet, and heavily engaging.
                </Text>
                <Text>
                    The tapioca pearls add a satisfying game loop to your drinking experience. 10/10 would replay.
                </Text>
            </VStack>
        )
    },
    {
        id: 'honey_lemon',
        name: 'Honey Lemon Soother',
        ingredients: ['water', 'honey', 'lemon'],
        themeLight: 'yellow.50',
        themeDark: 'rgba(116, 96, 21, 0.4)',
        content: (
            <VStack align="start" spacing={4}>
                <Text fontSize="lg" fontWeight="bold" color="yellow.500">
                    For those long nights of squashing bugs.
                </Text>
                <Text>
                    A soothing, reliable fix for a sore throat or a tangled Git merge conflict. Refreshing and bright!
                </Text>
            </VStack>
        )
    },
    {
        id: 'strawberry_milk',
        name: 'Strawberry Milk',
        ingredients: ['milk', 'strawberry', 'ice'],
        themeLight: 'pink.50',
        themeDark: 'rgba(155, 44, 116, 0.3)',
        content: (
            <VStack align="start" spacing={4}>
                <Text fontSize="lg" fontWeight="bold" color="pink.500">
                    Sweet, simple, and nostalgic UI design.
                </Text>
                <Text>
                    Sometimes the best websites are the simplest ones. This sweet pastel drink is the equivalent of a clean, minimalist landing page.
                </Text>
                <Box>
                    <Badge colorScheme="pink" mb={2}>Now Playing</Badge>
                    <List spacing={2}>
                        <ListItem><ListIcon as={CheckCircleIcon} color="pink.500" /> LOOΠΔ / ODD EYE CIRCLE - Girl Front</ListItem>
                        <ListItem><ListIcon as={CheckCircleIcon} color="pink.500" /> SEVENTEEN - Darl+ing</ListItem>
                    </List>
                </Box>
            </VStack>
        )
    },
    {
        id: 'lemonade',
        name: 'Fresh Lemonade',
        ingredients: ['water', 'lemon', 'ice'],
        themeLight: 'yellow.100',
        themeDark: 'rgba(145, 126, 32, 0.4)',
        content: (
            <VStack align="start" spacing={4}>
                <Text fontSize="lg" fontWeight="bold" color="yellow.600">
                    A sharp, cynical refactor.
                </Text>
                <Text>
                    When life gives you spaghetti code, you delete it and write clean, sour... I mean, simple logic instead.
                </Text>
            </VStack>
        )
    },
    {
        id: 'arnold_palmer',
        name: 'Arnold Palmer',
        ingredients: ['water', 'earl_grey', 'lemon', 'ice'],
        themeLight: 'orange.50',
        themeDark: 'rgba(125, 68, 25, 0.4)',
        content: (
            <VStack align="start" spacing={4}>
                <Text fontSize="lg" fontWeight="bold" color="orange.600">
                    The classic hybrid application.
                </Text>
                <Text>
                    Half iced tea, half lemonade. Reminds me of writing a React Native app: part web, part native, entirely refreshing.
                </Text>
            </VStack>
        )
    },
    {
        id: 'matcha_boba',
        name: 'Matcha Boba Tea',
        ingredients: ['water', 'matcha', 'milk', 'tapioca', 'ice'],
        themeLight: 'green.100',
        themeDark: 'rgba(44, 95, 61, 0.4)',
        content: (
            <VStack align="start" spacing={4}>
                <Text fontSize="lg" fontWeight="bold" color="green.600">
                    The ultimate late-night deployment fuel.
                </Text>
                <Text>
                    Caffeine to keep you awake, sugar to keep you coding, and boba to keep your jaw busy while you wait for the pipeline to finish.
                </Text>
            </VStack>
        )
    },
    {
        id: 'strawberry_lemonade',
        name: 'Strawberry Lemonade',
        ingredients: ['water', 'strawberry', 'lemon', 'ice'],
        themeLight: 'red.50',
        themeDark: 'rgba(165, 34, 44, 0.3)',
        content: (
            <VStack align="start" spacing={4}>
                <Text fontSize="lg" fontWeight="bold" color="red.500">
                    Vibrant, punchy CSS animations.
                </Text>
                <Text>
                    Sweet, sour, and visually stunning. This drink is the beverage equivalent of a perfectly timed keyframe animation.
                </Text>
                <Box>
                    <Badge colorScheme="red" mb={2}>Now Playing</Badge>
                    <List spacing={2}>
                        <ListItem><ListIcon as={CheckCircleIcon} color="red.500" /> SEVENTEEN - _WORLD</ListItem>
                        <ListItem><ListIcon as={CheckCircleIcon} color="red.500" /> LOOΠΔ / yyxy - love4eva</ListItem>
                    </List>
                </Box>
            </VStack>
        )
    },
    {
        id: 'hot_milk_honey',
        name: 'Warm Milk & Honey',
        ingredients: ['milk', 'honey'],
        themeLight: 'yellow.50',
        themeDark: 'rgba(100, 80, 20, 0.4)',
        content: (
            <VStack align="start" spacing={4}>
                <Text fontSize="lg" fontWeight="bold" color="yellow.600">
                    Unit tests all passed! Time to sleep.
                </Text>
                <Text>
                    The most comforting, soothing drink. Your servers are healthy, your code is merged, and it&apos;s time to rest your eyes.
                </Text>
            </VStack>
        )
    },
    {
        id: 'plain_water',
        name: 'Just Water',
        ingredients: ['water', 'ice'],
        themeLight: 'blue.50',
        themeDark: 'rgba(34, 74, 121, 0.4)',
        content: (
            <VStack align="start" spacing={4}>
                <Text fontSize="lg" fontWeight="bold" color="blue.500">
                    The foundational &apos;Hello World&apos;.
                </Text>
                <Text>
                    Stay hydrated! Drink water! (And don&apos;t forget to commit your code).
                </Text>
            </VStack>
        )
    },
    {
        id: 'cursed_brew',
        name: 'The Cursed "Stack Overflow" Brew',
        ingredients: ['matcha', 'earl_grey', 'milk', 'lemon', 'ice'],
        themeLight: 'gray.300',
        themeDark: 'rgba(40, 40, 40, 0.8)',
        content: (
            <VStack align="start" spacing={4}>
                <Text fontSize="lg" fontWeight="bold" color="gray.600">
                    You copied too many random snippets...
                </Text>
                <Text>
                    What did you do? You mixed everything together and now the project won&apos;t build. The milk curdled from the lemon. This is what happens when you copy-paste without understanding the documentation!
                </Text>
            </VStack>
        )
    }
];

const TeaRoom = () => {
    const [cup, setCup] = useState([]);
    const [brewing, setBrewing] = useState(false);
    const [result, setResult] = useState(null);

    const isLight = useColorModeValue(true, false);
    const panelBg = useColorModeValue('whiteAlpha.500', 'whiteAlpha.50');
    const dividerColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.200');

    const handleAddIngredient = (ing) => {
        if (brewing || result) return;
        if (!cup.find(i => i.id === ing.id)) {
            setCup([...cup, ing]);
        }
    };

    const handleBrew = () => {
        setBrewing(true);
        setTimeout(() => {
            // Check recipes
            const cupIds = cup.map(i => i.id).sort();
            const foundRecipe = RECIPES.find(r =>
                r.ingredients.length === cupIds.length &&
                r.ingredients.slice().sort().every((val, index) => val === cupIds[index])
            );

            if (foundRecipe) {
                setResult(foundRecipe);
            } else {
                setResult({
                    name: 'Mystery Brew',
                    content: <Text>An unusual mixture. It tastes a bit odd, but maybe it&apos;s an acquired taste?</Text>,
                    themeLight: 'gray.100',
                    themeDark: 'whiteAlpha.200'
                });
            }
            setBrewing(false);
        }, 1500); // 1.5s brewing time
    };

    const handleEmptyCup = () => {
        setCup([]);
        setResult(null);
    };

    return (
        <Layout title="Tea Room">
            <Container>
                <Box mt={4}>
                    <Heading as="h3" fontSize={20} mb={4}>
                        Interactive Tea Terminal
                    </Heading>

                    <Text mb={6}>
                        Welcome to the Tea Room. Programming and tea both require patience and precision. Add ingredients to your cup and hit &quot;Brew&quot; to see what happens!
                    </Text>

                    {!result ? (
                        <SimpleGrid columns={[1, 1, 2]} gap={6}>
                            {/* Ingredients Panel */}
                            <Box h="100%" p={5} borderWidth="1px" borderRadius="xl" bg={panelBg} shadow="sm">
                                <Heading as="h4" size="sm" mb={4}>Ingredients</Heading>
                                <VStack align="stretch" spacing={3}>
                                    {INGREDIENTS.map(ing => (
                                        <Button
                                            key={ing.id}
                                            justifyContent="flex-start"
                                            variant={cup.find(i => i.id === ing.id) ? 'solid' : 'outline'}
                                            colorScheme={cup.find(i => i.id === ing.id) ? 'teal' : 'gray'}
                                            onClick={() => handleAddIngredient(ing)}
                                            isDisabled={brewing}
                                            size="sm"
                                        >
                                            {ing.label}
                                        </Button>
                                    ))}
                                </VStack>
                            </Box>

                            {/* The Cup */}
                            <Box h="100%" p={5} borderWidth="1px" borderRadius="xl" bg={panelBg} shadow="sm" display="flex" flexDirection="column">
                                <Heading as="h4" size="sm" mb={4}>Your Cup</Heading>
                                <Box flex={1} borderWidth="1px" borderStyle="dashed" borderRadius="md" p={4} mb={4} minH="120px" display="flex" flexDirection="column" justifyContent="flex-end" overflow="hidden">
                                    <AnimatePresence>
                                        {cup.length === 0 && (
                                            <Text color="gray.500" textAlign="center" my="auto" fontSize="sm">Cup is empty...</Text>
                                        )}
                                        {cup.map((ing) => (
                                            <MotionBox
                                                key={ing.id}
                                                initial={{ y: -50, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                bg={ing.color}
                                                color={ing.id === 'milk' ? 'black' : 'white'}
                                                p={2}
                                                mt={1}
                                                borderRadius="md"
                                                textAlign="center"
                                                fontSize="xs"
                                                fontWeight="bold"
                                            >
                                                {ing.label}
                                            </MotionBox>
                                        ))}
                                    </AnimatePresence>
                                </Box>
                                <HStack spacing={4}>
                                    <Button
                                        colorScheme="teal"
                                        flex={1}
                                        onClick={handleBrew}
                                        isLoading={brewing}
                                        loadingText="Brewing..."
                                        isDisabled={cup.length === 0}
                                        size="sm"
                                    >
                                        Brew Tea
                                    </Button>
                                    <Button size="sm" onClick={handleEmptyCup} isDisabled={brewing || cup.length === 0}>
                                        Empty
                                    </Button>
                                </HStack>
                            </Box>
                        </SimpleGrid>
                    ) : (
                        /* Result Panel */
                        <MotionBox
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            p={6}
                            borderWidth="1px"
                            borderRadius="xl"
                            bg={isLight ? result.themeLight : result.themeDark}
                            shadow="md"
                        >
                            <Heading as="h3" size="md" mb={2}>🍵 {result.name}</Heading>
                            <Divider my={4} borderColor={dividerColor} />
                            <Box mb={6}>
                                {result.content}
                            </Box>
                            <Button colorScheme="teal" onClick={handleEmptyCup} size="sm">
                                Brew Another Cup
                            </Button>
                        </MotionBox>
                    )}

                    <Box mt={10} align="center">
                        <NextLink href="/" passHref>
                            <Button colorScheme="teal">
                                Return Home
                            </Button>
                        </NextLink>
                    </Box>
                </Box>
            </Container>
        </Layout>
    );
};

export default TeaRoom;
