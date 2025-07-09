"use client";
import { Box, Link, Stack, useTheme } from "@mui/joy";
import { useRouter } from "next/navigation.js";

export const LineHeader = () => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Box
      sx={{
        position: "fixed",
        height: "30px",
        top: 0,
        left: 0,
        width: "100%",
      }}
    >
      <Box
        padding={1}
        display="flex"
        justifyContent={'center'}
        height="100%"
        bgcolor={theme.palette.common.white}

      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width='100%'
          borderBottom={`1px solid ${theme.palette.common.black}`}
          maxWidth={theme.maxPostWidth}
          sx={{
          }}>
          <Link
            level="body-md"
            fontWeight={500}
            sx={{
              color: theme.palette.common.black,
              '&:hover': {
                textDecorationLine: 'none',
                color: theme.palette.primary['500']
              },
              '&:active': {
                color: theme.palette.primary['700']
              }
            }}
            onClick={() => { router.push('/') }}
          >
            Think Simply
          </Link>

          <Menu items={[
            {
              title: 'posts',
              href: "/"
            },
            {
              title: 'me'
            }]} />
        </Box>
      </Box>
    </Box >
  );
};

interface MenuProps {
  items: {
    title: string,
    href?: string
  }[]
}

const Menu = (props: MenuProps) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Stack direction="row" spacing={1}>
      {props.items.map((item, index) => (
        <Link
          key={index}
          sx={{
            color: theme.palette.common.black,
          }}
          onClick={() => router.push(item.href ?? `/${item.title}`)}
        >
          {item.title}
        </Link>
      ))}
    </Stack>
  );
};
