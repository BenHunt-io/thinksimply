import brevo from '@getbrevo/brevo';
import { NextResponse } from 'next/server.js';
import z from "zod/v4";

const requestSchema = z.object({
    email: z.email()
})

export async function POST(request: Request) {
    const requestBody = await request.json();
    const parsedBody = requestSchema.parse(requestBody);

    if (!process.env.BREVO_API_KEY) {
        return NextResponse.json({ error: "BREVO_API_KEY is not set" }, { status: 500 });
    }

    const brevoClient = new brevo.ContactsApi();
    brevoClient.setApiKey(brevo.ContactsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

    const blogSubscriberListId = 3;

    // TODO: error handling.
    await brevoClient.createContact({
        email: parsedBody.email,
        listIds: [blogSubscriberListId],
        updateEnabled: true,
    })

    console.log(`Created contact ${parsedBody.email} in list ${blogSubscriberListId}`);

    return NextResponse.json({});
}