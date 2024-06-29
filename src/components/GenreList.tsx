import {
  Box,
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data: genres, isLoading, error } = useGenres();

  const genreSkeletons = Array(15).fill(0);

  if (error) return null;

  return (
    <List>
      {isLoading &&
        genreSkeletons.map((skeleton, index) => (
          <ListItem key={index} paddingY="5px">
            <HStack>
              <Skeleton
                flexShrink="0"
                boxSize="32px"
                display="inline"
                borderRadius={8}
              />
              <SkeletonText width="100%" noOfLines={1} skeletonHeight={4} />
            </HStack>
          </ListItem>
        ))}
      {genres.results?.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              objectFit="cover"
            />
            <Button
              fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
              whiteSpace="normal"
              textAlign="left"
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
