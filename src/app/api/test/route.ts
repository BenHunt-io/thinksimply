import { NextResponse } from "next/server.js";

export async function GET(request: Request) {
    return NextResponse.json({
        envVariable: process.env.TEST_ENV_VARIABLE,
    });
}