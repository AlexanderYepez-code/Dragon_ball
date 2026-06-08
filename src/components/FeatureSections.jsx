import { Container, SimpleGrid, Card, Text, Title } from '@mantine/core';

export default function FeaturesSection() {
  const features = [
    {
      emoji: '🥋',
      title: 'Tutti i Guerrieri',
      description: 'Dalle prime avventure di Goku bambino fino ai guerrieri del Torneo del Potere.',
    },
    {
      emoji: '💥',
      title: 'Trasformazioni',
      description: 'Scopri le forme Super Saiyan, le fusioni e i potenziamenti divini di ogni personaggio.',
    },
    {
      emoji: '🪐',
      title: 'Pianeti Esplorati',
      description: 'Terra, Namecc, Vegeta. Analizza i mondi distrutti o ancora intatti dell\'universo.',
    },
  ];

  return (
    <Container size="lg" py={80}>
      <Title order={2} ta="center" mb="xl" c="white">
        Cosa troverai nel nostro archivio?
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
        {features.map((feature, index) => (
          <Card key={index} shadow="md" padding="xl" radius="md" withBorder>
            <Text size="3rem" mb="md">{feature.emoji}</Text>
            <Title order={3} size="h4" mb="sm" c="dbOrange.4">
              {feature.title}
            </Title>
            <Text size="sm" c="dimmed">
              {feature.description}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}