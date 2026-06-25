import mongoose from 'mongoose';
import connectToDatabase from "../lib/mongodb.js";
import bcrypt from 'bcryptjs';
import navbarCategoriesData, { 
  historicalTours, 
  culturalTours, 
  natureTours,
  ethiopianFestivals,
  offersData,
  featuredExperiences,
  temuOmoValleyTours,
  popularTemuTours
} from './travel_data.js';
import { Tour } from '../Model/tour.model.js';
import { Destination } from '../Model/destination.model.js';
import { Festival } from '../Model/festival.model.js';
import { User } from '../Model/user.model.js';

function transformTourData(tour: any, category: string) {
  // Parse duration days from string like "4 Days" or "8 Days"
  let durationDays = 5;
  if (tour.duration) {
    const match = tour.duration.match(/(\d+)/);
    if (match) {
      durationDays = parseInt(match[1]) || 5;
    }
  }
  
  // Transform inclusions to the new format
  const inclusions = [];
  if (tour.inclusions && tour.inclusions.length > 0) {
    inclusions.push({
      category: 'Included',
      items: tour.inclusions
    });
  }
  
  // Transform highlights to proper format
  const highlights = tour.highlights || [];
  
  // Determine difficulty level
  let difficulty: 'easy' | 'moderate' | 'challenging' | 'extreme' = 'moderate';
  if (tour.difficulty) {
    const diff = tour.difficulty.toLowerCase();
    if (diff === 'easy') difficulty = 'easy';
    else if (diff === 'moderate') difficulty = 'moderate';
    else if (diff === 'challenging' || diff === 'moderate to challenging') difficulty = 'challenging';
    else if (diff === 'extreme') difficulty = 'extreme';
  }
  
  // Parse group size
  let minGroup = 2;
  let maxGroup = 12;
  if (tour.groupSize) {
    const parts = tour.groupSize.split('-');
    if (parts.length === 2) {
      minGroup = parseInt(parts[0].trim()) || 2;
      maxGroup = parseInt(parts[1].trim()) || 12;
    }
  }
  
  // Create itinerary from existing data
  const itinerary = tour.itinerary?.map((day: any, index: number) => ({
    day: day.day || index + 1,
    title: day.title || `Day ${index + 1}`,
    description: day.description || '',
    activities: day.activities || [],
    accommodation: day.accommodation || '',
    meals: day.meals || []
  })) || [];
  
  // Create faq from existing data
  const faq = tour.faq?.map((item: any) => ({
    question: item.question,
    answer: item.answer
  })) || [];
  
  // Get tag safely (some tours might not have tag)
  const tag = 'tag' in tour ? tour.tag : undefined;

  // Get operator safely
  const operator = 'operator' in tour ? tour.operator : 'Ethiopia Tours';
  
  // Determine availability status - ensure it's one of the allowed values
  let availabilityStatus: 'active' | 'inactive' | 'upcoming' = 'active';
  if (tour.availability?.status) {
    const status = tour.availability.status.toLowerCase();
    if (status === 'active' || status === 'inactive' || status === 'upcoming') {
      availabilityStatus = status as 'active' | 'inactive' | 'upcoming';
    }
  }
  
  return {
    id: tour.id,
    name: tour.name,
    slug: tour.slug,
    description: tour.description,
    shortDescription: tour.description ? tour.description.substring(0, 200) : '',
    images: tour.images || [],
    coverImage: tour.images?.[0] || '',
    duration: tour.duration || '5 Days',
    durationDays: durationDays,
    durationNights: durationDays - 1,
    highlights: highlights,
    tag: tag,
    category: category as any,
    difficulty: difficulty,
    rating: tour.rating || 4.5,
    reviewCount: tour.reviewCount || 0,
    featured: tour.featured || false,
    groupSize: {
      min: minGroup,
      max: maxGroup
    },
    coordinates: tour.coordinates || {
      lat: 9.032,
      lng: 38.7468,
      city: 'Addis Ababa',
      region: 'Addis Ababa'
    },
    itinerary: itinerary,
    inclusions: inclusions,
    exclusions: tour.exclusions || [],
    operator: operator,
    pricing: {
      currency: 'USD',
      adultPrice: Math.round(800 + Math.random() * 500),
      childPrice: Math.round(600 + Math.random() * 300),
      validFrom: new Date(),
      validUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
    },
    availability: {
      status: availabilityStatus,
      startDates: [new Date(), new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)],
      maxGroupSize: maxGroup,
      minGroupSize: minGroup,
      guaranteedDeparture: true
    },
    faq: faq,
    bestTimeToVisit: tour.bestTime || ['October to April'],
    season: tour.season || 'Year-round',
    languages: tour.languages || ['English'],
    departurePoint: tour.departurePoint || 'Addis Ababa',
    whatToBring: tour.whatToBring || [],
    culturalTips: tour.culturalTips || []
  };
}

