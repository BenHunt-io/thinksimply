'use client'
import { Grid, Typography, useTheme } from "@mui/joy";
import Markdown from "react-markdown";


export interface PostProps {
    title: string,
    markdownContent: string
}

export default function Post(props: PostProps) {

    const theme = useTheme();

    return (
        <Grid container justifyContent={'center'}>
            <Grid xs={12} sx={{
                [theme.breakpoints.up('md')]: {
                    maxWidth: theme.maxPostWidth
                }
            }}>
                <Typography level="h1">{props.title}</Typography>
                <Markdown
                    components={{
                        img: ({ ...props }) => (
                            <img
                                style={{
                                    maxWidth: "100%",
                                }}
                                {...props}
                            />
                        ),
                    }}
                >
                    {props.markdownContent}
                </Markdown>
            </Grid>
        </Grid >
    )
}