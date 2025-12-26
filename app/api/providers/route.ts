import { NextResponse } from "next/server";
import { getCollection } from "@/lib/db/getCollection";

export async function GET() {
  try {
    const providers = await getCollection("providers");
    const data = await providers.find({}).toArray();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch providers" },
      { status: 500 }
    );
  }
}
