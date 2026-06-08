import { useEffect } from "react";
import {
    SimpleGrid,
    Card,
    Image,
    Text,
    Badge,
    Group,
    Stack,
    Title,
    Loader,
    Center,
    TextInput,
    Select,
    Box,
    Divider,
} from "@mantine/core";
import { useDbStore } from "../store/store";
import { useNavigate } from "react-router-dom";


// Colore badge per affiliation
const affiliationColor = (affiliation) => {
    if (!affiliation) return "gray";
    const a = affiliation.toLowerCase();
    if (a.includes("z fighter")) return "dbOrange";
    if (a.includes("frieza") || a.includes("freezer")) return "red";
    if (a.includes("villain")) return "dark";
    if (a.includes("namekian")) return "green";
    return "dbBlue";
};

// Colore badge per race
const raceColor = (race) => {
    const map = {
        Saiyan: "yellow",
        Human: "blue",
        Namekian: "green",
        Android: "cyan",
        Majin: "pink",
        "Frieza Race": "red",
        "Frieza race": "red",
    };
    return map[race] || "gray";
};

export default function Character() {
    const { characters, fetchCharacters, isLoading } = useDbStore();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!characters || characters.length === 0) {
            fetchCharacters();
        }
    }, []);

    if (isLoading) {
        return (
            <Center h="60vh">
                <Stack align="center" gap="md">
                    <Loader color="dbOrange" size="xl" type="dots" />
                    <Text c="dimmed" size="sm">
                        Caricamento personaggi...
                    </Text>
                </Stack>
            </Center>
        );
    }

    return (
        <Box p="xl">
            {/* Titolo sezione */}
            <Stack gap="xs" mb="xl">
                <Title order={1} c="dbOrange">
                    Personaggi
                </Title>
                <Text c="dimmed" size="sm">
                    {characters?.length ?? 0} personaggi trovati
                </Text>
                <Divider />
            </Stack>

            {/* Griglia card */}
            <SimpleGrid
                cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
                spacing="lg"
            >
                {characters?.map((char) => (
                    <Card
                        key={char.id}
                        onClick={() => navigate(`/personaggi/${char.id}`)}

                        shadow="sm"
                        radius="md"
                        withBorder
                        padding="lg"
                        style={{ cursor: "pointer", transition: "transform 0.15s" }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.transform = "translateY(-4px)")
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "translateY(0)")
                        }
                    >
                        {/* Immagine */}
                        <Card.Section>
                            <Image
                                src={char.image}
                                height={220}
                                alt={char.name}
                                fit="contain"
                                bg="gray.0"
                                fallbackSrc="https://placehold.co/300x220?text=No+Image"
                            />
                        </Card.Section>

                        {/* Contenuto */}
                        <Stack gap="xs" mt="md">
                            {/* Nome + Race */}
                            <Group justify="space-between" align="flex-start">
                                <Title order={4} style={{ lineHeight: 1.2 }}>
                                    {char.name}
                                </Title>
                                <Badge color={raceColor(char.race)} variant="light" size="sm">
                                    {char.race}
                                </Badge>
                            </Group>

                            {/* Affiliation */}
                            <Badge
                                color={affiliationColor(char.affiliation)}
                                variant="filled"
                                size="sm"
                                fullWidth
                            >
                                {char.affiliation || "Sconosciuto"}
                            </Badge>

                            <Divider />

                            {/* Ki */}
                            <Group gap="xs">
                                <Text size="xs" c="dimmed" fw={600}>
                                    KI BASE
                                </Text>
                                <Text size="xs" fw={700} c="dbOrange">
                                    {char.ki || "—"}
                                </Text>
                            </Group>
                            <Group gap="xs">
                                <Text size="xs" c="dimmed" fw={600}>
                                    KI MAX
                                </Text>
                                <Text size="xs" fw={700} c="dbOrange">
                                    {char.maxKi || "—"}
                                </Text>
                            </Group>

                            <Divider />

                            {/* Descrizione troncata */}
                            <Text size="xs" c="dimmed" lineClamp={3}>
                                {char.description}
                            </Text>
                        </Stack>
                    </Card>
                ))}
            </SimpleGrid>
        </Box>
    );
}