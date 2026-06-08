import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  Box,
  Divider,
} from "@mantine/core";
import { useDbStore } from "../store/store";

// Helper per il colore del badge (Red se distrutto, Green se intatto)
const planetStatusColor = (isDestroyed) => {
  return isDestroyed ? "red" : "green";
};

export default function ListaPianeti() {
  const navigate = useNavigate();
  const { planets, fetchPlanets, isLoading, error } = useDbStore();

  useEffect(() => {
    if (!planets || planets.length === 0) {
      fetchPlanets();
    }
  }, [planets, fetchPlanets]);

  // Stato di caricamento uniforme a Character
  if (isLoading) {
    return (
      <Center h="60vh">
        <Stack align="center" gap="md">
          <Loader color="dbBlue" size="xl" type="dots" />
          <Text c="dimmed" size="sm">
            Caricamento pianeti...
          </Text>
        </Stack>
      </Center>
    );
  }

  // Stato di errore
  if (error) {
    return (
      <Center h="60vh">
        <Stack align="center" gap="md">
          <Title order={2} c="red.7">
            Si è verificato un errore
          </Title>
          <Text c="dimmed" size="sm">{error}</Text>
        </Stack>
      </Center>
    );
  }

  return (
    <Box p="xl">
      {/* Intestazione della sezione */}
      <Stack gap="xs" mb="xl">
        <Title order={1} c="dbOrange">
          Pianeti Dragon Ball
        </Title>
        <Text c="dimmed" size="sm">
          {planets?.length ?? 0} pianeti trovati
        </Text>
        <Divider />
      </Stack>

      {/* Griglia delle card responsive */}
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="lg">
        {planets?.map((planet) => (
          <Card
            key={planet.id}
            onClick={() => navigate(`/pianeta/${planet.id}`)}
            shadow="sm"
            radius="md"
            withBorder
            padding="lg" // Questo padding viene ora azzerato in cima grazie a Card.Section
            style={{ 
              cursor: "pointer", 
              transition: "transform 0.15s",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-4px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            {/* Contenitore superiore */}
            <Box>
              {/* MODIFICATO: Rimosso qualsiasi tipo di padding p="..." da qui per far toccare i bordi */}
              <Card.Section>
                <Image
                  src={planet.image}
                  height={180} // Abbassato leggermente a 180px per valorizzare il taglio orizzontale
                  alt={planet.name}
                  fit="cover" // MODIFICATO: Spinge l'immagine a riempire tutto lo spazio disponibile senza lasciare bande vuote
                  fallbackSrc="https://placehold.co/300x220?text=No+Image"
                />
              </Card.Section>

              {/* Sezione Contenuto */}
              <Stack gap="xs" mt="md">
                <Group justify="space-between" align="flex-start">
                  <Title order={4} style={{ lineHeight: 1.2 }}>
                    {planet.name}
                  </Title>
                  <Badge 
                    color={planetStatusColor(planet.isDestroyed)} 
                    variant="light" 
                    size="sm"
                  >
                    {planet.isDestroyed ? "💥 Distrutto" : "🌌 Intatto"}
                  </Badge>
                </Group>

                <Divider />
                
                {/* Descrizione del pianeta con lineClamp a 3 righe */}
                <Text size="xs" c="dimmed" style={{ minHeight: "3.5em" }} lineClamp={3}>
                  {planet.description || "Nessuna descrizione disponibile per questo pianeta."}
                </Text>
              </Stack>
            </Box>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}