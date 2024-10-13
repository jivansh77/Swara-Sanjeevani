// frontend/src/pages/Therapists.jsx
import React from 'react';

const Therapists = () => {
  // Hardcoded therapist data
  const therapists = [
    {
      id: 1,
      name: 'Dr. Ananya Sharma',
      gender: 'F',
      qualifications: ['MBBS', 'MD Psychiatry'],
      specializations: ['Clinical Psychologist', 'Cognitive Behavioral Therapy'],
      photo_url: 'https://d1iyvy95qprisd.cloudfront.net/avatars-md/8d13d3e3-7709-4e75-8c57-591fe6aa7f6e.webp',
      practice: {
        name: 'Peaceful Minds Clinic',
        address: '123, Linking Road, Bandra West, Mumbai, Maharashtra, India',
      },
      publishedAt: '2023-09-20T12:34:56Z',
    },
    {
      id: 2,
      name: 'Dr. Rohan Mehta',
      gender: 'M',
      qualifications: ['MBBS', 'MD Psychiatry'],
      specializations: ['Behavioral Therapist', 'Family Therapist'],
      photo_url: 'https://ucmscdn.healthgrades.com/2b/80/7e6a150b4634a6d54d47f75812d1/xync5fq-dr-rohan-mehta-cropped.jpg',
      practice: {
        name: 'Harmony Therapy Center',
        address: '456, Park Street, Andheri East, Mumbai, Maharashtra, India',
      },
      publishedAt: '2023-09-18T09:20:30Z',
    },
    {
      id: 3,
      name: 'Dr. Kavita Joshi',
      gender: 'F',
      qualifications: ['BDS', 'MDS Orthodontics'],
      specializations: ['Orthodontist', 'Music Therapist'],
      photo_url: 'https://i1.rgstatic.net/ii/profile.image/11431281222127969-1707116011235_Q512/Kavita-Joshi-2.jpg',
      practice: {
        name: 'Kavita Wellness Center',
        address: '789, Marine Drive, Mumbai, Maharashtra, India',
      },
      publishedAt: '2023-09-15T14:10:20Z',
    },
    {
      id: 4,
      name: 'Dr. Sameer Desai',
      gender: 'M',
      qualifications: ['MBBS', 'MD Psychiatry'],
      specializations: ['Addiction Counselor', 'Clinical Psychologist'],
      photo_url: 'https://www.kemhospitalpune.org/wp-content/uploads/2020/12/Dr_Sameer_Desai_Ortho2.jpg',
      practice: {
        name: 'Serene Mind Therapy',
        address: '321, Colaba Causeway, Mumbai, Maharashtra, India',
      },
      publishedAt: '2023-09-10T11:05:15Z',
    },
    {
      id: 5,
      name: 'Dr. Priya Nair',
      gender: 'F',
      qualifications: ['MBBS', 'MD Psychiatry'],
      specializations: ['Child Psychologist', 'Behavioral Therapist'],
      photo_url: 'https://daffodilshospital.com/wp-content/uploads/2022/04/Priya-Nair-scaled.jpg',
      practice: {
        name: 'Kids Care Therapy',
        address: '654, Juhu Beach, Mumbai, Maharashtra, India',
      },
      publishedAt: '2023-09-08T08:45:50Z',
    },
    {
      id: 6,
      name: 'Dr. Vikram Singh',
      gender: 'M',
      qualifications: ['MBBS', 'MD Psychiatry'],
      specializations: ['Geriatric Psychiatrist', 'Clinical Psychologist'],
      photo_url: 'https://imagesx.practo.com/providers/dr-vikram-singh-neurosurgeon-delhi-a2bc0240-8621-4599-a5b5-9304c19b0535.jpg?i_type=t_100x100-4x',
      practice: {
        name: 'Elderly Care Clinic',
        address: '987, Goregaon East, Mumbai, Maharashtra, India',
      },
      publishedAt: '2023-09-05T16:30:40Z',
    },
    {
      id: 7,
      name: 'Dr. Neha Kapoor',
      gender: 'F',
      qualifications: ['MBBS', 'MD Dermatology'],
      specializations: ['Dermatologist', 'Cosmetic Surgeon'],
      photo_url: 'https://sceh.net/wp-content/uploads/2018/12/neha.jpg',
      practice: {
        name: 'Radiant Skin Clinic',
        address: '147, Navi Mumbai, Maharashtra, India',
      },
      publishedAt: '2023-09-02T10:25:35Z',
    },
    {
      id: 8,
      name: 'Dr. Arjun Rao',
      gender: 'M',
      qualifications: ['MBBS', 'MD Psychiatry'],
      specializations: ['Sports Psychologist', 'Clinical Psychologist'],
      photo_url: 'https://media.licdn.com/dms/image/v2/C5603AQFeCg8Y-A47rg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1589861314786?e=2147483647&v=beta&t=onHpxajv9aWAQzpVl9iSAmmzM9vD-sFPMs_P4J4lUkQ',
      practice: {
        name: 'Active Mind Therapy',
        address: '258, Thane West, Mumbai, Maharashtra, India',
      },
      publishedAt: '2023-08-30T13:15:25Z',
    },
    {
      id: 9,
      name: 'Dr. Meera Iyer',
      gender: 'F',
      qualifications: ['MBBS', 'MD Psychiatry'],
      specializations: ['Marriage Counselor', 'Clinical Psychologist'],
      photo_url: 'https://cdn3.rainbowhospitals.in/user/doctor/large_images/20x5YIFPE2b22MMFayvztwru6KFEhh8afEYlCXBV.jpg',
      practice: {
        name: 'Relationship Harmony Clinic',
        address: '369, Borivali West, Mumbai, Maharashtra, India',
      },
      publishedAt: '2023-08-28T07:50:10Z',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold mb-12 text-center text-accent">Therapists Near You</h2>
      {therapists.length === 0 ? (
        <h3>No therapists available.</h3>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapists.map((therapist) => (
            <div
              key={therapist.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 hover:shadow-lg transition duration-300"
            >
              <img
                src={therapist.photo_url}
                alt={`${therapist.name}'s photo`}
                className="w-32 h-32 object-cover rounded-full mx-auto mt-4"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  {therapist.name}
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Gender:</strong> {therapist.gender}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Qualifications:</strong> {therapist.qualifications.join(', ')}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Specializations:</strong> {therapist.specializations.join(', ')}
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Practice:</strong> {therapist.practice.name}
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Address:</strong> {therapist.practice.address}
                </p>
                <a
                  href={`mailto:contact@${therapist.name.replace(/\s/g, '').toLowerCase()}.com`}
                  className="inline-block px-3 bg-accent text-primary py-2 rounded-lg font-semibold hover:bg-secondary hover:text-accent transition duration-300"
                >
                  Contact Now
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Therapists;