# Data Model: AI-Native Physical AI & Robotics Book

## Entity: Book Chapter
- **Name**: String (required) - Unique identifier for the chapter
- **Title**: String (required) - Human-readable title of the chapter
- **Description**: String (required) - Brief summary of chapter content
- **Specification**: Reference (required) - Link to corresponding specification document
- **Sections**: Array of Section entities - Content divisions within the chapter
- **Prerequisites**: Array of Chapter references - Required knowledge before reading
- **Learning Objectives**: Array of String - What readers should learn
- **Status**: Enum (draft, review, approved, published) - Content development status
- **Created**: DateTime - When the chapter was created
- **Modified**: DateTime - When the chapter was last modified

## Entity: Section
- **ID**: String (required) - Unique identifier within the chapter
- **Title**: String (required) - Section heading
- **Content**: String (required) - Markdown content of the section
- **Type**: Enum (theory, simulation, deployment, exercise, diagram) - Content category
- **Dependencies**: Array of String - External dependencies or tools required
- **Learning Outcomes**: Array of String - Specific skills/knowledge outcomes
- **Assets**: Array of Asset references - Images, diagrams, code examples

## Entity: Specification Document
- **ID**: String (required) - Unique identifier for the specification
- **Chapter**: Reference (required) - Associated chapter
- **Scope**: String (required) - What the specification covers
- **Requirements**: Array of String - Functional requirements
- **Success Criteria**: Array of String - Measurable outcomes
- **User Scenarios**: Array of String - How users will interact with content
- **Validation Rules**: Array of String - How to verify content quality

## Entity: Asset
- **ID**: String (required) - Unique identifier for the asset
- **Type**: Enum (image, diagram, video, code, simulation, document) - Asset category
- **Path**: String (required) - File path relative to assets directory
- **Title**: String (required) - Descriptive title
- **Description**: String - Detailed description of the asset
- **Usage Context**: String - Where and how the asset is used
- **Alt Text**: String - Accessibility text for images
- **Metadata**: Object - Additional information (size, dimensions, etc.)

## Entity: MCP Resource
- **ID**: String (required) - Unique identifier for MCP access
- **Type**: Enum (chapter, section, asset, specification) - Resource category
- **Path**: String (required) - Path in the MCP resource hierarchy
- **Content**: String - Structured content accessible via MCP
- **Schema**: Object - Definition of the data structure for AI consumption
- **Metadata**: Object - Additional information for AI systems
- **Access Level**: Enum (public, restricted) - Visibility settings

## Entity: Book Configuration
- **Title**: String (required) - The book's main title
- **Subtitle**: String - Additional descriptive text
- **Authors**: Array of String - Book authors
- **Version**: String (required) - Book version following semantic versioning
- **Target Audience**: Array of String - Intended readers
- **Prerequisites**: Array of String - Required background knowledge
- **Chapters**: Array of Chapter references - Ordered list of book chapters
- **Theme**: Object - Docusaurus theme configuration
- **Navigation**: Object - Book navigation structure

## Entity: Quality Validation
- **Type**: Enum (content, technical, reproducibility, acceptance) - Validation category
- **Criteria**: String (required) - What is being validated
- **Method**: String (required) - How validation is performed
- **Status**: Enum (pending, passed, failed) - Current validation status
- **Last Run**: DateTime - When validation was last executed
- **Result**: Object - Detailed results of the validation
- **Automated**: Boolean - Whether validation runs automatically

## Relationships

- Book Configuration "contains" multiple Chapters
- Chapter "contains" multiple Sections
- Section "references" multiple Assets
- Chapter "references" one Specification Document
- MCP Resource "represents" Chapter, Section, Asset, or Specification
- Quality Validation "applies to" Chapter, Section, or the entire Book
- Chapter "depends on" other Chapters (prerequisites)

## Validation Rules

- Each Chapter must have exactly one corresponding Specification Document
- Section content must be valid Markdown format
- Asset paths must exist in the repository
- MCP Resources must have unique IDs
- Chapter prerequisites must exist as valid Chapter references
- Learning objectives must be measurable and specific
- All external dependencies must be documented