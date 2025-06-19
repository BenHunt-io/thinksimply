import { Typography, Button, Card, CardContent, Box } from '@mui/joy';
import FontExamples from './font-examples';

export default function Home() {
  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
      <Typography level="h1" sx={{ mb: 2 }}>
        Welcome to ThinkSimply
      </Typography>
      
      <Typography level="body-lg" sx={{ mb: 3 }}>
        This page demonstrates JoyUI components using the Roboto font.
      </Typography>
      
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography level="h2" sx={{ mb: 1 }}>
            Card Title
          </Typography>
          <Typography level="body-md">
            This card content will use the Roboto font through JoyUI&apos;s theme system.
          </Typography>
        </CardContent>
      </Card>
      
      <Button variant="solid" size="lg" sx={{ mb: 4 }}>
        Click me!
      </Button>

      <hr style={{ margin: '2rem 0' }} />
      
      <FontExamples />
    </Box>
  );
}
