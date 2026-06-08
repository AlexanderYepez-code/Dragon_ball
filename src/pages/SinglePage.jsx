import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Image,
  Title,
  Text,
  Badge,
  Group,
  Stack,
  Divider,
  Button,
  Loader,
  Center,
  Paper,
  ThemeIcon,
} from "@mantine/core";
import { useDbStore } from "../store/store";

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

const affiliationColor = (affiliation) => {
  if (!affiliation) return "gray";
  const a = affiliation.toLowerCase();
  if (a.includes("z fighter")) return "dbOrange";
  if (a.includes("frieza") || a.includes("freezer")) return "red";
  if (a.includes("villain")) return "dark";
  if (a.includes("namekian")) return "green";
  return "dbBlue";
};

const StatCard = ({ icon, label, value }) => (
  <Paper withBorder radius="md" p="md">
    <Group gap="sm">
      <ThemeIcon color="dbOrange" variant="light" size="lg" radius="md">
        {icon}
      </ThemeIcon>
      <Stack gap={2}>
        <Text size="xs" c="dimmed" fw={600} tt="uppercase" lts={1}>
          {label}
        </Text>
        <Text size="sm" fw={700}>
          {value || "—"}
        </Text>
      </Stack>
    </Group>
  </Paper>
);

export default function SinglePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentCharacter, fetchCharacterById, isLoading, error } = useDbStore();

  useEffect(() => {
    fetchCharacterById(id);
  }, [id]);

  if (isLoading) {
    return (
      <Center h="60vh">
        <Stack align="center" gap="md">
          <Loader color="dbOrange" size="xl" type="dots" />
          <Text c="dimmed" size="sm">Caricamento personaggio...</Text>
        </Stack>
      </Center>
    );
  }

  if (error || !currentCharacter) {
    return (
      <Center h="60vh">
        <Stack align="center" gap="md">
          <Text size="xl">⚠️</Text>
          <Text c="dimmed">Personaggio non trovato.</Text>
          <Button color="dbOrange" onClick={() => navigate(-1)}>
            ← Torna indietro
          </Button>
        </Stack>
      </Center>
    );
  }

  const char = currentCharacter;

  return (
    <Box p="xl" maw={1100} mx="auto">

      {/* Back button */}
      <Button
        variant="subtle"
        color="dbOrange"
        mb="xl"
        onClick={() => navigate(-1)}
      >
        ← Torna ai personaggi
      </Button>

      <Grid gutter="xl" align="flex-start">

        {/* Colonna sinistra — immagine */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Paper withBorder radius="md" p="md">
            <Image
              src={char.image}
              alt={char.name}
              fit="contain"
              height={360}
              bg="gray.0"
              radius="md"
              fallbackSrc="https://placehold.co/300x360?text=No+Image"
            />
            <Stack gap="xs" mt="md">
              <Badge
                color={affiliationColor(char.affiliation)}
                variant="filled"
                size="md"
                fullWidth
              >
                {char.affiliation || "Sconosciuto"}
              </Badge>
              <Badge
                color={raceColor(char.race)}
                variant="light"
                size="md"
                fullWidth
              >
                {char.race}
              </Badge>
            </Stack>
          </Paper>
        </Grid.Col>

        {/* Colonna destra — info */}
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Stack gap="lg">

            {/* Intestazione */}
            <Stack gap="xs">
              <Group gap="sm" align="center">
                <Title order={1} c="dbOrange">
                  {char.name}
                </Title>
                <Badge color="gray" variant="outline" size="sm">
                  #{char.id}
                </Badge>
              </Group>
              <Group gap="xs">
                <Badge variant="dot" color="gray" size="sm">
                  {char.gender === "Male" ? "♂ Maschio" : char.gender === "Female" ? "♀ Femmina" : char.gender}
                </Badge>
              </Group>
            </Stack>

            <Divider />

            {/* Stats */}
            <Stack gap="xs">
              <Text size="sm" fw={700} tt="uppercase" c="dimmed" lts={1}>
                Statistiche
              </Text>
              <Grid gutter="sm">
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <StatCard icon="⚡" label="KI Base" value={char.ki} />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <StatCard icon="🔥" label="KI Massimo" value={char.maxKi} />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <StatCard icon="🧬" label="Razza" value={char.race} />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <StatCard icon="⚔️" label="Affiliazione" value={char.affiliation} />
                </Grid.Col>
              </Grid>
            </Stack>

            <Divider />

            {/* Descrizione */}
            <Stack gap="xs">
              <Text size="sm" fw={700} tt="uppercase" c="dimmed" lts={1}>
                Biografia
              </Text>
              <Text size="sm" lh={1.8} c="dimmed">
                {char.description}
              </Text>
            </Stack>

          </Stack>
        </Grid.Col>
      </Grid>
    </Box>
  );
}