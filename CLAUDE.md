# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML/CSS/JavaScript portfolio website for Rob Tapella. The site showcases work examples including data visualization projects, web applications, and product development work.

## Architecture and Structure

- **Static HTML site**: No build process or package manager - direct HTML/CSS/JS files
- **Main pages**: `index.html` (home), `about.html`, and individual project pages (`methane.html`, `data-dashboard.html`, `rna-quantification.html`, `service-map.html`)
- **Assets**: 
  - `/css/styles.css` - Main stylesheet
  - `/js/dropdown.js` - Navigation dropdown functionality
  - `/images/` - Project images and assets
  - `/content/` - Text content files for projects
- **Navigation**: Header with dropdown menu for work examples

## Development

Since this is a static site with no build process:
- Open HTML files directly in browser for testing
- No package manager, dependencies, or build commands
- CSS and JS are linked directly in HTML files
- Images are referenced with relative paths

## Content Management

Project content is stored in `/content/` directory as text files:
- `about-rob.txt` - About page content
- `data-dashboard.txt` - Data dashboard project details
- `rna-quantification.txt` - RNA quantification project details
- `service-map.txt` - Service map project details

When updating project information, modify both the corresponding HTML file and the text file in `/content/`.