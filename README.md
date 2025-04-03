# Smally - URL Shortener

Smally is a simple and efficient URL shortener that converts long URLs into short, manageable links. It is designed to be lightweight, fast, and user-friendly.

## Features
- Shorten long URLs instantly
- Custom short link generation
- URL analytics (click tracking)
- API support for developers
- User authentication for managing links

## Installation

### Prerequisites
- Node.js (latest LTS version recommended)
- MongoDB (for storing shortened URLs)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/smally.git
   ```
2. Navigate to the project folder:
   ```sh
   cd smally
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory and add the following:
     ```env
     PORT=3000
     MONGO_URI=mongodb://localhost:27017/smally
     BASE_URL=http://localhost:3000
     ```
5. Start the application:
   ```sh
   npm start
   ```
6. Open your browser and visit `http://localhost:3000`

## API Usage
### Shorten a URL
**Endpoint:** `POST /api/shorten`

**Request:**
```json
{
  "longUrl": "https://example.com/very-long-url"
}
```

**Response:**
```json
{
  "shortUrl": "http://localhost:3000/abc123"
}
```

### Retrieve Original URL
**Endpoint:** `GET /:shortId`

Redirects to the original long URL.

## Contributors
- **Kosisohukwu Emmanuel** - [LinkedIn](#)
- **Raphael Ekpei** - [LinkedIn](#)
- **Michael Godwin** - [LinkedIn](#)
- **Folake Rachael** - [LinkedIn](#)

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries, reach out to [your-email@example.com](mailto:your-email@example.com).
