Event Board Backend
This is a backend service for an Event Board application, built with Node.js and MongoDB. The app provides users with the ability to browse and register for events, but users cannot modify event details.
It serves as a robust backend API for managing events and handling user registrations.

Key Features:
1. Event Viewing: Users can browse a list of available events with details such as title, date,  description and organized.
2. User Registration for Events: Users can register for any event of their choice, but cannot modify or delete event information.
3. MongoDB for Storage: Event and user data is stored securely in MongoDB, ensuring scalability and flexibility.
4. RESTful API: Provides clear endpoints for accessing event details and handling user registrations, following RESTful principles.

Tech Stack
- Node.js: Server-side JavaScript runtime.
- MongoDB: NoSQL database for event and user data.
- Express.js: Web framework for API routes.
- Mongoose: MongoDB object modeling tool.

Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (local or hosted on services like MongoDB Atlas)

 Installation

1. Clone the repository:
   git clone https://github.com/yourusername/events_app_backend.git
2. Install dependencies:
   cd events_app_backend
   npm install
3. Set up environment variables:
   Create a .env file in the root directory with the following variables:
   PORT=
   MONGODB_USER=
   MONGODB_PASSWORD=
   MONGODB_URL=
   MONGODB_DB=
4. Run the app:
   npm start
   For development with auto-reload (using nodemon):
   npm run dev
5. Ensure MongoDB is running: Make sure MongoDB is running locally or connect to a remote instance.

   API Endpoints
The following API endpoints are available for interacting with events and handling registrations:
1. Event Routes:
GET /api/events: Retrieve a list of all events.
2. User routes:
   POST /api/register: Register a new user.
   GET /api/participants: Retrieve a list of all registered user.

   Deployment
You can deploy this backend to services such as Heroku, Vercel or Render.com following their guidelines for deploying Node.js applications.

License
This project is licensed under the MIT License.


   