function transformDestinationData(destination: any) {
  const itinerary = destination.itinerary?.map((day: any, index: number) => ({
    day: day.day || index + 1,
    title: day.title || `Day ${index + 1}`,
    description: day.description || '',
    activities: day.activities || [],
    accommodation: day.accommodation || '',
    meals: day.meals || []
  })) || [];
  
  return {
    id: destination.id,
    name: destination.name,
    slug: destination.slug,
    description: destination.description || '',
    shortDescription: destination.description ? destination.description.substring(0, 200) : '',
    images: destination.images || [],
    coverImage: destination.images?.[0] || '',
    type: destination.type || 'cultural',
    tag: destination.tag || '',
    highlights: destination.highlights || [],
    featured: destination.featured || false,
    coordinates: destination.coordinates || {
      lat: 9.032,
      lng: 38.7468,
      city: 'Addis Ababa',
      region: 'Addis Ababa'
    },
    bestTimeToVisit: destination.bestTimeToVisit || 'Year-round',
    howToGetThere: destination.howToGetThere || '',
    accommodation: destination.accommodation || '',
    nearbyAttractions: destination.nearbyAttractions || [],
    travelTips: destination.travelTips || [],
    localCuisine: destination.localCuisine || '',
    events: destination.events || [],
    itinerary: itinerary
  };
}

function transformFestivalData(festival: any) {
  return {
    id: festival.id,
    name: festival.name,
    slug: festival.slug,
    description: festival.description || '',
    shortDescription: festival.description ? festival.description.substring(0, 200) : '',
    images: festival.images || [],
    coverImage: festival.images?.[0] || '',
    date: festival.date || '',
    season: festival.season || '',
    location: festival.location || '',
    significance: festival.significance || '',
    highlights: festival.highlights || [],
    culturalTips: festival.culturalTips || [],
    featured: festival.featured || false,
    coordinates: festival.coordinates || {
      lat: 9.032,
      lng: 38.7468,
      city: 'Addis Ababa',
      region: 'Addis Ababa'
    },
    bestTimeToVisit: festival.bestTimeToVisit || '',
    duration: festival.duration || '',
    activities: festival.activities || [],
    religiousSignificance: festival.religiousSignificance || '',
    localCustoms: festival.localCustoms || [],
    whatToWear: festival.whatToWear || '',
    photographyTips: festival.photographyTips || '',
    accommodation: festival.accommodation || '',
    transportation: festival.transportation || ''
  };
}

