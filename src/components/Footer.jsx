import { Container, Group, Text, Title, Stack, Anchor } from '@mantine/core';

export function Footer() {
  return (
    <footer
      style={{
        // colore di sfondo #002966
        backgroundColor: 'var(--mantine-color-dbBlue-8)',
        // linea superiore arancione #fe6000
        borderTop: '2px solid var(--mantine-color-dbOrange-6)',
        // spazio sopra il footer per separarlo dal contenuto
        marginTop: 60
      }}
    >

      {/* contenitore centrale del footer */}
      <Container
        style={{
          // flex in colonna e tutto centrato
          // padding sopra e sotto e 0 a destra/sinistra
          padding: '25px 0',
          // attiva flexbox
          display: 'flex',
          // elementi in colonna (verticale)
          flexDirection: 'column',
          // centra orizzontalmente tutti gli elementi
          alignItems: 'center',
          // spazio tra gli elementi
          gap: 10
        }}
      >

        {/* titolo principale del sito h3 */}
        <Title order={3} c="dbOrange.5">
          Dragon Ball Universe
        </Title>

        {/* testo copyright */}
        {/* gray.4 è grigio chiaro mentre size sm è testo piccolo */}
        <Text c="gray.4" size="sm">
          © 2026 Dragon Ball Universe - Tutti i diritti riservati
        </Text>

        {/* blocco verticale per sezione creatori */}
        {/* gap 5 è la distanza tra elementi */}
        <Stack gap={5} align="center">

          {/* etichetta "Creatori" */}
          {/* gray.5 è grigio medio, grandezza piccola, font weight grassetto medio */}
          <Text c="gray.5" size="sm" fw={600}>
            Creatori
          </Text>

          {/* riga con i link dei creatori */}
          {/* md spazio medio tra elementi */}
          <Group gap="md">

            {/* link GitHub creatore 1 */}
            <Anchor
              href="https://github.com/realKevv"
            //   apre in una nuova scheda
              target="_blank"
              c="dbOrange.4"
            >
              Kevin Napoli
            </Anchor>

            {/* link GitHub creatore 2 */}
            <Anchor
              href="https://github.com/AlexanderYepez-code"
              target="_blank"
              c="dbOrange.4"
            >
              Jose Alexander Yepez Mejia
            </Anchor>

            {/* link GitHub creatore 3 */}
            <Anchor
              href="https://github.com/mariacarlottaliberio"
              target="_blank"
              c="dbOrange.4"
            >
              Maria Carlotta Liberio
            </Anchor>

            {/* link GitHub creatore 4 */}
            <Anchor
              href="https://github.com/biancaandreeacioc/"
              target="_blank"
              c="dbOrange.4"
            >
              Bianca Andreea Ciocoiu
            </Anchor>

          </Group>

        </Stack>

      </Container>
    </footer>
  );
}