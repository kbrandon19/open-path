import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Provider from '@/lib/models/Provider';

export async function GET(_request: NextRequest) {
  try {
    await dbConnect();

    const providers = await Provider.find({}).sort({ createdAt: -1 });
    console.log(`Found ${providers.length} providers in database`);

    return NextResponse.json({ success: true, data: providers });
  } catch (error) {
    console.error('Error fetching providers:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch providers' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const provider = await Provider.create(body);

    return NextResponse.json({ success: true, data: provider }, { status: 201 });
  } catch (error) {
    console.error('Error creating provider:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create provider' },
      { status: 500 }
    );
  }
}