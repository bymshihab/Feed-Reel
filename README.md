# Timeline Replica (Feed-Reel)

This project is a simple React frontend for a microservice backend forum website, displaying a "timeline" of posts fetched from three different APIs. Each post shows the user's name, post title, and post body, and can be expanded to see relevant comments. The posts are sorted in descending order of post ID.

## APIs Used

- [Posts API](https://jsonplaceholder.typicode.com/posts)
- [Users API](https://jsonplaceholder.typicode.com/users)
- [Comments API](https://jsonplaceholder.typicode.com/comments)

## Features

- Display a list of posts sorted by post ID in descending order.
- Each post shows the user's name, post title, and post body.
- Ability to expand a post to see its comments.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/timeline-replica.git
   cd timeline-replica
   ```

2. Install the dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```sh
   npm start
   # or
   yarn start
   ```

   The app will be available at `http://localhost:3000`.

## Usage

- The app will fetch posts, users, and comments data from the APIs.
- Posts will be displayed in descending order of post ID.
- Click on a post to expand it and see its comments.
