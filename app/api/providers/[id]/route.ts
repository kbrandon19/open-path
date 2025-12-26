import { NextResponse } from "next/server";
import { getCollection } from "@/lib/db/getCollection";

interface Params {
  params: { id: string };
}

export async function GET(_: Request, { params }: Params) {
  try {
    const providers = await getCollection("providers");

    const provider = await providers.findOne({
      provider_id: params.id,
    });

    if (!provider) {
      return NextResponse.json(
        { error: "Provider not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(provider);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
