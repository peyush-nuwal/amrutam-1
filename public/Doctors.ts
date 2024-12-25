interface Doctor {
  id: number;
  name: string;
  gender: "Male" | "Female";
  photo: string;
  specialization: string;
  followers: number;
  following: number;
  posts: number;
  fees: number;
  location: string;
  language: string[];
  availability: { date: string; morning: string[]; evening: string[] }[];
  experience: number;
  reviews: {
    name: string;
    date: string;
    consultedFor: string;
    review: string;
  }[];
  previousExperience: {
    place: string;
    position: string;
    startYear: number;
    endYear?: number;
  }[];
  rating: number;
  concernsITreat: string[];
  aboutMe: string;
  totalReviews: number;
}

export const Doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Bruce Willis",
    gender: "Male",
    photo: "/DocMale.jpg",
    specialization: "Gynecologist",
    followers: 18000,
    following: 850,
    posts: 250,
    fees: 699,
    location: "Surat",
    language: ["English", "Hindi", "Telugu"],
    availability: [
      {
        date: "2024-12-20",
        morning: ["10:00 AM", "12:00 PM"],
        evening: ["02:00 PM", "04:00 PM", "06:00 PM"],
      },
      {
        date: "2024-12-21",
        morning: ["08:00 AM"],
        evening: ["02:00 PM"],
      },
      {
        date: "2024-12-22",
        morning: ["09:00 AM"],
        evening: ["03:00 PM", "05:00 PM"],
      },
      {
        date: "2024-12-23",
        morning: ["09:30 AM", "11:30 AM", "01:00 PM"],
        evening: ["03:00 PM", "05:00 PM", "07:00 PM", "09:00 PM"],
      },
      {
        date: "2024-12-24",
        morning: ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM"],
        evening: ["04:00 PM", "06:00 PM"],
      },
      {
        date: "2024-12-25",
        morning: ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM"],
        evening: ["04:00 PM", "06:00 PM", "08:00 PM"],
      },
      {
        date: "2024-12-26",
        morning: ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM"],
        evening: ["04:00 PM", "06:00 PM", "08:00 PM", "10:00 PM"],
      },
      {
        date: "2024-12-27",
        morning: ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"],
        evening: ["06:00 PM", "08:00 PM", "10:00 PM"],
      },
    ],

    experience: 7,
    reviews: [
      {
        name: "Alicent Hightower",
        date: "2023-01-20",
        consultedFor: "Pregnancy",
        review:
          "Might be a bit early to confirm, but I can already see noticeable improvements. I’ll share more updates after using the treatment for longer.",
      },
      {
        name: "Daenerys Targaryen",
        date: "2023-04-18",
        consultedFor: "Skin Care",
        review:
          "Dr. Bruce Willis provided professional and effective treatment. I’ve already noticed improvements in my skin and can’t wait to see more progress.",
      },
    ],
    previousExperience: [
      {
        place: "City Hospital, Surat",
        position: "Senior Gynecologist",
        startYear: 2016,
        endYear: 2020,
      },
      {
        place: "Women's Care Clinic",
        position: "Resident Doctor",
        startYear: 2020,
        endYear: 2023,
      },
      {
        place: "Sunshine Hospital",
        position: "Consultant Gynecologist",
        startYear: 2023,
        endYear: undefined,
      },
    ],
    rating: 4.5,
    concernsITreat: ["Pregnancy Care", "Menstrual Disorders", "Infertility"],
    aboutMe:
      "Hello I am Dr. Bruce Willis, a Gynecologist at Sanjivni Hospital Surat. Love to work with all my hospital staff and senior doctors. Completed my graduation in Gynecologist Medicine from the University of Health Sciences.",
    totalReviews: 15,
  },
  {
    id: 2,
    name: "Dr. Ananya Sharma",
    gender: "Female",
    photo: "/DocFemale.png",
    specialization: "Cardiologist",
    followers: 1200,
    following: 22000,
    posts: 300,
    fees: 1500,
    location: "Mumbai",
    language: ["Hindi", "English"],
   availability: [
  {
    date: "2024-12-20",
    morning: ["08:00 AM", "10:00 AM"],
    evening: ["02:00 PM", "04:00 PM", "06:00 PM"],
  },
  {
    date: "2024-12-21",
    morning: ["09:00 AM", "11:00 AM"],
    evening: ["02:00 PM", "04:00 PM"],
  },
  {
    date: "2024-12-22",
    morning: ["10:00 AM", "12:00 PM", "02:00 PM"],
    evening: ["03:00 PM", "05:00 PM"],
  },
  {
    date: "2024-12-23",
    morning: ["09:30 AM", "11:30 AM"],
    evening: ["03:00 PM", "05:00 PM", "07:00 PM", "09:00 PM"],
  },
  {
    date: "2024-12-24",
    morning: ["08:00 AM", "10:00 AM", "12:00 PM"],
    evening: ["04:00 PM", "06:00 PM"],
  },
  {
    date: "2024-12-20",
    morning: ["09:00 AM", "11:00 AM", "01:00 PM"],
    evening: ["02:00 PM", "04:00 PM"],
  },
  {
    date: "2024-12-21",
    morning: ["08:00 AM", "10:00 AM"],
    evening: ["03:00 PM", "05:00 PM", "07:00 PM"],
  },
  {
    date: "2024-12-22",
    morning: ["09:00 AM", "11:00 AM"],
    evening: ["01:00 PM", "03:00 PM", "05:00 PM"],
  },
  {
    date: "2024-12-23",
    morning: ["08:30 AM", "10:30 AM", "12:30 PM"],
    evening: ["04:00 PM", "06:00 PM"],
  },
  {
    date: "2024-12-24",
    morning: ["09:00 AM", "11:00 AM", "01:00 PM"],
    evening: ["02:00 PM", "04:00 PM"],
  },
]
,

    experience: 10,
    reviews: [
      {
        name: "Ankita Verma",
        date: "2023-08-15",
        consultedFor: "Heart Checkup",
        review:
          "Dr. Sharma is highly patient and knowledgeable. Felt very reassured after the consultation.",
      },
      {
        name: "Meera Joshi",
        date: "2023-10-11",
        consultedFor: "Blood Pressure",
        review:
          "Very attentive and thorough in her approach. Highly satisfied with the care.",
      },
      {
        name: "Riya Kapoor",
        date: "2023-12-01",
        consultedFor: "Chest Pain",
        review:
          "Excellent care and guidance throughout. Highly recommended for cardiac issues.",
      },
      {
        name: "Neha Gupta",
        date: "2023-11-05",
        consultedFor: "Heart Palpitations",
        review:
          "Impressed by her exceptional diagnostic skills and calm demeanor.",
      },
      {
        name: "Simran Singh",
        date: "2023-12-10",
        consultedFor: "Arrhythmia",
        review:
          "Detailed and compassionate care. Truly thankful for her expertise.",
      },
    ],
    previousExperience: [
      {
        place: "HeartCare Hospital",
        position: "Junior Cardiologist",
        startYear: 2013,
        endYear: 2016,
      },
      {
        place: "Mumbai General Hospital",
        position: "Consultant Cardiologist",
        startYear: 2016,
        endYear: 2021,
      },
      {
        place: "Apollo Heart Institute",
        position: "Senior Cardiologist",
        startYear: 2021,
        endYear: undefined,
      },
    ],
    rating: 4.8,
    concernsITreat: ["Heart Disease", "Hypertension", "Arrhythmia"],
    aboutMe:
      "Hello I am Dr. Ananya Sharma, a Cardiologist at Apollo Heart Institute Mumbai. Love to work with all my hospital staff and senior doctors. Completed my graduation in Cardiovascular Medicine from the National Medical College.",
    totalReviews: 18,
  },
  {
    id: 3,
    name: "Dr. Ravi Gupta",
    gender: "Male",
    photo: "/DocMale2.jpg",
    specialization: "Orthopedic Surgeon",
    followers: 10000,
    following: 500,
    posts: 200,
    fees: 1200,
    location: "Jaipur",
    language: ["English", "Hindi"],
    availability: [
      {
        date: "2024-12-20",
        morning: ["10:00 AM", "12:00 PM"],
        evening: ["02:00 PM", "04:00 PM", "06:00 PM"],
      },
      {
        date: "2024-12-21",
        morning: ["08:00 AM"],
        evening: ["02:00 PM"],
      },
      {
        date: "2024-12-22",
        morning: ["09:00 AM"],
        evening: ["03:00 PM", "05:00 PM"],
      },
      {
        date: "2024-12-23",
        morning: ["09:30 AM", "11:30 AM", "01:00 PM"],
        evening: ["03:00 PM", "05:00 PM", "07:00 PM", "09:00 PM"],
      },
      {
        date: "2024-12-24",
        morning: ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM"],
        evening: ["04:00 PM", "06:00 PM"],
      },
      {
        date: "2024-12-25",
        morning: ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM"],
        evening: ["04:00 PM", "06:00 PM", "08:00 PM"],
      },
      {
        date: "2024-12-26",
        morning: ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM"],
        evening: ["04:00 PM", "06:00 PM", "08:00 PM", "10:00 PM"],
      },
      {
        date: "2024-12-27",
        morning: ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"],
        evening: ["06:00 PM", "08:00 PM", "10:00 PM"],
      },
    ],

    experience: 12,
    reviews: [
      {
        name: "Ankita Sharma",
        date: "2023-04-05",
        consultedFor: "Joint Pain",
        review:
          "It’s been a short time since I started treatment, but I can already feel relief. Excited to see further progress.",
      },
      {
        name: "Megha Kapoor",
        date: "2023-06-10",
        consultedFor: "Bone Fracture",
        review:
          "The diagnosis was quick, and the care provided was excellent. Recovery has been smooth so far.",
      },
      {
        name: "Nisha Verma",
        date: "2023-07-15",
        consultedFor: "Back Pain",
        review:
          "Noticeable improvement after just a few visits. Dr. Gupta is highly skilled and attentive.",
      },
      {
        name: "Ritika Singh",
        date: "2023-09-12",
        consultedFor: "Sports Injury",
        review:
          "Dr. Gupta is professional and caring. My injury is healing well, and I appreciate his guidance.",
      },
      {
        name: "Priya Joshi",
        date: "2023-10-18",
        consultedFor: "Fractured Wrist",
        review:
          "Recovery has been excellent, thanks to Dr. Gupta’s expertise. Highly recommended for orthopedic issues.",
      },
    ],

    previousExperience: [
      {
        place: "Jaipur Orthopedic Centre",
        position: "Junior Orthopedic Surgeon",
        startYear: 2010,
        endYear: 2014,
      },
      {
        place: "City Care Hospital",
        position: "Consultant Orthopedic Surgeon",
        startYear: 2014,
        endYear: 2019,
      },
      {
        place: "Fortis Bone & Joint Clinic",
        position: "Senior Orthopedic Surgeon",
        startYear: 2019,
        endYear: undefined,
      },
    ],
    rating: 4.6,
    concernsITreat: ["Joint Pain", "Arthritis", "Fractures"],
    aboutMe:
      "Hello I am Dr. Ravi Gupta, an Orthopedic Surgeon at Fortis Bone & Joint Clinic Jaipur. Love to work with all my hospital staff and senior doctors. Completed my graduation in Orthopedic Medicine from the All India Institute of Medical Sciences.",
    totalReviews: 14,
  },

  {
    id: 4,
    name: "Dr. Priya Mehta",
    gender: "Female",
    photo: "/DocFemale2.jpg",
    specialization: "Dermatologist",
    followers: 25000,
    following: 1800,
    posts: 150,
    fees: 900,
    location: "Delhi",
    language: ["Hindi", "English", "Punjabi"],
   availability: [
  {
    date: "2024-12-20",
    morning: ["08:00 AM", "10:00 AM"],
    evening: ["02:00 PM", "04:00 PM", "06:00 PM"],
  },
  {
    date: "2024-12-21",
    morning: ["09:00 AM", "11:00 AM"],
    evening: ["02:00 PM", "04:00 PM"],
  },
  {
    date: "2024-12-22",
    morning: ["10:00 AM", "12:00 PM", "02:00 PM"],
    evening: ["03:00 PM", "05:00 PM"],
  },
  {
    date: "2024-12-23",
    morning: ["09:30 AM", "11:30 AM"],
    evening: ["03:00 PM", "05:00 PM", "07:00 PM", "09:00 PM"],
  },
  {
    date: "2024-12-24",
    morning: ["08:00 AM", "10:00 AM", "12:00 PM"],
    evening: ["04:00 PM", "06:00 PM"],
  },
  {
    date: "2024-12-20",
    morning: ["09:00 AM", "11:00 AM", "01:00 PM"],
    evening: ["02:00 PM", "04:00 PM"],
  },
  {
    date: "2024-12-21",
    morning: ["08:00 AM", "10:00 AM"],
    evening: ["03:00 PM", "05:00 PM", "07:00 PM"],
  },
  {
    date: "2024-12-22",
    morning: ["09:00 AM", "11:00 AM"],
    evening: ["01:00 PM", "03:00 PM", "05:00 PM"],
  },
  {
    date: "2024-12-23",
    morning: ["08:30 AM", "10:30 AM", "12:30 PM"],
    evening: ["04:00 PM", "06:00 PM"],
  },
  {
    date: "2024-12-24",
    morning: ["09:00 AM", "11:00 AM", "01:00 PM"],
    evening: ["02:00 PM", "04:00 PM"],
  },
]
,

    experience: 8,
    reviews: [
      {
        name: "Simran Kaur",
        date: "2023-03-15",
        consultedFor: "Acne Treatment",
        review:
          "It’s been a few weeks since my treatment, and I can already see a significant improvement in my skin. I'm hopeful for even better results ahead!",
      },
      {
        name: "Tanuja Sharma",
        date: "2023-07-25",
        consultedFor: "Hair Loss",
        review:
          "Dr. Mehta’s diagnosis was spot-on, and the treatment has shown positive results. My hair feels healthier already!",
      },
      {
        name: "Sanya Patel",
        date: "2023-09-10",
        consultedFor: "Eczema",
        review:
          "Very professional and effective care. The treatment is working well, and I feel much more comfortable now.",
      },
    ],

    previousExperience: [
      {
        place: "SkinGlow Clinic",
        position: "Dermatology Resident",
        startYear: 2015,
        endYear: 2018,
      },
      {
        place: "Delhi Medical Hospital",
        position: "Dermatologist",
        startYear: 2018,
        endYear: 2022,
      },
      {
        place: "ClearSkin Centre",
        position: "Senior Dermatologist",
        startYear: 2022,
        endYear: undefined,
      },
    ],
    rating: 4.7,
    concernsITreat: ["Acne", "Eczema", "Psoriasis", "Hair Loss"],
    aboutMe:
      "Hello I am Dr. Priya Mehta, a Dermatologist at ClearSkin Centre Delhi. Love to work with all my hospital staff and senior doctors. Completed my graduation in Dermatological Medicine from the University of Delhi.",
    totalReviews: 12,
  },
  {
    id: 5,
    name: "Dr. Priya Mehta",
    gender: "Female",
    photo: "/DocFemale3.jpg",
    specialization: "Dermatologist",
    followers: 25000,
    following: 1800,
    posts: 150,
    fees: 900,
    location: "Delhi",
    language: ["Hindi", "English", "Punjabi"],
    availability: [
      {
        date: "2024-12-20",
        morning: ["10:00 AM", "12:00 PM"],
        evening: ["02:00 PM", "04:00 PM", "06:00 PM"],
      },
      {
        date: "2024-12-21",
        morning: ["08:00 AM"],
        evening: ["02:00 PM"],
      },
      {
        date: "2024-12-22",
        morning: ["09:00 AM"],
        evening: ["03:00 PM", "05:00 PM"],
      },
      {
        date: "2024-12-23",
        morning: ["09:30 AM", "11:30 AM", "01:00 PM"],
        evening: ["03:00 PM", "05:00 PM", "07:00 PM", "09:00 PM"],
      },
      {
        date: "2024-12-24",
        morning: ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM"],
        evening: ["04:00 PM", "06:00 PM"],
      },
      {
        date: "2024-12-25",
        morning: ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM"],
        evening: ["04:00 PM", "06:00 PM", "08:00 PM"],
      },
      {
        date: "2024-12-26",
        morning: ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM"],
        evening: ["04:00 PM", "06:00 PM", "08:00 PM", "10:00 PM"],
      },
      {
        date: "2024-12-27",
        morning: ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"],
        evening: ["06:00 PM", "08:00 PM", "10:00 PM"],
      },
    ],

    experience: 8,
    reviews: [
      {
        name: "Simran Kaur",
        date: "2023-03-15",
        consultedFor: "Acne Treatment",
        review:
          "I’m seeing great improvements in my skin after the treatment. The results have been amazing, and my skin feels much better than before!",
      },
      {
        name: "Tanuja Sharma",
        date: "2023-05-20",
        consultedFor: "Eczema",
        review:
          "Dr. Mehta is extremely knowledgeable and offered great advice. Her treatment was very effective, and I feel so much better.",
      },
      {
        name: "Sanya Patel",
        date: "2023-07-10",
        consultedFor: "Psoriasis",
        review:
          "Dr. Mehta took the time to explain everything in detail. The treatment has been really effective, and I’m very happy with the results.",
      },
    ],

    previousExperience: [
      {
        place: "Delhi Skin Institute",
        position: "Junior Dermatologist",
        startYear: 2016,
        endYear: 2019,
      },
      {
        place: "Glow Skin Clinic",
        position: "Consultant Dermatologist",
        startYear: 2019,
        endYear: 2022,
      },
      {
        place: "Radiant Skin Center",
        position: "Senior Dermatologist",
        startYear: 2022,
        endYear: undefined,
      },
    ],
    rating: 4.7,
    concernsITreat: ["Acne", "Eczema", "Psoriasis", "Hair Loss"],
    aboutMe:
      "Hello I am Dr. Priya Mehta, a Dermatologist at Radiant Skin Center Delhi. Love to work with all my hospital staff and senior doctors. Completed my graduation in Dermatology from the National Skin Academy.",
    totalReviews: 12,
  },
  {
    id: 6,
    name: "Dr. Mohan Desai",
    gender: "Male",
    photo: "/DocMale3.jpg",
    specialization: "Neurologist",
    followers: 8000,
    following: 300,
    posts: 100,
    fees: 2000,
    location: "Ahmedabad",
    language: ["Gujarati", "Hindi", "English"],
    availability: [
  {
    date: "2024-12-20",
    morning: ["08:00 AM", "10:00 AM"],
    evening: ["02:00 PM", "04:00 PM", "06:00 PM"],
  },
  {
    date: "2024-12-21",
    morning: ["09:00 AM", "11:00 AM"],
    evening: ["02:00 PM", "04:00 PM"],
  },
  {
    date: "2024-12-22",
    morning: ["10:00 AM", "12:00 PM", "02:00 PM"],
    evening: ["03:00 PM", "05:00 PM"],
  },
  {
    date: "2024-12-23",
    morning: ["09:30 AM", "11:30 AM"],
    evening: ["03:00 PM", "05:00 PM", "07:00 PM", "09:00 PM"],
  },
  {
    date: "2024-12-24",
    morning: ["08:00 AM", "10:00 AM", "12:00 PM"],
    evening: ["04:00 PM", "06:00 PM"],
  },
  {
    date: "2024-12-20",
    morning: ["09:00 AM", "11:00 AM", "01:00 PM"],
    evening: ["02:00 PM", "04:00 PM"],
  },
  {
    date: "2024-12-21",
    morning: ["08:00 AM", "10:00 AM"],
    evening: ["03:00 PM", "05:00 PM", "07:00 PM"],
  },
  {
    date: "2024-12-22",
    morning: ["09:00 AM", "11:00 AM"],
    evening: ["01:00 PM", "03:00 PM", "05:00 PM"],
  },
  {
    date: "2024-12-23",
    morning: ["08:30 AM", "10:30 AM", "12:30 PM"],
    evening: ["04:00 PM", "06:00 PM"],
  },
  {
    date: "2024-12-24",
    morning: ["09:00 AM", "11:00 AM", "01:00 PM"],
    evening: ["02:00 PM", "04:00 PM"],
  },
]
,
    experience: 15,
    reviews: [
      {
        name: "Nina Patel",
        date: "2023-09-10",
        consultedFor: "Migraine",
        review:
          "Dr. Desai was incredibly thorough and kind. I’ve been dealing with migraines for years, and his treatment made a significant difference. Highly recommend!",
      },
      {
        name: "Seema Desai",
        date: "2023-11-20",
        consultedFor: "Seizures",
        review:
          "I felt very well taken care of. Dr. Desai is not only knowledgeable but also compassionate. He explained everything clearly and made me feel at ease.",
      },
      {
        name: "Priya Sharma",
        date: "2023-12-05",
        consultedFor: "Headache",
        review:
          "Dr. Desai diagnosed my condition quickly and provided a highly effective treatment plan. I’m so grateful for the relief I’ve found.",
      },
      {
        name: "Kavita Mehta",
        date: "2023-12-15",
        consultedFor: "Dementia",
        review:
          "Dr. Desai is an exceptionally skilled neurologist. His experience really showed in his care and approach to my condition. I feel much better under his treatment.",
      },
    ],

    previousExperience: [
      {
        place: "Ahmedabad Neuro Clinic",
        position: "Junior Neurologist",
        startYear: 2008,
        endYear: 2013,
      },
      {
        place: "Brain & Spine Hospital",
        position: "Consultant Neurologist",
        startYear: 2013,
        endYear: 2020,
      },
      {
        place: "NeuroLife Center",
        position: "Senior Neurologist",
        startYear: 2020,
        endYear: undefined,
      },
    ],
    rating: 4.9,
    concernsITreat: ["Migraine", "Seizures", "Neuropathy"],
    aboutMe:
      "Hello I am Dr. Mohan Desai, a Neurologist at NeuroLife Center Ahmedabad. Love to work with all my hospital staff and senior doctors. Completed my graduation in Neurology from the Gujarat Medical College.",
    totalReviews: 20,
  },
  {
    id: 7,
    name: "Dr. Ananya Sharma",
    gender: "Female",
    photo: "/DocFemale.png",
    specialization: "Pediatrician",
    followers: 15000,
    following: 2200,
    posts: 120,
    fees: 1200,
    location: "Mumbai",
    language: ["Hindi", "English", "Marathi"],
    availability: [
      {
        date: "2024-12-20",
        morning: ["10:00 AM", "12:00 PM"],
        evening: ["02:00 PM", "04:00 PM", "06:00 PM"],
      },
      {
        date: "2024-12-21",
        morning: ["08:00 AM"],
        evening: ["02:00 PM"],
      },
      {
        date: "2024-12-22",
        morning: ["09:00 AM"],
        evening: ["03:00 PM", "05:00 PM"],
      },
      {
        date: "2024-12-23",
        morning: ["09:30 AM", "11:30 AM", "01:00 PM"],
        evening: ["03:00 PM", "05:00 PM", "07:00 PM", "09:00 PM"],
      },
      {
        date: "2024-12-24",
        morning: ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM"],
        evening: ["04:00 PM", "06:00 PM"],
      },
      {
        date: "2024-12-25",
        morning: ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM"],
        evening: ["04:00 PM", "06:00 PM", "08:00 PM"],
      },
      {
        date: "2024-12-26",
        morning: ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM"],
        evening: ["04:00 PM", "06:00 PM", "08:00 PM", "10:00 PM"],
      },
      {
        date: "2024-12-27",
        morning: ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"],
        evening: ["06:00 PM", "08:00 PM", "10:00 PM"],
      },
    ],

    experience: 10,
    reviews: [
      {
        name: "Leena Kapoor",
        date: "2023-06-10",
        consultedFor: "Child Growth",
        review:
          "Dr. Sharma is excellent with children. She took the time to explain everything about my child's growth in detail and made us feel at ease. Highly recommended!",
      },
      {
        name: "Shalini Agarwal",
        date: "2023-08-18",
        consultedFor: "Vaccination",
        review:
          "Very professional and caring. Dr. Sharma made the entire vaccination process smooth for my child. I am grateful for her kindness and expertise.",
      },
      {
        name: "Nisha Desai",
        date: "2023-10-01",
        consultedFor: "Cold & Cough",
        review:
          "Dr. Sharma is fantastic! She made my son feel extremely comfortable during his checkup, and the treatment was effective. A wonderful pediatrician!",
      },
    ],
    previousExperience: [
      {
        place: "Mumbai Children’s Hospital",
        position: "Junior Pediatrician",
        startYear: 2013,
        endYear: 2016,
      },
      {
        place: "Happy Kids Clinic",
        position: "Consultant Pediatrician",
        startYear: 2016,
        endYear: 2022,
      },
      {
        place: "Child Health Care Center",
        position: "Senior Pediatrician",
        startYear: 2022,
        endYear: undefined,
      },
    ],
    rating: 4.8,
    concernsITreat: [
      "Child Growth",
      "Vaccination",
      "Cold & Cough",
      "Skin Conditions",
    ],
    aboutMe:
      "Hello, I am Dr. Ananya Sharma, a Pediatrician at Child Health Care Center in Mumbai. I am passionate about taking care of children and helping them grow healthy. I completed my Pediatric specialization from the Mumbai Medical Institute.",
    totalReviews: 18,
  },
  {
    id: 8,
    name: "Dr. Rakesh Yadav",
    gender: "Male",
    photo: "/DocMale.jpg",
    specialization: "Orthopedic Surgeon",
    followers: 12000,
    following: 1500,
    posts: 90,
    fees: 2500,
    location: "Chennai",
    language: ["Tamil", "English", "Hindi"],
    availability: [
  {
    date: "2024-12-20",
    morning: ["08:00 AM", "10:00 AM"],
    evening: ["02:00 PM", "04:00 PM", "06:00 PM"],
  },
  {
    date: "2024-12-21",
    morning: ["09:00 AM", "11:00 AM"],
    evening: ["02:00 PM", "04:00 PM"],
  },
  {
    date: "2024-12-22",
    morning: ["10:00 AM", "12:00 PM", "02:00 PM"],
    evening: ["03:00 PM", "05:00 PM"],
  },
  {
    date: "2024-12-23",
    morning: ["09:30 AM", "11:30 AM"],
    evening: ["03:00 PM", "05:00 PM", "07:00 PM", "09:00 PM"],
  },
  {
    date: "2024-12-24",
    morning: ["08:00 AM", "10:00 AM", "12:00 PM"],
    evening: ["04:00 PM", "06:00 PM"],
  },
  {
    date: "2024-12-20",
    morning: ["09:00 AM", "11:00 AM", "01:00 PM"],
    evening: ["02:00 PM", "04:00 PM"],
  },
  {
    date: "2024-12-21",
    morning: ["08:00 AM", "10:00 AM"],
    evening: ["03:00 PM", "05:00 PM", "07:00 PM"],
  },
  {
    date: "2024-12-22",
    morning: ["09:00 AM", "11:00 AM"],
    evening: ["01:00 PM", "03:00 PM", "05:00 PM"],
  },
  {
    date: "2024-12-23",
    morning: ["08:30 AM", "10:30 AM", "12:30 PM"],
    evening: ["04:00 PM", "06:00 PM"],
  },
  {
    date: "2024-12-24",
    morning: ["09:00 AM", "11:00 AM", "01:00 PM"],
    evening: ["02:00 PM", "04:00 PM"],
  },
]
,
    experience: 18,
    reviews: [
      {
        name: "Rajeshwari Kumari",
        date: "2023-04-15",
        consultedFor: "Knee Pain",
        review:
          "Dr. Yadav is highly skilled and compassionate. He helped me recover quickly from my knee pain. I felt very well taken care of throughout the treatment.",
      },
      {
        name: "Aishwarya Reddy",
        date: "2023-07-22",
        consultedFor: "Back Surgery",
        review:
          "Dr. Yadav performed an excellent surgery and provided great aftercare. I am highly satisfied with the results. He truly cares about his patients.",
      },
      {
        name: "Anjali Sharma",
        date: "2023-09-05",
        consultedFor: "Fracture",
        review:
          "I had a fracture treated by Dr. Yadav. The treatment was very professional, and I had a quick recovery with minimal pain. Very pleased with the care.",
      },
    ],
    previousExperience: [
      {
        place: "Chennai Orthopedic Hospital",
        position: "Junior Orthopedic Surgeon",
        startYear: 2005,
        endYear: 2010,
      },
      {
        place: "Spine & Joint Clinic",
        position: "Consultant Orthopedic Surgeon",
        startYear: 2010,
        endYear: 2018,
      },
      {
        place: "Yadav Orthopedic Center",
        position: "Senior Orthopedic Surgeon",
        startYear: 2018,
        endYear: undefined,
      },
    ],
    rating: 4.9,
    concernsITreat: [
      "Knee Pain",
      "Back Surgery",
      "Fractures",
      "Sports Injuries",
    ],
    aboutMe:
      "Hi, I am Dr. Rakesh Yadav, an orthopedic surgeon based in Chennai. I specialize in joint surgeries and fractures. I graduated from the prestigious Madras Medical College and have years of experience treating orthopedic conditions.",
    totalReviews: 22,
  },
];