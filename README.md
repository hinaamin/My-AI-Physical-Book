# Physical AI Humanoid Robotics - Digital Books Platform

A comprehensive digital books platform for exploring Physical AI and Humanoid Robotics. This platform features a homepage with a "Start" button that leads to a books page displaying all available books in card format, with full functionality for reading, navigating chapters, and returning to the home page.

## Folder Structure

```
humonide-robotics/
├── index.html          # Homepage with Start button
├── books.html          # Books page displaying all books in card format
├── book-content.html   # Individual book content with chapter navigation
├── _config.yml         # Configuration file
├── _chapters/          # Sample chapter content
│   └── chapter1.md
├── assets/
│   ├── css/
│   │   └── style.css   # Responsive styling
│   └── js/
│       ├── main.js     # Homepage functionality
│       ├── books.js    # Books page functionality
│       └── book-content.js # Book content and navigation
└── server.js           # Local development server
```

## Setup Instructions

### For Local Development:

1. Install Node.js dependencies:
   ```bash
   npm install express
   ```

2. Run the local server:
   ```bash
   node server.js
   ```

3. Visit `http://localhost:8080` in your browser

### For GitHub Pages Deployment:

1. Push all files to your GitHub repository
2. Enable GitHub Pages in repository settings
3. The site will be available at `https://yourusername.github.io/repository-name/`

## Platform Features

The digital books platform includes:

### Homepage (`index.html`)
- Clean, responsive design
- "Start Reading" button to access the books library
- Welcome message and platform description

### Books Page (`books.html`)
- Grid layout displaying all available books as cards
- Each book card shows title, author, and description
- Clickable cards to open individual books
- Back to home navigation

### Book Content Page (`book-content.html`)
- Chapter navigation with previous/next buttons
- Dynamic content loading based on selected book
- Responsive layout for reading
- Back to books navigation

### Functionality
- Full chapter navigation system
- Responsive design for all devices
- JavaScript-powered interactivity
- Markdown content rendering
- Local storage for book data persistence

## Adding New Books

To add new books to the platform:
1. Modify the `books` array in `assets/js/books.js`
2. Add new book objects with the required structure:
   ```javascript
   {
     id: X,
     title: "Book Title",
     author: "Author Name",
     description: "Book description",
     chapters: [
       {
         id: 1,
         title: "Chapter Title",
         content: "# Chapter Content in Markdown..."
       }
     ]
   }
   ```

## Customization

### Styling
- Modify `assets/css/style.css` to change colors, fonts, and layout
- All pages use the same CSS file for consistent styling

### Content
- Book content is stored in the JavaScript files
- Content supports basic markdown formatting
- Add new chapters by extending the chapters array in the book objects