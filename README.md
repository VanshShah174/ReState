# ReState

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Appwrite](https://img.shields.io/badge/Appwrite-F02E65?style=for-the-badge&logo=appwrite&logoColor=white)
![Nativewind](https://img.shields.io/badge/Nativewind-000000?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)

## Introduction
ReState is a full-stack Real Estate application built with React Native and Appwrite. It provides a seamless property search experience with features like Google Authentication, dynamic routing, and responsive design. This project is a personal endeavor to master scalable and clean React Native development practices.

## Features
- **Google Authentication**: Secure login using Google OAuth with Appwrite.
- **Dynamic Routing**: Efficient navigation with tab-based and stack-based routing.
- **Property Listings**: Dynamic data fetching and display of real estate properties.
- **Responsive UI**: Designed for a seamless user experience on both iOS and Android.
- **Database Integration**: Appwrite backend with a seeded database for properties.

## Technologies Used
- **Frontend**: React Native, Expo, TypeScript, Nativewind
- **Backend**: Appwrite (Authentication & Database)

## File Structure
- **\`components/\`**:
  - Modular UI components like \`Cards\`, \`Search\`, and \`Filters\`.
- **\`constants/\`**:
  - Centralized static data, icons, and image paths.
- **\`hooks/\`**:
  - Custom React hooks for theme and color management.
- **\`lib/\`**:
  - Backend integration with Appwrite and global state management.

## Setup and Installation
Follow these steps to set up the project on your local machine:

1. **Clone the repository**:
   git clone https://github.com/yourusername/ReState.git
2. **Navigate to the project directory**:
   cd ReState
3. **Install dependencies**:
   npm install
4. **Set up environment variables**:
   - Create a \`.env.local\` file in the root directory.
   - Add your Appwrite credentials and API keys.
5. **Start the development server**:
   npm expo start

## Usage
1. Launch the app on an emulator or physical device using Expo.
2. Log in using Google Authentication.
3. Explore the Home and Explore screens for property listings.
4. View property details and interact with other features.

## Future Enhancements
- Real-time chat for property inquiries.
- User profiles with saved properties and preferences.
- Advanced filtering options for property searches.

## License
This project is licensed under the MIT License.
