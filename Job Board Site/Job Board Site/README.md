# WorkForge - Job Board Platform

## Overview
- WorkForge is a job board platform designed to connect recruiters with job seekers. It allows recruiters to post job listings, while candidates can browse and apply for jobs. The project was developed as part of my internship at CodSoft and leverages modern web technologies to provide a seamless experience for both recruiters and job seekers.

## Features

- Recruiters can post new job listings.
- Candidates can browse, filter, and apply for jobs.
- User authentication system.
- Responsive design for optimal viewing across devices.
- Modern UI components using ShadCN UI.


## Tech Stack

- Frontend: React.js, ShadCN UI (for UI components)
- Backend: Supabase (for user authentication and job listings management)
- Styling: CSS, responsive design using media queries
- Deployment: Vercel or Netlify

## Getting Started

### Prerequisites
Before getting started, ensure you have the following installed on your local machine:

Node.js (LTS version): Download Node.js
npm (comes with Node.js)
Environment Setup

## Clone the Repository
Clone the repository to your local machine using the following command:
- git clone https://github.com/AjinkyaLadkat/CODSOFT.git  
- cd CODSOFT

## Install Dependencies
Navigate to the project folder and install dependencies using npm
- npm install

## Set Up Environment Variables
Create a .env file in the root directory of your project and add the following environment variables (replace placeholders with actual values):
- REACT_APP_SUPABASE_URL=your_supabase_url  
- REACT_APP_SUPABASE_ANON_KEY=your_anon_key


## Deployment
- Deploying on Netlify
To deploy your project on Netlify:

### Build the Project
Run the following command to build the production-ready version of the app:
- npm run build

- 1.Deploy the Build Folder
- 2.Go to your Netlify dashboard
- 3.Click "New site from Git"
- 4.Connect your GitHub repository (if not done already)
- 5.Set the build directory to dist
- 6.Click "Deploy"

Alternatively, you can deploy manually via the Netlify CLI:
- netlify deploy --prod --dir=dist

## Folder Structure
Here’s a brief overview of the folder structure:
- ├── public/
- │   └── _redirects
- ├── src/
- │   ├── components/    # All UI components (using ShadCN UI)
- │   ├── pages/         # React pages (e.g., Home, PostJob, Profile)
- │   ├── App.jsx        # Root component
- │   └── main.jsx       # Entry point for the app
- ├── .gitignore         # Git ignore file
- ├── .env               # Environment variables
- ├── package.json       # NPM dependencies and scripts
- └── README.md          # Project documentation

## Usage

# User Authentication
- The platform supports user authentication via Supabase.
- Users can sign up as a Recruiter or Candidate.
- Authentication is handled using Supabase's Auth system.

# Posting Jobs (Recruiters)

# Log in as a Recruiter.
- Navigate to the Post Job page.
- Fill out the form to post a new job listing, including job title, description, location, and other relevant details.
- Applying for Jobs (Candidates)

# Log in as a Candidate
- Browse the job listings.
- Click on a job listing to view details and apply.


--Troubleshooting--

Common Issues

Build errors: Ensure all required environment variables are correctly configured in the .env file.
Missing dependencies: If you encounter missing dependencies during npm install, run npm install again.
