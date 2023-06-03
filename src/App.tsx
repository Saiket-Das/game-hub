import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { GenreProps } from "./hooks/useGenres";

function App() {
  const [selecredGenre, setSelecredGenre] = useState<GenreProps | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding={5}>
          <GenreList onSelecredGenre={(genre) => setSelecredGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selecredGenre={selecredGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
