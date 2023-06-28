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
  onSelectedGenre: (genre: GenreProps) => void;
  selectedGenre: GenreProps | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
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
              onClick={() => onSelectedGenre(genre)}
              variant="link"
              colorScheme={genre.id == selectedGenre?.id && "blue"}
              fontWeight={genre.id == selectedGenre?.id ? "bold" : "normal"}
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
