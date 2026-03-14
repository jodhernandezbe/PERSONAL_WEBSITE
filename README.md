# Academic Personal Website

A clean, professional academic website built with Jekyll, designed in the style of modern academic portfolios like vpalaciob.com.

## Design Features

- **Academic Layout**: Clean sidebar with author profile and top navigation bar
- **Collapsible Research Sections**: Organized research themes with expandable content
- **Professional Styling**: Inter font family with blue accent colors (#007acc)
- **Responsive Design**: Mobile-first approach that works on all devices
- **SEO Optimized**: Built-in SEO tags and sitemap generation

## Content Sections

- **About**: Academic background, research focus, and current position
- **Experience**: Professional history at Argonne National Laboratory and EPA
- **Research**: Streamlined research themes with representative publications
- **Projects**: Software development work including GREET, StEWI, and PyGREET
- **Software**: Production systems and tools used by researchers worldwide

## Setup

1. **Fork this repository**
2. **Enable GitHub Pages**:
   - Go to repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source
3. **Content is already customized** with Jose D. Hernandez-Betancur's information:
   - `_config.yml` configured with actual details
   - All `.md` files contain real professional information
   - Links point to actual GitHub, LinkedIn, and Google Scholar profiles

## Local Development

```bash
# Install dependencies
bundle install

# Run locally
bundle exec jekyll serve

# Visit http://localhost:4000
```

## Customization

### Personal Information
The `_config.yml` is already configured with:
- Jose D. Hernandez-Betancur's contact information
- Real social media links (GitHub, LinkedIn, Google Scholar, Medium)
- Accurate site description reflecting Argonne National Laboratory role

### Content
All files contain Jose's actual professional information:
- `about.md` - Real background, education, and skills from PhD and current role
- `experience.md` - Complete work history from Argonne to EPA to academic positions
- `research.md` - Streamlined research themes with collapsible sections and representative publications
- `projects.md` - Real software projects including GREET, StEWI, and PyGREET
- `applications.md` - Actual production systems and software tools in use worldwide

### Styling
- Academic-style layout with embedded CSS in `_layouts/default.html`
- Custom collapsible research sections with smooth animations
- Professional color scheme with blue accents (#007acc)
- Inter font family for modern, readable typography
- Mobile-responsive design with sidebar that stacks on smaller screens

## Deployment

The site automatically deploys to GitHub Pages when you push to the main branch using GitHub Actions.

## Technologies Used

- **Jekyll**: Static site generator
- **Minima Theme**: Modern, responsive theme
- **SCSS**: Advanced CSS with variables and mixins
- **GitHub Pages**: Free hosting
- **GitHub Actions**: Automated deployment

## License

This project is open source and available under the [MIT License](LICENSE).