import { Typography, Button, Box, Card, CardContent } from '@mui/joy';

export default function FontExamples() {
  return (
    <Box sx={{ p: 4, maxWidth: 1000, mx: 'auto' }}>
      <Typography level="h1" sx={{ mb: 4 }}>
        Font Application Examples
      </Typography>

      {/* Method 1: Using theme (already configured in layout.tsx) */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography level="h2" sx={{ mb: 2 }}>
            Method 1: Theme-based (Recommended)
          </Typography>
          <Typography level="body-md" sx={{ mb: 2 }}>
            This uses the font configured in the theme. All JoyUI components will automatically use Roboto.
          </Typography>
          <Button variant="solid">Theme Button</Button>
        </CardContent>
      </Card>

      {/* Method 2: Using sx prop with fontFamily */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography level="h2" sx={{ mb: 2 }}>
            Method 2: Direct fontFamily in sx prop
          </Typography>
          <Typography 
            level="body-md" 
            sx={{ 
              mb: 2,
              fontFamily: 'var(--font-roboto), sans-serif'
            }}
          >
            This text explicitly uses the Roboto font via CSS variable.
          </Typography>
          <Button 
            variant="outlined" 
            sx={{ fontFamily: 'var(--font-roboto), sans-serif' }}
          >
            Custom Font Button
          </Button>
        </CardContent>
      </Card>

      {/* Method 3: Using different font weights */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography level="h2" sx={{ mb: 2 }}>
            Method 3: Font Weights
          </Typography>
          <Typography 
            level="body-md" 
            sx={{ 
              mb: 1,
              fontWeight: 300 // Light
            }}
          >
            Light weight (300) - Roboto Light
          </Typography>
          <Typography 
            level="body-md" 
            sx={{ 
              mb: 1,
              fontWeight: 400 // Regular
            }}
          >
            Regular weight (400) - Roboto Regular
          </Typography>
          <Typography 
            level="body-md" 
            sx={{ 
              mb: 1,
              fontWeight: 700 // Bold
            }}
          >
            Bold weight (700) - Roboto Bold
          </Typography>
        </CardContent>
      </Card>

      {/* Method 4: Using CSS classes */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography level="h2" sx={{ mb: 2 }}>
            Method 4: CSS Classes
          </Typography>
          <Typography 
            level="body-md" 
            className="font-roboto"
            sx={{ mb: 2 }}
          >
            This uses a CSS class approach (you&apos;d need to define .font-roboto in your CSS).
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
} 