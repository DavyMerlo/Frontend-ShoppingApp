import { useState } from "react";
import { Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

const CroppedText = ({ children }: Props) => {
  const [expanded] = useState(false);
  const limit = 140;

  if (!children) return null;

  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text
      p={2}
      color={"#f2f2f2"}
      whiteSpace="pre-line"
      fontSize={"14px"}
      height="200px"
    >
      {summary}
    </Text>
  );
};

export default CroppedText;
