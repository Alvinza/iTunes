# iTunes Media Explorer

Full-stack web application that harnesses the iTunes API to let users explore and discover various media content. Built with modern React practices, Node.js backend, and JWT authentication for secure API access.

## 🌐 Live Demo
**[View Live App](https://alvin-itunes.onrender.com)**

---

## 🎵 Features

### Multi-Media Search:
- Search through iTunes' vast library of content.
- Filter by media types including music, books, movies, and more.
- Real-time search results powered by the iTunes API.

### Interactive User Features:
- Add any media item to your favorites collection.
- Remove items from favorites with a single click.
- Persistent favorites storage for seamless user experience.

### Responsive Design:
- Fully responsive layout that adapts to all screen sizes.
- Mobile-first approach ensuring compatibility across devices.
- Intuitive user interface for seamless navigation.

---

## 🛠️ Full-Stack Technologies

### Frontend
- **React** - Built using the latest version of React for optimal performance
- **CSS (Inline Styling)** - Modern custom styling for responsive design
- **Bootstrap** - Button components and UI elements
- **Local Storage** - For maintaining user favorites across sessions
- **Axios** - HTTP client for API communication

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, minimalist web framework
- **JWT (JSON Web Tokens)** - Secure authentication system
- **Axios** - HTTP client for iTunes API proxy requests
- **CORS** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment variables management

### External APIs
- **iTunes Search API** - Apple's comprehensive media database

---

## 🎯 How to Use

1. **Authentication**: App automatically generates JWT token for secure API access
2. **Search Media**: Enter keywords to search across iTunes' extensive media library
3. **Filter Content**: Select specific media types (music, movies, books, etc.)
4. **Browse Results**: View detailed information about each media item
5. **Save Favorites**: Add interesting items to your personal favorites collection
6. **Manage Collection**: Remove items from favorites as needed
7. **Persistent Data**: Your favorites are automatically saved and restored

---

##  API Design

### Backend Architecture
- **Proxy Server**: Custom Express.js server acts as middleware between frontend and iTunes API
- **JWT Authentication**: Secure token-based authentication system
- **Error Handling**: Robust error management for API failures and authentication
- **Rate Limiting**: Optimized requests to ensure smooth performance
iTunes database (requires JWT token)


---

## 💡 Development Challenges & Solutions

### Challenge 1: CORS Issues with iTunes API
**Problem**: Direct frontend calls to iTunes API were blocked due to CORS policy restrictions.

**Solution**: Built a custom Express.js proxy server that handles iTunes API requests on the backend, eliminating CORS issues while maintaining security through JWT authentication.

### Challenge 2: API Rate Limiting & Performance
**Problem**: Multiple rapid requests to iTunes API could cause rate limiting and poor user experience.

**Solution**: Implemented request optimization with proper error handling and response caching strategies. Added JWT authentication to control and monitor API usage.

### Challenge 3: State Management Across Sessions
**Problem**: User favorites were lost when closing the browser, creating poor user experience.

**Solution**: Integrated localStorage to persist user favorites across browser sessions, ensuring data remains available even after page refresh or browser restart.

### Challenge 4: Secure API Access
**Problem**: Needed to protect backend API endpoints while maintaining smooth user experience.

**Solution**: Implemented JWT-based authentication system with automatic token generation and refresh, providing security without requiring user login complexity.

---

The full-stack application is deployed on Render:
- **Frontend**: Static React build served via Render
- **Backend**: Node.js server hosted on Render with environment variables


## 📞 Contact

For questions, suggestions, or collaboration opportunities:
- Email: alvinzondi09@gmail.com

---

**Discover your next favorite media content with secure 🎬🎵📚**
