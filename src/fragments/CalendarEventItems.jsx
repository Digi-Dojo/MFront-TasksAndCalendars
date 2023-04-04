import { Box } from "@mui/system";
import { Title } from "../components/Title";
import { BreedsList } from "../components/BreedsList";
import { useBreeds } from "../hooks/useBreeds";

export const DogBreeds = () => {
  const breeds = useBreeds()

  const maxHeight = {
    height: '75vh',
    overflow: 'auto'
  }

  return <section>
    <Title secondary>Dog Breeds</Title>

    <Box sx={maxHeight}>
      <BreedsList items={ breeds } />
    </Box>
  </section>
};