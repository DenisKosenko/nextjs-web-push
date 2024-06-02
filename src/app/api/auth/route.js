import { NextResponse } from "next/server";

export function GET() {
  const response = new NextResponse(null, {
    status: 401,
    headers: {
      "WWW-authenticate": 'Basic realm="Secure Area"',
    },
  });

  return response;
}
