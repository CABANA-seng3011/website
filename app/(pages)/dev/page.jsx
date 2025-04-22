import { Container } from "@mui/joy";
import Panel from "@/components/Panel";

export default function devPage() {
  return (
    <Container
      maxWidth='lg'
      height='100vh'
      py='4'>
      <Panel text='Cabana' imagePath='/earth.webp' imageAlt='Picture of the earth' />
      
    </Container>
  );
}