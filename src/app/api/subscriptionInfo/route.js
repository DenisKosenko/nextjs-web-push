import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
    const data = await req.json();

    await prisma.subscriptions.create({
        data: {
            data: JSON.stringify(data),
        },
    });

    const subscriptions = await prisma.subscriptions.findMany();

    return NextResponse.json(
        { subscriptions },
        {
            status: 200,
        }
    );
}

export async function DELETE() {
    await prisma.subscriptions.deleteMany({});

    const subscriptions = await prisma.subscriptions.findMany();

    return NextResponse.json(
        { subscriptions },
        {
            status: 200,
        }
    );
}

export async function GET() {
    const subscriptions = await prisma.subscriptions.findMany();

    return NextResponse.json(
        { subscriptions },
        {
            status: 200,
        }
    );
}

export async function OPTIONS(req) {
    const allowedOrigin = req.headers.get('origin');
    const response = new NextResponse(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': allowedOrigin || '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers':
                'Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version',
            'Access-Control-Max-Age': '86400',
        },
    });

    return response;
}
