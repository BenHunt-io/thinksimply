'use client'

import { Link, Stack, Typography, useTheme } from "@mui/joy";
import dayjs from "dayjs";
import { useRouter } from "next/navigation.js";

export const PostPreviewList = () => {
    return (
        <Stack spacing={4}>
            <PostPreview
                title="In defense of crypto"
                postId="in-defense-of-crypto"
                date={dayjs("2021-05-11")}
                description="Despite the crypto industry's notoriety for fraud, crypto is valuable. Learn why."
            />
            <PostPreview
                title="Who are you?"
                postId="who-are-you"
                date={dayjs("2020-07-01")}
                description="Fundamentally, what makes you, you?"
            />
        </Stack>
    );
};

export const PostPreview = (props: {
    title: string;
    postId: string;
    date: dayjs.Dayjs;
    description: string;
}) => {
    const theme = useTheme();
    const router = useRouter();
    return (
        <Stack>
            <Link
                level="h3"
                color="primary"
                onClick={() => router.push(`/posts/${props.postId}`)}
            >
                {props.title}
            </Link>
            <Typography level="body-md" fontWeight={400}>
                {props.description}
            </Typography>
            <Typography level="body-xs" sx={{ color: theme.palette.neutral[400] }}>
                {props.date.format("DD MMMM YYYY").toUpperCase()}
            </Typography>
        </Stack>
    );
};