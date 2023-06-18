import { Grid, GridItem, Show } from '@chakra-ui/react';

function App() {
  return (
    <Grid
      templateAreas={{
        // sm, md, lg, xl, 2xl
        // https://chakra-ui.com/docs/styled-system/theme#breakpoints
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // 1024px
      }}
    >
      <GridItem area="nav" bg="blue.400">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="yellow.300">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="yellow.400">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
