import { Container, Title, Text, Button, Group, Overlay } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import  sfondoImg  from '../assets/img/sfondo.jpg';
export default function HeroSection() {
    const navigate = useNavigate();

    return (
        <div style={{
            position: 'relative',
            backgroundImage: `url(${sfondoImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
        }}>
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.95) 100%)"
                opacity={1}
                zIndex={0}
            />

            <Container size="md" style={{ position: 'relative', zIndex: 1 }}>
                <Title order={1} size="4rem" fw={900} c="white" ta="center" style={{ lineHeight: 1.1 }}>
                    Il Database Definitivo di <br />
                    <Text component="span" c="dbOrange.5" inherit>Dragon Ball</Text>
                </Title>

                <Text size="xl" c="dimmed" mt="xl" ta="center" mx="auto" maxW={600}>
                    Esplora l'universo creato da Akira Toriyama. Cerca i tuoi eroi, scopri i loro livelli di potere e viaggia tra i pianeti della galassia.
                </Text>

                <Group justify="center" mt="xl" gap="md">
                    <Button size="xl" radius="xl" color="dbOrange" onClick={() => navigate('/characters')}>
                        Vedi Personaggi
                    </Button>
                    <Button size="xl" radius="xl" variant="outline" color="gray.4" onClick={() => navigate('/planets')}>
                        Esplora Pianeti
                    </Button>
                </Group>
            </Container>
        </div>
    );
}