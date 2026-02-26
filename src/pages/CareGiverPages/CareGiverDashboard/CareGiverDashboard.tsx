import React, { useMemo, useState } from "react";
import TopTabs from "./TopTabs";
import {Badge, StatusBadge} from "./StatusBadge";
import Pagination from "./Pagination";
import { X } from "lucide-react";

const DATA = {
 "Applied Jobs": [
  {
    id: 1,
    job: "Part-Time Nanny for 4 Kids",
    family: "Johnson Family",
    date: "Sep 10, 2025",
    status: "Rejected",
    serviceType: "Child Caregiver",
    jobStatus: "Open",
    location: "Austin, Texas",
    numberOfChildrens: 4,
    ageGroup: "Toddler (1–3 years), School-age (5–12 years)",
    experience: "3+ years",
    compensation: "$22–$30/hr",
    duration: "Part-time, ongoing",
    duties: [
      "Meal preparation",
      "Homework assistance",
      "Playtime supervision",
      "Light housekeeping"
    ],
    additionalNotes: "Family prefers caregiver with patience and multitasking skills.",
    details: "Experience: 3 years. References available."
  },
  {
    id: 2,
    job: "Full-Time Infant Care",
    family: "Patel Family",
    date: "Sep 08, 2025",
    status: "Hired",
    serviceType: "Infant Caregiver",
    jobStatus: "Open",
    location: "Seattle, Washington",
    numberOfChildrens: 1,
    ageGroup: "Infant (0–12 months)",
    experience: "4+ years",
    compensation: "$25–$32/hr",
    duration: "Full-time",
    duties: [
      "Feeding & bottle prep",
      "Diaper changes",
      "Sleep schedule monitoring",
      "Daily infant care logs"
    ],
    additionalNotes: "Family prefers someone experienced with newborn routines.",
    details: "Starts immediately. Live-in role."
  },
  {
    id: 3,
    job: "Infant Specialist",
    family: "Brown Family",
    date: "Sep 09, 2025",
    status: "Pending",
    serviceType: "Infant Caregiver",
    jobStatus: "Open",
    location: "San Diego, California",
    numberOfChildrens: 1,
    ageGroup: "Infant (0–12 months)",
    experience: "5+ years",
    compensation: "$30–$38/hr",
    duration: "Temporary, 6 weeks",
    duties: [
      "Sleep training",
      "Feeding schedule management",
      "Soothing techniques",
      "Tracking growth milestones"
    ],
    additionalNotes: "Expertise in infant sleep training preferred.",
    details: "Interview scheduled for next week."
  },
  {
    id: 4,
    job: "Weekend Babysitter",
    family: "Smith Family",
    date: "Sep 11, 2025",
    status: "Hired",
    serviceType: "Child Caregiver",
    jobStatus: "Open",
    location: "Denver, Colorado",
    numberOfChildrens: 2,
    ageGroup: "Preschool (3–5 years)",
    experience: "2+ years",
    compensation: "$18–$24/hr",
    duration: "Weekends only",
    duties: [
      "Engaging playtime",
      "Light meal prep",
      "Bedtime routines"
    ],
    additionalNotes: "Weekend availability required.",
    details: "Weekend nights only."
  },
  {
    id: 5,
    job: "After-school Nanny",
    family: "Lopez Family",
    date: "Sep 12, 2025",
    status: "Pending",
    serviceType: "Child Caregiver",
    jobStatus: "Open",
    location: "Phoenix, Arizona",
    numberOfChildrens: 2,
    ageGroup: "School-age (5–12 years)",
    experience: "3+ years",
    compensation: "$20–$28/hr",
    duration: "Weekdays, 3 PM – 7 PM",
    duties: [
      "Homework help",
      "Snack preparation",
      "School pickup"
    ],
    additionalNotes: "Reliable transportation required.",
    details: "2 children, homework help."
  },
  {
    id: 6,
    job: "Holiday Childcare",
    family: "Rogers Family",
    date: "Sep 05, 2025",
    status: "Rejected",
    serviceType: "Child Caregiver",
    jobStatus: "Open",
    location: "Portland, Oregon",
    numberOfChildrens: 3,
    ageGroup: "Toddler, School-age",
    experience: "2+ years",
    compensation: "$23–$30/hr",
    duration: "Holiday season",
    duties: [
      "Holiday activity supervision",
      "Playtime engagement",
      "Light cleaning"
    ],
    additionalNotes: "Seasonal schedule fluctuates.",
    details: "Seasonal role."
  },
  {
    id: 7,
    job: "Newborn Night Care",
    family: "Singh Family",
    date: "Sep 03, 2025",
    status: "Hired",
    serviceType: "Infant Caregiver",
    jobStatus: "Open",
    location: "Charlotte, North Carolina",
    numberOfChildrens: 1,
    ageGroup: "Newborn (0–3 months)",
    experience: "5+ years",
    compensation: "$28–$35/hr",
    duration: "Night shifts",
    duties: [
      "Overnight monitoring",
      "Bottle feeding",
      "Sleep conditioning"
    ],
    additionalNotes: "Quiet household environment.",
    details: "Night shifts only."
  },
  {
    id: 8,
    job: "Daytime Babysitter",
    family: "Kim Family",
    date: "Sep 15, 2025",
    status: "Pending",
    serviceType: "Child Caregiver",
    jobStatus: "Open",
    location: "Miami, Florida",
    numberOfChildrens: 1,
    ageGroup: "Toddler (1–3 years)",
    experience: "3+ years",
    compensation: "$20–$26/hr",
    duration: "5 hours/day",
    duties: [
      "Outdoor activities",
      "Snack preparation",
      "Nap schedule support"
    ],
    additionalNotes: "Family prefers energetic caregiver.",
    details: "5 hours per day."
  },
  {
    id: 9,
    job: "Toddler Care Expert",
    family: "Perez Family",
    date: "Sep 02, 2025",
    status: "Rejected",
    serviceType: "Toddler Caregiver",
    jobStatus: "Open",
    location: "Chicago, Illinois",
    numberOfChildrens: 1,
    ageGroup: "Toddler (1–3 years)",
    experience: "4+ years",
    compensation: "$24–$32/hr",
    duration: "Ongoing",
    duties: [
      "Potty training support",
      "Educational play",
      "Routine structure"
    ],
    additionalNotes: "Prior toddler specialization preferred.",
    details: "Experience with toddlers required."
  },
  {
    id: 10,
    job: "Evening Caregiver",
    family: "Wright Family",
    date: "Sep 07, 2025",
    status: "Hired",
    serviceType: "Child Caregiver",
    jobStatus: "Open",
    location: "Atlanta, Georgia",
    numberOfChildrens: 2,
    ageGroup: "Preschool (3–5 years)",
    experience: "2+ years",
    compensation: "$19–$25/hr",
    duration: "Evening shifts",
    duties: [
      "Dinner prep",
      "Bedtime routines",
      "Storytime"
    ],
    additionalNotes: "Evening availability required.",
    details: "Evening shifts only."
  },

  {
    id: 11,
    job: "Occasional Sitter",
    family: "Adams Family",
    date: "Sep 13, 2025",
    status: "Pending",
    serviceType: "Child Caregiver",
    jobStatus: "Open",
    location: "Boston, Massachusetts",
    numberOfChildrens: 1,
    ageGroup: "School-age (5–12 years)",
    experience: "1+ years",
    compensation: "$18–$24/hr",
    duration: "On-call",
    duties: [
      "General supervision",
      "Light housekeeping"
    ],
    additionalNotes: "Flexible timing required.",
    details: "On-call position."
  },

  {
    id: 12,
    job: "Childcare Assistant",
    family: "Green Family",
    date: "Sep 14, 2025",
    status: "Rejected",
    serviceType: "Child Caregiver",
    jobStatus: "Open",
    location: "Kansas City, Missouri",
    numberOfChildrens: 3,
    ageGroup: "Mixed ages",
    experience: "3+ years",
    compensation: "$20–$27/hr",
    duration: "Part-time",
    duties: [
      "Support lead caregiver",
      "Meal prep",
      "Activity supervision"
    ],
    additionalNotes: "Assisting with multiple children.",
    details: "Experience required."
  },

  {
    id: 13,
    job: "Infant Nanny",
    family: "Baker Family",
    date: "Sep 09, 2025",
    status: "Pending",
    serviceType: "Infant Caregiver",
    jobStatus: "Open",
    location: "Dallas, Texas",
    numberOfChildrens: 1,
    ageGroup: "Infant (0–12 months)",
    experience: "4+ years",
    compensation: "$26–$34/hr",
    duration: "Full-time",
    duties: [
      "Bottle feeding",
      "Nap scheduling",
      "Motor skill development"
    ],
    additionalNotes: "Infant CPR certification preferred.",
    details: "Live-out position."
  },

  {
    id: 14,
    job: "Weekend Nanny",
    family: "Carter Family",
    date: "Sep 10, 2025",
    status: "Hired",
    serviceType: "Child Caregiver",
    jobStatus: "Open",
    location: "Newark, New Jersey",
    numberOfChildrens: 2,
    ageGroup: "Preschool (3–5 years)",
    experience: "2+ years",
    compensation: "$20–$26/hr",
    duration: "Weekends only",
    duties: [
      "Activity supervision",
      "Meal prep",
      "Light cleaning"
    ],
    additionalNotes: "Must be available every weekend.",
    details: "Saturday + Sunday."
  },

  {
    id: 15,
    job: "Live-in Babysitter",
    family: "Nelson Family",
    date: "Sep 04, 2025",
    status: "Rejected",
    serviceType: "Child Caregiver",
    jobStatus: "Open",
    location: "Philadelphia, Pennsylvania",
    numberOfChildrens: 1,
    ageGroup: "Toddler (1–3 years)",
    experience: "5+ years",
    compensation: "$120/day",
    duration: "Live-in",
    duties: [
      "24/7 supervision",
      "Meal prep",
      "Play engagement"
    ],
    additionalNotes: "Private room provided.",
    details: "Live-in required."
  }
],

 "Job Requests": [
  {
    id: 1,
    job: "Infant Night Care Specialist",
    family: "Dawson Family",
    date: "Sep 14, 2025",
    status: "Pending",
    jobStatus: "Requested",
    location: "Austin, Texas",
    numberOfChildrens: 1,
    ageGroup: "Infant (0–12 months)",
    experience: "2+ years",
    compensation: "$28/hr",
    duration: "Night shift (10 PM – 6 AM)",
    duties: [
      "Overnight feeding",
      "Diaper changes",
      "Sleep training assistance",
      "Monitoring baby throughout the night"
    ],
    additionalNotes: "Looking for someone gentle and experienced with sleep training."
  },
  {
    id: 2,
    job: "After-School Babysitter",
    family: "Henderson Family",
    date: "Sep 16, 2025",
    status: "Pending",
    jobStatus: "Requested",
    location: "Charlotte, North Carolina",
    numberOfChildrens: 2,
    ageGroup: "School-age (5–10 years)",
    experience: "1+ years",
    compensation: "$22/hr",
    duration: "Weekdays 3 PM – 7 PM",
    duties: [
      "Pick-up from school",
      "Homework supervision",
      "Snack preparation",
      "Light playtime activities"
    ],
    additionalNotes: "Children need gentle homework support."
  },
  {
    id: 3,
    job: "Weekend Toddler Sitter",
    family: "Martinez Family",
    date: "Sep 20, 2025",
    status: "Pending",
    jobStatus: "Requested",
    location: "Phoenix, Arizona",
    numberOfChildrens: 1,
    ageGroup: "Toddler (1–3 years)",
    experience: "3+ years",
    compensation: "$25/hr",
    duration: "Saturday–Sunday, 10 AM – 4 PM",
    duties: [
      "Meal prep",
      "Outdoor play supervision",
      "Educational games",
      "Nap time routine"
    ],
    additionalNotes: "Toddler is energetic and loves outdoor activities."
  },
  {
    id: 4,
    job: "Full-Time Nanny for Twins",
    family: "Reynolds Family",
    date: "Sep 12, 2025",
    status: "Pending",
    jobStatus: "Requested",
    location: "Seattle, Washington",
    numberOfChildrens: 2,
    ageGroup: "Infants (twins)",
    experience: "5+ years",
    compensation: "$38/hr",
    duration: "Mon–Fri, 8 hours/day",
    duties: [
      "Feeding and bottle prep",
      "Double infant care",
      "Tracking developmental milestones",
      "Stroller walks"
    ],
    additionalNotes: "Twin experience strongly preferred."
  },
  {
    id: 5,
    job: "Evening Babysitter",
    family: "Nelson Family",
    date: "Sep 17, 2025",
    status: "Pending",
    jobStatus: "Requested",
    location: "Detroit, Michigan",
    numberOfChildrens: 1,
    ageGroup: "Preschool (3–5 years)",
    experience: "2+ years",
    compensation: "$24/hr",
    duration: "Mon–Fri, 5 PM – 9 PM",
    duties: [
      "Dinner prep",
      "Storytime",
      "Bath routine",
      "Light cleanup"
    ],
    additionalNotes: "Child is calm, follows bedtime routines well."
  },
  {
    id: 6,
    job: "Special Needs Caregiver",
    family: "Griffin Family",
    date: "Sep 18, 2025",
    status: "Pending",
    jobStatus: "Requested",
    location: "Portland, Oregon",
    numberOfChildrens: 1,
    ageGroup: "School-age (7 years)",
    experience: "5+ years",
    compensation: "$40/hr",
    duration: "Mon–Fri, 4 PM – 8 PM",
    duties: [
      "Behavioral support",
      "Structured routine maintenance",
      "Skill development tasks",
      "Medication reminders"
    ],
    additionalNotes: "Experience with ASD required."
  },
  {
    id: 7,
    job: "Part-Time Mother's Helper",
    family: "Clayton Family",
    date: "Sep 15, 2025",
    status: "Pending",
    jobStatus: "Requested",
    location: "Tampa, Florida",
    numberOfChildrens: 2,
    ageGroup: "Infant & Toddler",
    experience: "1+ years",
    compensation: "$20/hr",
    duration: "Tue–Thu, 10 AM – 2 PM",
    duties: [
      "Assisting parent with daily child routines",
      "Light housekeeping",
      "Feeding support",
      "Play supervision"
    ],
    additionalNotes: "Position mainly supports the mother with daily care."
  },
  {
    id: 8,
    job: "Before-School Caregiver",
    family: "Morgan Family",
    date: "Sep 21, 2025",
    status: "Pending",
    jobStatus: "Requested",
    location: "Kansas City, Missouri",
    numberOfChildrens: 2,
    ageGroup: "School-age (6 & 9 years)",
    experience: "2+ years",
    compensation: "$20/hr",
    duration: "Weekdays 6 AM – 8:30 AM",
    duties: [
      "Morning routine",
      "Breakfast preparation",
      "School drop-off",
      "Packing lunches"
    ],
    additionalNotes: "Punctuality is very important."
  },
  {
    id: 9,
    job: "Weekend Event Sitter",
    family: "Patel Family",
    date: "Sep 11, 2025",
    status: "Pending",
    jobStatus: "Requested",
    location: "Miami, Florida",
    numberOfChildrens: 3,
    ageGroup: "Mixed ages (3, 7, 10)",
    experience: "4+ years",
    compensation: "$30/hr",
    duration: "As needed, weekends only",
    duties: [
      "Group activity supervision",
      "Snacks and meals",
      "Organizing games",
      "Keeping children safe at events"
    ],
    additionalNotes: "Must be comfortable supervising 3 kids."
  },
  {
    id: 10,
    job: "Infant Care Nanny (Full-Time)",
    family: "Wright Family",
    date: "Sep 19, 2025",
    status: "Pending",
    jobStatus: "Requested",
    location: "Nashville, Tennessee",
    numberOfChildrens: 1,
    ageGroup: "Infant (6 months)",
    experience: "3+ years",
    compensation: "$32/hr",
    duration: "Mon–Fri, 9 AM – 5 PM",
    duties: [
      "Feeding and diaper changes",
      "Nap scheduling",
      "Developmental play",
      "Daily baby activity log"
    ],
    additionalNotes: "CPR certification required."
  },
  {
    id: 11,
    job: "Evening Homework Tutor + Babysitter",
    family: "Singh Family",
    date: "Sep 13, 2025",
    status: "Pending",
    jobStatus: "Requested",
    location: "Cleveland, Ohio",
    numberOfChildrens: 2,
    ageGroup: "School-age (8 & 11 years)",
    experience: "2+ years",
    compensation: "$26/hr",
    duration: "Mon–Thu, 5 PM – 8 PM",
    duties: [
      "Homework help",
      "Reading practice",
      "Dinner supervision",
      "Light screen-time monitoring"
    ],
    additionalNotes: "Looking for a patient tutor-style sitter."
  },
  {
    id: 12,
    job: "Preschool Playtime Sitter",
    family: "Brooks Family",
    date: "Sep 22, 2025",
    status: "Pending",
    jobStatus: "Requested",
    location: "Baltimore, Maryland",
    numberOfChildrens: 1,
    ageGroup: "Preschool (4 years)",
    experience: "1+ years",
    compensation: "$21/hr",
    duration: "Tue–Fri, 1 PM – 5 PM",
    duties: [
      "Play-based learning",
      "Arts & crafts",
      "Outdoor play",
      "Snack time"
    ],
    additionalNotes: "Child is shy but warms up quickly."
  },
  {
    id: 13,
    job: "Full-Day Saturday Nanny",
    family: "Kim Family",
    date: "Sep 14, 2025",
    status: "Pending",
    jobStatus: "Requested",
    location: "Omaha, Nebraska",
    numberOfChildrens: 2,
    ageGroup: "Toddler & Preschool",
    experience: "4+ years",
    compensation: "$200/day",
    duration: "Saturdays, 9 AM – 6 PM",
    duties: [
      "Meal prep",
      "Park trips",
      "Creative activities",
      "Sibling interaction support"
    ],
    additionalNotes: "Looking for someone energetic and creative."
  },
  {
    id: 14,
    job: "Part-Time Evening Mother's Helper",
    family: "Foster Family",
    date: "Sep 23, 2025",
    status: "Pending",
    jobStatus: "Requested",
    location: "Milwaukee, Wisconsin",
    numberOfChildrens: 1,
    ageGroup: "Infant",
    experience: "1+ years",
    compensation: "$20/hr",
    duration: "Mon–Fri, 6 PM – 9 PM",
    duties: [
      "Feeding assistance",
      "Sterilizing bottles",
      "Light cleanup",
      "Helping mother with bedtime routine"
    ],
    additionalNotes: "Mother will be home most of the time."
  },
  {
    id: 15,
    job: "Date-Night Sitter",
    family: "Lopez Family",
    date: "Sep 18, 2025",
    status: "Pending",
    jobStatus: "Requested",
    location: "Houston, Texas",
    numberOfChildrens: 2,
    ageGroup: "Toddler & School-age",
    experience: "3+ years",
    compensation: "$27/hr",
    duration: "Evenings, as needed",
    duties: [
      "Dinner supervision",
      "Interactive play",
      "Bedtime routine",
      "Keeping house tidy after play"
    ],
    additionalNotes: "Prefer sitter comfortable with pets."
  }
],

 "Accepted Jobs": [
  {
    id: 1,
    job: "Infant Care Nanny (Full-Time)",
    family: "Baker Family",
    date: "Sep 05, 2025",
    status: "Accepted",
    jobStatus: "Accepted",
    location: "Salt Lake City, Utah",
    numberOfChildrens: 1,
    ageGroup: "Infant (4 months)",
    experience: "3+ years",
    compensation: "$30/hr",
    duration: "Mon–Fri, 9 AM – 5 PM",
    duties: [
      "Feeding and burping",
      "Diaper changing",
      "Nap training",
      "Tracking baby milestones"
    ],
    additionalNotes: "Family prefers someone CPR certified."
  },
  {
    id: 2,
    job: "Part-Time Toddler Nanny",
    family: "Harvey Family",
    date: "Sep 07, 2025",
    status: "Accepted",
    jobStatus: "Accepted",
    location: "Raleigh, North Carolina",
    numberOfChildrens: 1,
    ageGroup: "Toddler (2 years)",
    experience: "2+ years",
    compensation: "$22/hr",
    duration: "Tue–Thu, 10 AM – 3 PM",
    duties: [
      "Educational play",
      "Preparing toddler meals",
      "Outdoor walks",
      "Nap routine"
    ],
    additionalNotes: "Toddler has mild food allergies."
  },
  {
    id: 3,
    job: "Full-Time Nanny for 3 Kids",
    family: "Robinson Family",
    date: "Sep 01, 2025",
    status: "Accepted",
    jobStatus: "Accepted",
    location: "Boise, Idaho",
    numberOfChildlens: 3,
    ageGroup: "Toddler, Preschool & School-age",
    experience: "4+ years",
    compensation: "$35/hr",
    duration: "Mon–Fri, 8 AM – 6 PM",
    duties: [
      "Meal preparation",
      "School pick-up/drop-off",
      "Organizing activities",
      "Light housekeeping"
    ],
    additionalNotes: "Looking for someone experienced managing multiple kids."
  },
  {
    id: 4,
    job: "Weekend Babysitter",
    family: "Perry Family",
    date: "Sep 10, 2025",
    status: "Accepted",
    jobStatus: "Accepted",
    location: "Madison, Wisconsin",
    numberOfChildrens: 2,
    ageGroup: "Preschool (4) & School-age (7)",
    experience: "1+ years",
    compensation: "$23/hr",
    duration: "Sat–Sun, 12 PM – 6 PM",
    duties: [
      "Playtime activities",
      "Preparing snacks",
      "Light cleanup",
      "Outdoor supervision"
    ],
    additionalNotes: "Kids love art and crafts."
  },
  {
    id: 5,
    job: "After-School Sitter",
    family: "Garcia Family",
    date: "Sep 03, 2025",
    status: "Accepted",
    jobStatus: "Accepted",
    location: "Des Moines, Iowa",
    numberOfChildrens: 2,
    ageGroup: "School-age (6 & 9)",
    experience: "2+ years",
    compensation: "$24/hr",
    duration: "Mon–Fri, 3 PM – 7 PM",
    duties: [
      "Homework help",
      "Preparing after-school snacks",
      "School pickup",
      "Organizing games"
    ],
    additionalNotes: "Children respond well to structured routines."
  },
  {
    id: 6,
    job: "Infant Twins Nanny",
    family: "Keller Family",
    date: "Sep 02, 2025",
    status: "Accepted",
    jobStatus: "Accepted",
    location: "Little Rock, Arkansas",
    numberOfChildrens: 2,
    ageGroup: "Infants (Twins)",
    experience: "5+ years",
    compensation: "$40/hr",
    duration: "Full-time, Mon–Fri",
    duties: [
      "Double bottle-feeding",
      "Nap synchronization",
      "Stroller outings",
      "Tracking schedules for both infants"
    ],
    additionalNotes: "Experience with twins required."
  },
  {
    id: 7,
    job: "Mother's Helper",
    family: "Reed Family",
    date: "Sep 09, 2025",
    status: "Accepted",
    jobStatus: "Accepted",
    location: "Richmond, Virginia",
    numberOfChildlens: 1,
    ageGroup: "Infant",
    experience: "1+ years",
    compensation: "$20/hr",
    duration: "Mon–Fri, 1 PM – 5 PM",
    duties: [
      "Helping with feeding",
      "Folding baby clothes",
      "Light meal prep",
      "Supporting mom during nap routine"
    ],
    additionalNotes: "Mother works from home."
  },
  {
    id: 8,
    job: "Evening Babysitter",
    family: "Turner Family",
    date: "Sep 04, 2025",
    status: "Accepted",
    jobStatus: "Accepted",
    location: "Albuquerque, New Mexico",
    numberOfChildlens: 1,
    ageGroup: "Preschool (4 years)",
    experience: "2+ years",
    compensation: "$21/hr",
    duration: "Mon–Thu, 5 PM – 9 PM",
    duties: [
      "Dinner prep",
      "Storytime",
      "Bedtime routine",
      "Light cleanup"
    ],
    additionalNotes: "Child has a set bedtime schedule."
  },
  {
    id: 9,
    job: "Nanny for 4 Kids",
    family: "Morales Family",
    date: "Sep 08, 2025",
    status: "Accepted",
    jobStatus: "Accepted",
    location: "Springfield, Illinois",
    numberOfChildlens: 4,
    ageGroup: "Toddler to School-age",
    experience: "5+ years",
    compensation: "$42/hr",
    duration: "Full-time",
    duties: [
      "Meal prep for all kids",
      "Helping with homework",
      "Coordinating activities",
      "Light housekeeping"
    ],
    additionalNotes: "Must manage busy household."
  },
  {
    id: 10,
    job: "Special Needs Nanny",
    family: "Watts Family",
    date: "Sep 06, 2025",
    status: "Accepted",
    jobStatus: "Accepted",
    location: "Buffalo, New York",
    numberOfChildlens: 1,
    ageGroup: "School-age (8 years)",
    experience: "4+ years",
    compensation: "$38/hr",
    duration: "Mon–Fri, 2 PM – 7 PM",
    duties: [
      "Therapy routine support",
      "Medication reminders",
      "Structured activities",
      "Daily progress tracking"
    ],
    additionalNotes: "Experience with sensory needs required."
  },
  {
    id: 11,
    job: "Weekend Full-Day Nanny",
    family: "Fitzgerald Family",
    date: "Sep 02, 2025",
    status: "Accepted",
    jobStatus: "Accepted",
    location: "Anchorage, Alaska",
    numberOfChildlens: 2,
    ageGroup: "Toddler & Preschool",
    experience: "3+ years",
    compensation: "$190/day",
    duration: "Sat–Sun, 9 AM – 6 PM",
    duties: [
      "Meal planning",
      "Park trips",
      "Creative indoor play",
      "Nap time supervision"
    ],
    additionalNotes: "Children enjoy music activities."
  },
  {
    id: 12,
    job: "Before-School Helper",
    family: "Hayes Family",
    date: "Sep 11, 2025",
    status: "Accepted",
    jobStatus: "Accepted",
    location: "Baton Rouge, Louisiana",
    numberOfChildlens: 2,
    ageGroup: "School-age",
    experience: "1+ years",
    compensation: "$19/hr",
    duration: "Weekdays 6 AM – 9 AM",
    duties: [
      "Preparing breakfast",
      "Morning routine supervision",
      "School drop-off",
      "Packing lunches"
    ],
    additionalNotes: "Looking for punctual and reliable caregiver."
  },
  {
    id: 13,
    job: "Date-Night Babysitter",
    family: "Nguyen Family",
    date: "Sep 03, 2025",
    status: "Accepted",
    jobStatus: "Accepted",
    location: "Fargo, North Dakota",
    numberOfChildlens: 1,
    ageGroup: "Toddler",
    experience: "2+ years",
    compensation: "$28/hr",
    duration: "Evenings as needed",
    duties: [
      "Preparing simple meals",
      "Interactive play",
      "Bedtime routine",
      "Keeping house tidy"
    ],
    additionalNotes: "Kid is friendly and playful."
  },
  {
    id: 14,
    job: "Homeschool Helper",
    family: "Jordan Family",
    date: "Sep 12, 2025",
    status: "Accepted",
    jobStatus: "Accepted",
    location: "Sioux Falls, South Dakota",
    numberOfChildlens: 2,
    ageGroup: "School-age (Homeschooling)",
    experience: "3+ years",
    compensation: "$33/hr",
    duration: "Mon–Fri, 10 AM – 3 PM",
    duties: [
      "Supporting homeschool lessons",
      "Creating educational activities",
      "Field trip supervision",
      "Homework correction"
    ],
    additionalNotes: "Experience in teaching or tutoring preferred."
  },
  {
    id: 15,
    job: "Evening Mother's Helper",
    family: "Holt Family",
    date: "Sep 07, 2025",
    status: "Accepted",
    jobStatus: "Accepted",
    location: "Charleston, South Carolina",
    numberOfChildlens: 1,
    ageGroup: "Infant",
    experience: "1+ years",
    compensation: "$20/hr",
    duration: "Mon–Fri, 6 PM – 9 PM",
    duties: [
      "Feeding assistance",
      "Bottle washing",
      "Light kitchen cleaning",
      "Supporting mom with bedtime"
    ],
    additionalNotes: "Family prefers soft-spoken caregiver."
  }
],

  "Declined Jobs":[
  {
    id: 1,
    job: "Part-Time Nanny for 4 Kids",
    family: "Johnson Family",
    date: "Sep 10, 2025",
    status: "Rejected",
    serviceType: "Child Caregiver",
    jobStatus: "Open",
    location: "Austin, Texas",
    numberOfChildrens: 4,
    ageGroup: "Toddler (1–3 years), School-age (5–12 years)",
    experience: "3+ years",
    compensation: "$22–$30/hr",
    duration: "Part-time, ongoing",
    duties: [
      "Meal preparation",
      "Homework assistance",
      "Playtime supervision",
      "Light housekeeping"
    ],
    additionalNotes: "Family prefers caregiver with patience and multitasking skills.",
    details: "Experience: 3 years. References available."
  },
  {
    id: 2,
    job: "Full-Time Infant Care",
    family: "Patel Family",
    date: "Sep 08, 2025",
    status: "Rejected",
    serviceType: "Infant Caregiver",
    jobStatus: "Open",
    location: "Seattle, Washington",
    numberOfChildrens: 1,
    ageGroup: "Infant (0–12 months)",
    experience: "4+ years",
    compensation: "$25–$32/hr",
    duration: "Full-time",
    duties: [
      "Feeding & bottle prep",
      "Diaper changes",
      "Sleep schedule monitoring",
      "Daily infant care logs"
    ],
    additionalNotes: "Family prefers someone experienced with newborn routines.",
    details: "Starts immediately. Live-in role."
  },
  {
    id: 3,
    job: "Infant Specialist",
    family: "Brown Family",
    date: "Sep 09, 2025",
    status: "Rejected",
    serviceType: "Infant Caregiver",
    jobStatus: "Open",
    location: "San Diego, California",
    numberOfChildrens: 1,
    ageGroup: "Infant (0–12 months)",
    experience: "5+ years",
    compensation: "$30–$38/hr",
    duration: "Temporary, 6 weeks",
    duties: [
      "Sleep training",
      "Feeding schedule management",
      "Soothing techniques",
      "Tracking growth milestones"
    ],
    additionalNotes: "Expertise in infant sleep training preferred.",
    details: "Interview scheduled for next week."
  },
  {
    id: 4,
    job: "Weekend Babysitter",
    family: "Smith Family",
    date: "Sep 11, 2025",
    status: "Rejected",
    serviceType: "Child Caregiver",
    jobStatus: "Open",
    location: "Denver, Colorado",
    numberOfChildrens: 2,
    ageGroup: "Preschool (3–5 years)",
    experience: "2+ years",
    compensation: "$18–$24/hr",
    duration: "Weekends only",
    duties: [
      "Engaging playtime",
      "Light meal prep",
      "Bedtime routines"
    ],
    additionalNotes: "Weekend availability required.",
    details: "Weekend nights only."
  },
  {
    id: 5,
    job: "After-school Nanny",
    family: "Lopez Family",
    date: "Sep 12, 2025",
    status: "Rejected",
    serviceType: "Child Caregiver",
    jobStatus: "Open",
    location: "Phoenix, Arizona",
    numberOfChildrens: 2,
    ageGroup: "School-age (5–12 years)",
    experience: "3+ years",
    compensation: "$20–$28/hr",
    duration: "Weekdays, 3 PM – 7 PM",
    duties: [
      "Homework help",
      "Snack preparation",
      "School pickup"
    ],
    additionalNotes: "Reliable transportation required.",
    details: "2 children, homework help."
  },
  {
    id: 6,
    job: "Holiday Childcare",
    family: "Rogers Family",
    date: "Sep 05, 2025",
    status: "Rejected",
    serviceType: "Child Caregiver",
    jobStatus: "Open",
    location: "Portland, Oregon",
    numberOfChildrens: 3,
    ageGroup: "Toddler, School-age",
    experience: "2+ years",
    compensation: "$23–$30/hr",
    duration: "Holiday season",
    duties: [
      "Holiday activity supervision",
      "Playtime engagement",
      "Light cleaning"
    ],
    additionalNotes: "Seasonal schedule fluctuates.",
    details: "Seasonal role."
  },
  {
    id: 7,
    job: "Newborn Night Care",
    family: "Singh Family",
    date: "Sep 03, 2025",
    status: "Rejected",
    serviceType: "Infant Caregiver",
    jobStatus: "Open",
    location: "Charlotte, North Carolina",
    numberOfChildrens: 1,
    ageGroup: "Newborn (0–3 months)",
    experience: "5+ years",
    compensation: "$28–$35/hr",
    duration: "Night shifts",
    duties: [
      "Overnight monitoring",
      "Bottle feeding",
      "Sleep conditioning"
    ],
    additionalNotes: "Quiet household environment.",
    details: "Night shifts only."
  },
  {
    id: 8,
    job: "Daytime Babysitter",
    family: "Kim Family",
    date: "Sep 15, 2025",
    status: "Rejected",
    serviceType: "Child Caregiver",
    jobStatus: "Open",
    location: "Miami, Florida",
    numberOfChildrens: 1,
    ageGroup: "Toddler (1–3 years)",
    experience: "3+ years",
    compensation: "$20–$26/hr",
    duration: "5 hours/day",
    duties: [
      "Outdoor activities",
      "Snack preparation",
      "Nap schedule support"
    ],
    additionalNotes: "Family prefers energetic caregiver.",
    details: "5 hours per day."
  },
  {
    id: 9,
    job: "Toddler Care Expert",
    family: "Perez Family",
    date: "Sep 02, 2025",
    status: "Rejected",
    serviceType: "Toddler Caregiver",
    jobStatus: "Open",
    location: "Chicago, Illinois",
    numberOfChildrens: 1,
    ageGroup: "Toddler (1–3 years)",
    experience: "4+ years",
    compensation: "$24–$32/hr",
    duration: "Ongoing",
    duties: [
      "Potty training support",
      "Educational play",
      "Routine structure"
    ],
    additionalNotes: "Prior toddler specialization preferred.",
    details: "Experience with toddlers required."
  },
  {
    id: 10,
    job: "Evening Caregiver",
    family: "Wright Family",
    date: "Sep 07, 2025",
    status: "Rejected",
    serviceType: "Child Caregiver",
    jobStatus: "Open",
    location: "Atlanta, Georgia",
    numberOfChildrens: 2,
    ageGroup: "Preschool (3–5 years)",
    experience: "2+ years",
    compensation: "$19–$25/hr",
    duration: "Evening shifts",
    duties: [
      "Dinner prep",
      "Bedtime routines",
      "Storytime"
    ],
    additionalNotes: "Evening availability required.",
    details: "Evening shifts only."
  },

  {
    id: 11,
    job: "Occasional Sitter",
    family: "Adams Family",
    date: "Sep 13, 2025",
    status: "Rejected",
    serviceType: "Child Caregiver",
    jobStatus: "Open",
    location: "Boston, Massachusetts",
    numberOfChildrens: 1,
    ageGroup: "School-age (5–12 years)",
    experience: "1+ years",
    compensation: "$18–$24/hr",
    duration: "On-call",
    duties: [
      "General supervision",
      "Light housekeeping"
    ],
    additionalNotes: "Flexible timing required.",
    details: "On-call position."
  },

  {
    id: 12,
    job: "Childcare Assistant",
    family: "Green Family",
    date: "Sep 14, 2025",
    status: "Rejected",
    serviceType: "Child Caregiver",
    jobStatus: "Open",
    location: "Kansas City, Missouri",
    numberOfChildrens: 3,
    ageGroup: "Mixed ages",
    experience: "3+ years",
    compensation: "$20–$27/hr",
    duration: "Part-time",
    duties: [
      "Support lead caregiver",
      "Meal prep",
      "Activity supervision"
    ],
    additionalNotes: "Assisting with multiple children.",
    details: "Experience required."
  },

  {
    id: 13,
    job: "Infant Nanny",
    family: "Baker Family",
    date: "Sep 09, 2025",
    status: "Rejected",
    serviceType: "Infant Caregiver",
    jobStatus: "Open",
    location: "Dallas, Texas",
    numberOfChildrens: 1,
    ageGroup: "Infant (0–12 months)",
    experience: "4+ years",
    compensation: "$26–$34/hr",
    duration: "Full-time",
    duties: [
      "Bottle feeding",
      "Nap scheduling",
      "Motor skill development"
    ],
    additionalNotes: "Infant CPR certification preferred.",
    details: "Live-out position."
  },

  {
    id: 14,
    job: "Weekend Nanny",
    family: "Carter Family",
    date: "Sep 10, 2025",
    status: "Rejected",
    serviceType: "Child Caregiver",
    jobStatus: "Open",
    location: "Newark, New Jersey",
    numberOfChildrens: 2,
    ageGroup: "Preschool (3–5 years)",
    experience: "2+ years",
    compensation: "$20–$26/hr",
    duration: "Weekends only",
    duties: [
      "Activity supervision",
      "Meal prep",
      "Light cleaning"
    ],
    additionalNotes: "Must be available every weekend.",
    details: "Saturday + Sunday."
  },

  {
    id: 15,
    job: "Live-in Babysitter",
    family: "Nelson Family",
    date: "Sep 04, 2025",
    status: "Rejected",
    serviceType: "Child Caregiver",
    jobStatus: "Open",
    location: "Philadelphia, Pennsylvania",
    numberOfChildrens: 1,
    ageGroup: "Toddler (1–3 years)",
    experience: "5+ years",
    compensation: "$120/day",
    duration: "Live-in",
    duties: [
      "24/7 supervision",
      "Meal prep",
      "Play engagement"
    ],
    additionalNotes: "Private room provided.",
    details: "Live-in required."
  }
],

};

