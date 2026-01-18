// Test script to add sample data to MongoDB
// Run this with: npx tsx scripts/seed.ts

import dbConnect from '../lib/mongodb';
import Provider from '../lib/models/Provider';
import Service from '../lib/models/Service';
import FAQ from '../lib/models/FAQ';

async function seedDatabase() {
  try {
    await dbConnect();
    console.log('Connected to MongoDB');

    // Clear existing data
    await Provider.deleteMany({});
    await Service.deleteMany({});
    await FAQ.deleteMany({});

    // Sample providers
    const providers = [
      {
        name: 'Dr. Sarah Johnson',
        specialties: ['Anxiety', 'Depression', 'PTSD'],
        description: 'Licensed clinical psychologist with 10+ years of experience helping individuals overcome trauma and anxiety disorders.',
        location: 'New York, NY',
        contact: {
          email: 'sarah.johnson@example.com',
          phone: '(555) 123-4567'
        }
      },
      {
        name: 'Michael Chen, LCSW',
        specialties: ['Family Therapy', 'Relationship Counseling', 'Stress Management'],
        description: 'Specialized in family dynamics and relationship counseling, helping couples and families build stronger connections.',
        location: 'Los Angeles, CA',
        contact: {
          email: 'michael.chen@example.com',
          phone: '(555) 234-5678'
        }
      },
      {
        name: 'Dr. Emily Rodriguez',
        specialties: ['Child Psychology', 'Adolescent Therapy', 'ADHD'],
        description: 'Child and adolescent psychologist dedicated to helping young people navigate life\'s challenges and reach their full potential.',
        location: 'Chicago, IL',
        contact: {
          email: 'emily.rodriguez@example.com',
          phone: '(555) 345-6789'
        }
      }
    ];

    // Sample services
    const services = [
      {
        title: 'Affordable Therapy Program',
        description: 'Connects users with verified providers offering reduced-rate therapy and sliding-scale mental health services.',
        icon: 'https://res.cloudinary.com/dujkjy2e2/image/upload/v1766521140/Open%20Path/Services/Rectangle_3_b7xigp.jpg'
      },
      {
        title: 'Mental Health Resource Library',
        description: 'Provides educational articles, coping tools, and guidance to support mental wellness and informed care decisions.',
        icon: 'https://res.cloudinary.com/dujkjy2e2/image/upload/v1766521140/Open%20Path/Services/Rectangle_5_ogoxtz.jpg'
      },
      {
        title: 'Provider Verification & Quality Assurance',
        description: 'Ensures provider credentials are verified, accurate, and regularly reviewed to maintain platform trust and safety.',
        icon: 'https://res.cloudinary.com/dujkjy2e2/image/upload/v1766521140/Open%20Path/Services/Rectangle_4_osikvo.jpg'
      },
      {
        title: 'Provider Search & Matching',
        description: 'Helps users quickly find mental health providers matching specialties, insurance, location, and availability preferences.',
        icon: 'https://res.cloudinary.com/dujkjy2e2/image/upload/v1766521140/Open%20Path/Services/Rectangle_6_thxqrg.jpg'
      }
    ];

    // Sample FAQs
    const faqs = [
      {
        question: 'How do I find a therapist?',
        answer: 'You can search for therapists using our search tool by specialty, location, insurance, or availability. We match you with verified providers who meet your specific needs.'
      },
      {
        question: 'What should I expect in my first therapy session?',
        answer: 'Your first session is typically an assessment where you and your therapist get to know each other. You\'ll discuss your goals, concerns, and what you hope to achieve through therapy.'
      },
      {
        question: 'How much does therapy cost?',
        answer: 'Therapy costs vary depending on the provider, location, and type of therapy. Many providers offer sliding scale fees, and we have an affordable therapy program for those who qualify.'
      },
      {
        question: 'Is my information confidential?',
        answer: 'Yes, therapist-client confidentiality is protected by law. Your personal information and session details are kept private and secure.'
      }
    ];

    // Insert sample data
    await Provider.insertMany(providers);
    await Service.insertMany(services);
    await FAQ.insertMany(faqs);

    console.log('Sample data inserted successfully!');
    console.log(`Inserted ${providers.length} providers, ${services.length} services, and ${faqs.length} FAQs`);

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    process.exit(0);
  }
}

seedDatabase();