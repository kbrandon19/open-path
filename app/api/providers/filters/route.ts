import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Provider from '@/lib/models/Provider';

export async function GET(_request: NextRequest) {
  try {
    await dbConnect();

    // Get unique specialties
    const specialtiesResult = await Provider.distinct('specialties');
    const specialties = specialtiesResult.flat().filter((s, i, arr) => arr.indexOf(s) === i).sort();

    // Get unique insurances
    const insurancesResult = await Provider.distinct('insurances');
    const insurances = insurancesResult.flat().filter((i, i2, arr) => arr.indexOf(i) === i2).sort();

    // Get unique locations (simplified - just get all locations and deduplicate)
    const locationsResult = await Provider.distinct('location');
    const locations = locationsResult.filter(l => l).sort();

    return NextResponse.json({
      success: true,
      data: {
        specialties: specialties.map(s => ({ value: s, label: s })),
        insurances: insurances.map(i => ({ value: i, label: i })),
        locations
      }
    });
  } catch (error) {
    console.error('Error fetching filter options:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch filter options' },
      { status: 500 }
    );
  }
}