function CareGiverDashboard() {
  const tabs = [
    "Applied Jobs",
    "Job Requests",
    "Accepted Jobs",
    "Declined Jobs",
  ];
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [serviceTypeFilter, setServiceTypeFilter] = useState("All");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [pages, setPages] = useState<Record<string, number>>({
    "Applied Jobs": 1,
    "Job Requests": 1,
    "Accepted Jobs": 1,
    "Declined Jobs": 1,
  });
  const [modal, setModal] = useState<{ open: boolean; item: any | null }>({
    open: false,
    item: null,
  });

  const pageSize = 10;

  const rawData = DATA[activeTab] || [];

  const filtered = useMemo(() => {
    let out = rawData.slice();
    if (search.trim()) {
      const s = search.toLowerCase();
      out = out.filter(
        (r) =>
          r.job.toLowerCase().includes(s) ||
          r.family.toLowerCase().includes(s) ||
          (r.status || "").toLowerCase().includes(s)
      );
    }
    if (statusFilter !== "All") {
      out = out.filter((r) => r.status === statusFilter);
    }
    if (serviceTypeFilter !== "All") {
      out = out.filter((r) => r.serviceType === serviceTypeFilter);
    }

    // Sort the data
    out.sort((a, b) => {
      let aVal, bVal;
      if (sortBy === "date") {
        aVal = new Date(a.date).getTime();
        bVal = new Date(b.date).getTime();
      } else if (sortBy === "serviceType") {
        aVal = a.serviceType;
        bVal = b.serviceType;
      } else {
        aVal = a[sortBy];
        bVal = b[sortBy];
      }

      if (sortOrder === "asc") {
        return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
      } else {
        return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
      }
    });

    return out;
  }, [rawData, search, statusFilter, serviceTypeFilter, sortBy, sortOrder]);

  const currentPage = pages[activeTab] || 1;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  const paginated = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  function handlePageChange(p: number) {
    setPages((prev) => ({ ...prev, [activeTab]: p }));
  }

  function openDetails(item: any) {
    setModal({ open: true, item });
  }

  function closeModal() {
    setModal({ open: false, item: null });
  }

  return (
    <div className="p-6 mt-16 mb-10 min-h-screen md:px-24 [font-family:'Poppins',Helvetica] font-poppins">
      {/* Top Tabs */}
      <TopTabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={(t) => {
          setActiveTab(t);
        }}
      />

      {/* Filters */}
      <div className="flex justify-end items-center gap-2 mb-3 pb-5">
        <div className="flex max-md:flex-wrap items-center gap-2">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              handlePageChange(1);
            }}
            placeholder="Search jobs, family or status"
            className="border px-3 py-2 rounded-full text-sm w-64"
          />

          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              handlePageChange(1);
            }}
            className="border px-3 py-2 rounded-full text-sm"
          >
            <option value="All">All Status</option>
            <option value="Hired">Hired</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
          </select>

          <select
            value={serviceTypeFilter}
            onChange={(e) => {
              setServiceTypeFilter(e.target.value);
              handlePageChange(1);
            }}
            className="border px-3 py-2 rounded-full text-sm"
          >
            <option value="All">All Services</option>
            <option value="Child Caregiver">Child Caregiver</option>
            <option value="Infant Caregiver">Infant Caregiver</option>
            <option value="Toddler Caregiver">Toddler Caregiver</option>
            <option value="Pet Caregiver">Pet Caregiver</option>
            <option value="Special Needs Caregiver">
              Special Needs Caregiver
            </option>
          </select>

        <select
          value={`${sortBy}-${sortOrder}`}
          onChange={(e) => {
            const [field, order] = e.target.value.split("-");
            setSortBy(field);
            setSortOrder(order as "asc" | "desc");
          }}
          className="border px-3 py-2 rounded-full text-sm"
        >
          <option value="date-desc">Date (Newest)</option>
          <option value="date-asc">Date (Oldest)</option>
          <option value="serviceType-asc">Service Type (A-Z)</option>
          <option value="serviceType-desc">Service Type (Z-A)</option>
        </select>
        </div>

      </div>

      <div className="w-full border rounded-[12px] p-5">
        <p className="text-lg font-semibold [font-family:'Poppins',Helvetica] pb-5">Customers List</p>

        {/* Table */}
        <table className="w-full max-md:overflow-x-auto bg-white [font-family:'Poppins',Helvetica] rounded-[12px] md:overflow-hidden border">
          <thead className="w-full max-md:overflow-x-auto md:overflow-hidden bg-gray-100 text-sm text-gray-600">
            <tr>
              <th className="p-3 text-left">Job Title</th>
              <th className="p-3 text-left">Family Name</th>
              <th className="p-3 text-left">Applied Date</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody className="w-full max-md:overflow-x-auto md:overflow-hidden text-sm">
            {paginated.length ? (
              paginated.map((item: any, index: number) => (
                <tr
                  key={item.id}
                  className={`border-b hover:bg-gray-50 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-100"
                  }`}
                >
                  <td className="p-3">{item.job}</td>
                  <td className="p-3">{item.family}</td>
                  <td className="p-3">{item.date}</td>
                  <td className="p-3">
                    <StatusBadge status={item.status} />
                  </td>
                  <td
                    className="p-3 text-[#1C4BC4] cursor-pointer"
                    onClick={() => openDetails(item)}
                  >
                    View Details
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-4 text-center text-gray-500">
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onChange={handlePageChange}
          totalResults={filtered.length}
          itemsPerPage={pageSize}
        />
      </div>
      {/* Details Modal */}
      {modal.open && modal.item && (
        <div className="fixed inset-0 z-50 [font-family:'Poppins',Helvetica] flex items-center justify-center">
          <div className="fixed inset-0 bg-black/40" onClick={closeModal} />
          <div className="bg-white flex flex-col gap-5 rounded-lg shadow-lg z-50 w-11/12 md:w-3/4 lg:w-1/2 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Job Details</h3>
              <button
                onClick={closeModal}
                className="bg-gray-300 rounded-full p-1"
              >
                <X size={16} />
              </button>
            </div>
            <div className="text-sm w-full grid grid-cols-3 max-md:grid-cols-2 sm:gap-x-4 sm:gap-y-8 text-gray-700">
              <p className="flex flex-col gap-2">
                <strong>Application Status:</strong> <StatusBadge className="w-1/3" status={modal.item.status}/>
              </p>
              <p className="flex flex-col gap-2">
                <strong>Applied Date:</strong> {modal.item.date}
              </p>
              <p className="flex flex-col gap-2">
                <strong>Job Status:</strong>{" "}
                {modal.item.jobStatus}
              </p>
            </div>
            <div className="w-full">
              <p className="flex flex-col gap-2">
                <strong>Job Title:</strong> {modal.item.details}
              </p>
            </div>
            <div className="text-sm w-full grid grid-cols-3 gap-5 text-gray-700">
              <p className="flex flex-col gap-2">
                <strong>Location:</strong> {modal.item.location}
              </p>
              <p className="flex flex-col gap-2">
                <strong>Care Type:</strong>{" "}
                 {modal.item.serviceType}
              </p>
              <p className="flex flex-col gap-2">
                <strong>Number of Children:</strong>{" "}
                {modal.item.numberOfChildrens}
              </p>
           
           
              <p className="flex flex-col gap-2">
                <strong>Children’s Age Group:</strong> {modal.item.ageGroup}
              </p>
              <p className="flex flex-col gap-2">
                <strong>Schedule & Hours:</strong> {modal.item.shedule}Mon–Fri, 8:30 AM – 6:30 PM
              </p>
              <p className="flex flex-col gap-2">
                <strong>Start Date:</strong> {modal.item.startDate}
              </p>
              <p className="flex flex-col gap-2">
                <strong>Experience Level Required:</strong>{" "}
                {modal.item.experience}
              </p>
              <p className="flex flex-col gap-2">
                <strong>Compensation:</strong> {modal.item.compensation}
              </p>
              <p className="flex flex-col gap-2">
                <strong>Duration:</strong> {modal.item.duration}
              </p>
              
              
            </div>
            <div className="w-full">
             <p className="flex flex-col gap-2">
                <strong>Duties & Responsibilities:</strong>{" "}
                <div className="grid grid-cols-4 gap-2">{modal.item.duties.map((duty:any)=>(<Badge text={duty}/>))}</div>
              </p>
            </div>
            <div className="w-full">
             <p className="flex flex-col gap-2">
                <strong>Additional Notes:</strong> {modal.item.additionalNotes}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CareGiverDashboard;
