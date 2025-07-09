'use client'
import { Button, FormControl, FormHelperText, FormLabel, Grid, Input, useTheme } from "@mui/joy";
import { useState } from "react";

export function EmailSubscriptionForm() {

    const theme = useTheme();
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'loading' | 'success' | 'error' | null>(null);

    const subscribe = async () => {
        setStatus('loading');
        const response = await fetch('/api/subscribe', {
            method: 'POST',
            body: JSON.stringify({ email }),
        });
        setStatus(null);
        if (response.ok) {
            setStatus('success');
        } else {
            setStatus('error');
        }
    }

    return (
        <Grid container>
            <Grid xs={12} md={4}>
                <form>
                    <FormControl>
                        <FormLabel htmlFor="email">Subscribe to new posts</FormLabel>
                        <Input id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' endDecorator={<Button loading={status === 'loading'} onClick={subscribe}>subscribe</Button>} />
                        {status === 'success' && <FormHelperText sx={{ color: theme.palette.success[500] }}>
                            Thank you for subscribing!
                        </FormHelperText>}
                        {status === 'error' && <FormHelperText sx={{ color: theme.palette.danger[500] }}>
                            Failed to subscribe. Please try again.
                        </FormHelperText>}
                    </FormControl>
                </form>
            </Grid>
        </Grid>
    )

}