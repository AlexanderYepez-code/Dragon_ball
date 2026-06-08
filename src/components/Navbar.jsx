import { Group, Title, Button } from '@mantine/core';
import {NavLink} from 'react-router-dom';

export function Navbar() {
  return (
    //contenitore flex
    <Group
      justify="space-between"
    //   padding-left e padding-right grandi
      px="xl"
    //   padding-top e padding-bottom medi
      py="md"
      //usa colore #002966
      bg="dbBlue.8"
    >
      {/* titolo stilizzato   */}
      {/* order{2} significa h2 */}
      {/* colore #fd6c13 */}
      <Title order={2} c="dbOrange.5">
        Dragon Ball Universe
      </Title>
        
      {/* gruppo link che crea un secondo flex container */}
      <Group>
        {/* pulsante mantine */}
        <Button
        //   genera un componente NavLink che mantiene l'aspetto del button
          component={NavLink}
          to="/"
        //   niente sfondo, stile leggero
          variant="subtle"
          color="dbOrange"
        >
          Home
        </Button>

        <Button
          component={NavLink}
          to="/personaggi"
          variant="subtle"
          color="dbOrange"
        >
          Personaggi
        </Button>

        <Button
          component={NavLink}
          to="/pianeti"
          variant="subtle"
          color="dbOrange"
        >
          Pianeti
        </Button>
      </Group>
    </Group>
  );
}