import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { GenreProps } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelecredGenre: (genre: GenreProps) => void;
  selecredGenre: GenreProps | null;
}

const GenreList = ({ onSelecredGenre, selecredGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />;

  if (error) return null;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="40px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelecredGenre(genre)}
              variant="link"
              fontWeight={genre.id == selecredGenre?.id ? "bold" : "normal"}
              colorScheme={genre.id == selecredGenre?.id && "blue"}
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
