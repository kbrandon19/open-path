import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Provider from '@/lib/models/Provider';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const location = searchParams.get('location');
    const specialties = searchParams.getAll('specialties');
    const insurances = searchParams.getAll('insurances');

    let query: any = {};

    // Filter by location (case-insensitive partial match)
    if (location) {
      query.location = { $regex: location, $options: 'i' };
    }

    // Filter by specialties (at least one match)
    if (specialties.length > 0) {
      query.specialties = { $in: specialties };
    }

    // Filter by insurances (at least one match)
    if (insurances.length > 0) {
      query.insurances = { $in: insurances };
    }

    const providers = await Provider.find(query).sort({ createdAt: -1 });
    console.log(`Found ${providers.length} providers matching filters`);

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