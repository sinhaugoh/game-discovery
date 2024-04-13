import {
  Box,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
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
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
export default GenreList;