async function seedDatabase() {
  try {
    await connectToDatabase();
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    console.log('🗑️ Clearing existing data...');
    await Tour.deleteMany({});
    await Destination.deleteMany({});
    await Festival.deleteMany({});
    await User.deleteMany({});
    console.log('✅ Cleared existing data');

    // Seed Historical Tours
    console.log('📀 Seeding historical tours...');
    for (const tour of historicalTours) {
      const transformedTour = transformTourData(tour, 'historical');
      await Tour.create(transformedTour);
    }
    console.log(`✅ Seeded ${historicalTours.length} historical tours`);

    // Seed Cultural Tours
    console.log('🎭 Seeding cultural tours...');
    for (const tour of culturalTours) {
      const transformedTour = transformTourData(tour, 'cultural');
      await Tour.create(transformedTour);
    }
    console.log(`✅ Seeded ${culturalTours.length} cultural tours`);

    // Seed Nature Tours
    console.log('🏔️ Seeding nature tours...');
    for (const tour of natureTours) {
      const transformedTour = transformTourData(tour, 'nature');
      await Tour.create(transformedTour);
    }
    console.log(`✅ Seeded ${natureTours.length} nature tours`);

    // Seed Temu Omo Valley Tours
    console.log('🌿 Seeding Temu Omo Valley tours...');
    for (const tour of temuOmoValleyTours) {
      const transformedTour = transformTourData(tour, 'omo-valley');
      await Tour.create(transformedTour);
    }
    console.log(`✅ Seeded ${temuOmoValleyTours.length} Temu Omo Valley tours`);

    // Seed Festivals
    console.log('🎉 Seeding festivals...');
    for (const festival of ethiopianFestivals) {
      const transformedFestival = transformFestivalData(festival);
      await Festival.create(transformedFestival);
    }
    console.log(`✅ Seeded ${ethiopianFestivals.length} festivals`);

    // Seed Destinations - safely get destinations from regions
    console.log('📍 Seeding destinations...');
    let allDestinations: any[] = [];
    try {
      // Try to get destinations from regions
      if (navbarCategoriesData?.destinations?.regions) {
        allDestinations = navbarCategoriesData.destinations.regions.flatMap(
          (region: any) => region.destinations || []
        );
      }
      
      // If no destinations found, use the individual destination arrays
      if (allDestinations.length === 0) {
        // Import destinations directly
        const { 
          northernDestinations, 
          southernDestinations, 
          easternDestinations, 
          westernDestinations, 
          centralDestinations 
        } = await import('./travel_data.js');
        
        allDestinations = [
          ...(northernDestinations || []),
          ...(southernDestinations || []),
          ...(easternDestinations || []),
          ...(westernDestinations || []),
          ...(centralDestinations || [])
        ];
      }
    } catch (error) {
      console.warn('⚠️ Could not load destinations from regions, using fallback');
      // Use a minimal fallback destination
      allDestinations = [
        {
          id: 'dest-omo',
          name: 'Omo Valley',
          slug: 'omo-valley',
          description: 'Cultural heart of Ethiopia with diverse tribes',
          images: ['/Images/omovalley1.webp'],
          type: 'cultural',
          tag: 'Cultural',
          highlights: ['Mursi Tribe', 'Hamer Tribe'],
          featured: true,
          coordinates: { lat: 5.4652, lng: 36.4869, city: 'Jinka', region: 'Omo Valley' }
        }
      ];
    }
    
    for (const dest of allDestinations) {
      const transformedDest = transformDestinationData(dest);
      await Destination.create(transformedDest);
    }
    console.log(`✅ Seeded ${allDestinations.length} destinations`);

    // Seed Admin User
    console.log('👤 Seeding users...');
    const adminPassword = await bcrypt.hash('admin123', 12);
    await User.create({
      email: 'admin@ethiopiatours.com',
      password: adminPassword,
      fullName: 'Admin User',
      role: 'admin',
      isActive: true,
      isVerified: true,
      emailVerifiedAt: new Date(),
      preferences: {
        newsletter: false,
        language: 'en',
        currency: 'USD'
      }
    });

    // Seed Regular User
    const userPassword = await bcrypt.hash('password123', 12);
    await User.create({
      email: 'user@example.com',
      password: userPassword,
      fullName: 'Test User',
      role: 'user',
      isActive: true,
      isVerified: true,
      emailVerifiedAt: new Date(),
      preferences: {
        newsletter: true,
        language: 'en',
        currency: 'USD'
      }
    });
    console.log('✅ Seeded users:');
    console.log('   - admin@ethiopiatours.com / admin123');
    console.log('   - user@example.com / password123');

    // Update indexes
    console.log('🔍 Updating indexes...');
    await Tour.syncIndexes();
    await Destination.syncIndexes();
    await Festival.syncIndexes();
    console.log('✅ Indexes updated');

    // Get statistics
    const tourCount = await Tour.countDocuments();
    const destCount = await Destination.countDocuments();
    const festivalCount = await Festival.countDocuments();
    const userCount = await User.countDocuments();

    console.log('\n📊 Database Statistics:');
    console.log(`   - Tours: ${tourCount}`);
    console.log(`   - Destinations: ${destCount}`);
    console.log(`   - Festivals: ${festivalCount}`);
    console.log(`   - Users: ${userCount}`);

    console.log('\n✨ Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seed function
seedDatabase();