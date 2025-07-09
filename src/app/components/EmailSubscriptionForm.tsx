'use client'
import { Button, FormControl, FormLabel, Grid, Input } from "@mui/joy";

export function EmailSubscriptionForm() {


    return (
        <Grid container>
            <Grid xs={12} md={4}>
                <form>
                    <FormControl>
                        <FormLabel htmlFor="email">Subscribe to new posts</FormLabel>
                        <Input id='email' placeholder='email' endDecorator={<Button>subscribe</Button>} />
                    </FormControl>
                </form>
            </Grid>
        </Grid>
    )

}