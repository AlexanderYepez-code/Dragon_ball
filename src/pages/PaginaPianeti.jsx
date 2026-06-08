import { useDbStore } from "../store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Image,
  Badge,
  Button,
  Loader,
  Center,
} from "@mantine/core";

export default function ListaPianeti() {
  const navigate = useNavigate();

  const { planets, fetchPlanets, isLoading, error } = useDbStore();

  useEffect(() => {
    fetchPlanets();
  }, [fetchPlanets]);

  const gestisciShowDetails = (idPianeta) => {
    navigate(`/pianeta/${idPianeta}`);
  };

  if (isLoading) {
    return (
    // <Center> unisce 'display: flex', 'justify-content: center' e 'align-items: center'
    // 'style={{ height: "50vh" }}' imposta l'altezza a metà della schermata del browser
      <Center style={{ height: "50vh" }}>
        <Loader size="xl" type="dots" />
      </Center>
    );
  }

    // Gestione errore
  if (error) {
    return (
      <Center style={{ height: "50vh", flexDirection: "column" }}>
        {/* order dice di far apparire un tag h2 html
        c è il colore del testo */}
        <Title order={2} c="red.7">
          Si è verificato un errore
        </Title>
        {/* c dimmet è un testo di colore grigio opaco neutro */}
        <Text c="dimmed">{error}</Text>
      </Center>
    );
  }

  return (
    // Centra il contenuto della pagina nello schermo
    // GLi da una larghezza massima e aggiunge uno
    // spazio vuoto sopra e sotto
    <Container size="lg" py="xl">
        {/* titolo, centra il testo che avrà tag h1
        colora il testo usando il blu del tema e mette un
        piccolo margin bottom */}
      <Title ta="center" order={1} c="dbBlue.9" mb="xs">
        Pianeti Dragon Ball
      </Title>

      <Text ta="center" c="dimmed" mb="xl">
        Seleziona un pianeta
      </Text>

        {/* prende le card e le dispone a griglia
        rendendole responsive */}
        {/* cols dice quante colonne mostrare in base alla
        larghezza dello schermo
        con spacing imposta la distanza tra una card e l'altra */}
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="lg">
        {planets.map((pianeta) => (
            // card dei pianeti
          <Card
            key={pianeta.id}
            padding="lg"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* contiene gli elementi della card */}
            <Card.Section p="md">
              <Image
                src={pianeta.image}
                alt={pianeta.name}
                height={160}
                fit="contain"
              />
            </Card.Section>

            <Title order={3} size="h4" ta="center" mt="md" mb="xs" c="dbBlue.8">
              {pianeta.name}
            </Title>


            
            <Center mb="md" style={{ flexGrow: 1, alignItems: "flex-end" }}>
              {pianeta.isDestroyed ? (
                // Mostra lo stato rosso se distrutto 
                <Badge color="red" variant="light" size="md">
                  💥 Distrutto
                </Badge>
              ) : (
                // verde se intatto
                <Badge color="green" variant="light" size="md">
                  🌌 Intatto
                </Badge>
              )}
            </Center>

              {/* prende il colore arancione e lo allarga per occupare
              l'intera card */}
            <Button
              fullWidth
              onClick={() => gestisciShowDetails(pianeta.id)}
            // Mette il testo in grassetto. Al click fa partire
            // la funzione che porta alla pagina dei dettagli
              fw={700}
            >
              Vedi Dettagli
            </Button>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
