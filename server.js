const express = require('express');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Function to convert markdown to HTML (basic implementation)
function markdownToHtml(markdown) {
    // Basic markdown to HTML conversion
    let html = markdown
        // Convert headers
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        // Convert paragraphs
        .replace(/^\s*(.*$)/gim, '<p>$1</p>')
        // Convert bold
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        // Convert italic
        .replace(/\*(.*)\*/gim, '<em>$1</em>')
        // Convert links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>')
        // Convert lists
        .replace(/^\s*-\s+(.*$)/gim, '<li>$1</li>')
        // Wrap list items in ul tags
        .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');

    // Remove empty paragraphs
    html = html.replace(/<p><\/p>/g, '');

    return html;
}

// Route to serve book chapters
app.get('/chapters/:chapter', (req, res) => {
    const chapter = req.params.chapter;
    const chapterPath = path.join(__dirname, '_chapters', `${chapter}.md`);

    fs.readFile(chapterPath, 'utf8', (err, data) => {
        if (err) {
            // If specific chapter not found, try with .md extension
            const chapterPathWithMd = path.join(__dirname, '_chapters', `${chapter}.md`);
            fs.readFile(chapterPathWithMd, 'utf8', (err2, data2) => {
                if (err2) {
                    // If chapter not found, redirect to homepage
                    res.redirect('/');
                    return;
                }

                // Convert markdown to HTML and serve with book layout
                const htmlContent = markdownToHtml(data2);
                const bookPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chapter - Physical AI Humanoid Robotics</title>
    <link rel="stylesheet" href="/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="container">
        <!-- Navigation -->
        <nav class="navbar">
            <div class="nav-brand">
                <h2>AI Humanoid Robotics</h2>
            </div>
            <ul class="nav-menu">
                <li><a href="/" class="nav-link">Home</a></li>
                <li><a href="/chapters" class="nav-link">Book</a></li>
                <li><a href="#modules" class="nav-link">Modules</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>

        <main class="book-content">
            <div class="chapter-nav">
                <a href="/chapters" class="nav-btn"><i class="fas fa-arrow-left"></i> Back to Book</a>
            </div>

            <div class="chapter-content">
                ${htmlContent}
            </div>

            <div class="chapter-nav">
                <a href="/" class="nav-btn">Back to Home <i class="fas fa-home"></i></a>
            </div>
        </main>
    </div>

    <script src="/script.js"></script>
</body>
</html>`;
                res.send(bookPage);
            });
            return;
        }

        // Convert markdown to HTML and serve with book layout
        const htmlContent = markdownToHtml(data);
        const bookPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chapter - Physical AI Humanoid Robotics</title>
    <link rel="stylesheet" href="/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="container">
        <!-- Navigation -->
        <nav class="navbar">
            <div class="nav-brand">
                <h2>AI Humanoid Robotics</h2>
            </div>
            <ul class="nav-menu">
                <li><a href="/" class="nav-link">Home</a></li>
                <li><a href="/chapters" class="nav-link">Book</a></li>
                <li><a href="#modules" class="nav-link">Modules</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>

        <main class="book-content">
            <div class="chapter-nav">
                <a href="/chapters" class="nav-btn"><i class="fas fa-arrow-left"></i> Back to Book</a>
            </div>

            <div class="chapter-content">
                ${htmlContent}
            </div>

            <div class="chapter-nav">
                <a href="/" class="nav-btn">Back to Home <i class="fas fa-home"></i></a>
            </div>
        </main>
    </div>

    <script src="/script.js"></script>
</body>
</html>`;
        res.send(bookPage);
    });
});

// Route to serve the book chapters list
app.get('/chapters', (req, res) => {
    const chaptersDir = path.join(__dirname, '_chapters');

    fs.readdir(chaptersDir, (err, files) => {
        if (err) {
            // If directory doesn't exist, redirect to homepage
            res.redirect('/');
            return;
        }

        // Filter markdown files and create a list
        const markdownFiles = files.filter(file => path.extname(file) === '.md');

        let chaptersList = '<div class="chapters-list"><h2>Book Chapters</h2><ul>';
        markdownFiles.forEach(file => {
            const fileName = path.basename(file, '.md');
            const displayName = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            chaptersList += `<li><a href="/chapters/${fileName}">${displayName}</a></li>`;
        });
        chaptersList += '</ul></div>';

        const bookPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Chapters - Physical AI Humanoid Robotics</title>
    <link rel="stylesheet" href="/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="container">
        <!-- Navigation -->
        <nav class="navbar">
            <div class="nav-brand">
                <h2>AI Humanoid Robotics</h2>
            </div>
            <ul class="nav-menu">
                <li><a href="/" class="nav-link">Home</a></li>
                <li><a href="/chapters" class="nav-link active">Book</a></li>
                <li><a href="#modules" class="nav-link">Modules</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>

        <main class="book-content">
            <div class="chapter-nav">
                <a href="/" class="nav-btn"><i class="fas fa-arrow-left"></i> Back to Home</a>
            </div>

            <div class="chapters-content">
                ${chaptersList}
            </div>

            <div class="chapter-nav">
                <a href="/" class="nav-btn">Back to Home <i class="fas fa-home"></i></a>
            </div>
        </main>
    </div>

    <script src="/script.js"></script>
</body>
</html>`;
        res.send(bookPage);
    });
});

// Serve the index.html file for the root route and homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Additional routes for different sections of your book
app.get('/home', (req, res) => {
    res.redirect('/');
});

app.get('/modules', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // This serves the same page but frontend can handle routing
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Middleware to parse JSON
app.use(express.json());

// API routes for chat functionality - proxy to FastAPI backend
const FASTAPI_URL = 'http://localhost:8000';

// Chat endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const fastapiResponse = await fetch(`${FASTAPI_URL}/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body)
        });

        if (!fastapiResponse.ok) {
            throw new Error(`FastAPI responded with status ${fastapiResponse.status}`);
        }

        const data = await fastapiResponse.json();
        res.json(data);
    } catch (error) {
        console.error('Error forwarding chat request:', error);
        res.status(500).json({ error: 'Failed to process chat request', details: error.message });
    }
});

// Select text endpoint
app.post('/api/select-text', async (req, res) => {
    try {
        const fastapiResponse = await fetch(`${FASTAPI_URL}/select-text`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body)
        });

        if (!fastapiResponse.ok) {
            throw new Error(`FastAPI responded with status ${fastapiResponse.status}`);
        }

        const data = await fastapiResponse.json();
        res.json(data);
    } catch (error) {
        console.error('Error forwarding select text request:', error);
        res.status(500).json({ error: 'Failed to process select text request', details: error.message });
    }
});

// Health check endpoint
app.get('/api/health', async (req, res) => {
    try {
        const fastapiResponse = await fetch(`${FASTAPI_URL}/health`);
        const data = await fastapiResponse.json();
        res.json(data);
    } catch (error) {
        console.error('Error checking backend health:', error);
        res.status(500).json({ error: 'Backend not available', details: error.message });
    }
});

// Catch-all route to serve index.html for any other routes (useful for client-side routing)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`AI & Robotics Book website is running at http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server');

    // Start the FastAPI backend automatically
    console.log('Starting FastAPI backend...');
    const fastapiProcess = exec('cd backend && python -m uvicorn main:app --reload', (error, stdout, stderr) => {
        if (error) {
            console.log(`FastAPI backend error: ${error}`);
            return;
        }
        console.log(`FastAPI backend started`);
    });

    fastapiProcess.stdout.on('data', (data) => {
        console.log(`FastAPI: ${data}`);
    });

    fastapiProcess.stderr.on('data', (data) => {
        console.error(`FastAPI Error: ${data}`);
    });
});