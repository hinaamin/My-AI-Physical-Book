# Quickstart: AI-Native Physical AI & Robotics Book

## Overview
This guide will help you set up and start contributing to the AI-Native Physical AI & Robotics Book project. The book follows a specification-first approach using Spec-Kit Plus and Claude Code for AI-assisted authoring.

## Prerequisites
- Git installed on your system
- Node.js (v16 or higher) and npm
- Access to Claude Code for AI-assisted writing
- Basic knowledge of Markdown syntax
- Familiarity with Git workflows (optional but helpful)

## Getting Started

### 1. Clone the Repository
```bash
git clone [repository-url]
cd [repository-name]
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Verify Setup
```bash
# Check that Docusaurus is properly installed
npx docusaurus --version

# Build the documentation locally
npm run build

# Start the local development server
npm run start
```

## Creating New Content

### 1. Create a Specification First
Before writing any content, create a specification for your chapter or section:

```bash
# Use Spec-Kit Plus to create a new specification
# This creates a spec in the specs/ directory
```

### 2. Author Content Using Claude Code
- Create new chapters in the `docs/chapters/` directory
- Follow the structure defined in your specification
- Use Markdown format for all content
- Include diagrams, code examples, and exercises as needed

### 3. Add Assets
- Place images and diagrams in the `docs/assets/` directory
- Reference them using relative paths in your Markdown
- Ensure all assets have appropriate alt text for accessibility

## Building and Testing

### 1. Local Development
```bash
# Start a local development server with live reload
npm run start

# The book will be available at http://localhost:3000
```

### 2. Build Process
```bash
# Build the static site
npm run build

# Test the build locally
npm run serve
```

### 3. MCP Server Setup
```bash
# Navigate to the MCP configuration directory
cd .mcp/

# Start the MCP server for AI access
# (Follow the specific instructions in .mcp/README.md)
```

## Content Guidelines

### Markdown Standards
- Use ATX-style headers (`#`, `##`, `###`)
- Use 4 spaces for indentation
- Wrap lines at 80 characters where possible
- Use relative links for internal references
- Use descriptive alt text for images

### Chapter Structure
Each chapter should include:
- Clear learning objectives
- Theory sections with practical examples
- Exercises or hands-on activities
- Summary of key concepts
- References and further reading

### Diagrams and Assets
- Use SVG for vector graphics when possible
- Provide both low and high-resolution versions of images
- Use descriptive filenames
- Include source files for diagrams when possible

## Validation and Quality Checks

### 1. Content Validation
```bash
# Run content validation checks
npm run validate-content

# This checks:
# - Specification compliance
# - Markdown syntax
# - Link integrity
# - Asset references
```

### 2. Build Validation
```bash
# Run the build process to catch errors
npm run build

# Check for any warnings or errors in the output
```

### 3. Reproducibility Check
```bash
# In a fresh directory, test the full build process:
git clone [repository-url] temp-book
cd temp-book
npm install
npm run build
# If this succeeds, the book is reproducible
```

## MCP Access for AI Systems

### 1. API Endpoints
- Chapters are accessible at `/mcp/chapters/{chapter-id}`
- Sections are accessible at `/mcp/sections/{section-id}`
- Assets are accessible at `/mcp/assets/{asset-id}`
- Specifications are accessible at `/mcp/specifications/{spec-id}`

### 2. Querying Content
AI systems can access structured content via the MCP server using standard HTTP requests.

## Deployment

### GitHub Pages Deployment
The book is automatically deployed to GitHub Pages when changes are merged to the main branch. The deployment workflow:
1. Runs content validation
2. Builds the Docusaurus site
3. Tests the MCP server
4. Deploys to GitHub Pages

## Contributing

### 1. Branch Naming Convention
Use the format `###-short-description` where `###` is the next available number:
```
001-introduction-to-physical-ai
002-humanoid-robotics-fundamentals
```

### 2. Pull Request Process
1. Create a branch from main
2. Make your changes following the specification
3. Run validation checks
4. Submit a pull request with a clear description
5. Wait for review and approval

## Troubleshooting

### Common Issues

**Docusaurus won't start:**
- Ensure all dependencies are installed: `npm install`
- Check for syntax errors in Markdown files
- Verify configuration in `docusaurus.config.js`

**MCP server not accessible:**
- Check that the MCP configuration is correct
- Verify that required ports are available
- Ensure the MCP server is running

**Build fails:**
- Check for broken links or missing assets
- Verify all Markdown syntax is correct
- Ensure all required frontmatter is present in documents

## Next Steps

1. Explore the existing chapters in `docs/chapters/`
2. Review the specifications in `specs/`
3. Set up your development environment
4. Create your first specification following the template
5. Start authoring content with Claude Code