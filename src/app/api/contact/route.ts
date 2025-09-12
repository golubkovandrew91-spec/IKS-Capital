import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);
  // Mock processing
  return NextResponse.json({ ok: true, received: data ?? null });
}
