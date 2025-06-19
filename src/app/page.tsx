import { Typography, Button, Card, CardContent, Box } from '@mui/joy';
import FontExamples from './font-examples';

export default function Home() {
  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
      <Typography level="h1" sx={{ fontSize: '10rem' }}>
        I ❤️ Brittany Pollok
      </Typography>
    </Box>
  );
}
