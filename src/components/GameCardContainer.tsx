import { Box, Card } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box>
      <Card width="270px" borderRadius="10px" overflow="hidden">
        {children}
      </Card>
    </Box>
  );
};

export default GameCardContainer;
