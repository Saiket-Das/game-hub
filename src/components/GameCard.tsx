import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { GameProps } from "../hooks/useGmaes";
import PlatformIconList from "./PlatformIconList";

interface GameCardProps {
  game: GameProps;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={game.background_image} />

      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
