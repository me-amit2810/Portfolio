# 🚀 React Portfolio - Modern & Animated

A beautiful, modern portfolio website built with React, featuring smooth animations, responsive design, and a professional appearance.

## ✨ Features

- **🎨 Beautiful Animations**: Smooth transitions and animations using Framer Motion
- **📱 Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **🎯 Modern Design**: Clean, professional design with gradient effects
- **⚡ Fast Performance**: Optimized React components for smooth performance
- **🌙 Dark Theme**: Eye-friendly dark color scheme
- **🎭 Interactive Elements**: Hover effects and interactive components

## 🛠️ Technologies Used

- **Vite**: ⚡ Lightning-fast build tool and dev server
- **React 18**: Latest React version with hooks
- **Framer Motion**: 🎭 Smooth animations and transitions
- **React Icons**: Beautiful icon library
- **CSS3**: Modern styling with animations
- **HTML5**: Semantic markup

## 📦 Installation

1. **Navigate to the project directory:**
   ```bash
   cd react-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server (Vite):**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   The app will automatically open at `http://localhost:3000`

   **Note:** Vite provides lightning-fast HMR (Hot Module Replacement) for instant updates!

## 📁 Project Structure

```
react-portfolio/
├── public/
│   └── (static assets)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx & Navbar.css
│   │   ├── Hero.jsx & Hero.css
│   │   ├── About.jsx & About.css
│   │   ├── Skills.jsx & Skills.css
│   │   ├── Projects.jsx & Projects.css
│   │   ├── Contact.jsx & Contact.css
│   │   └── Footer.jsx & Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.js`):
   - Update name, title, and description
   - Modify statistics (years, projects, technologies)

2. **About Section** (`src/components/About.js`):
   - Update your bio and background
   - Modify features and achievements

3. **Skills Section** (`src/components/Skills.js`):
   - Add/remove skills
   - Update skill levels (0-100)
   - Add skill icons in `/public/skills/` folder

4. **Projects Section** (`src/components/Projects.js`):
   - Add your projects
   - Update project images in `/public/projects/` folder
   - Add project links (GitHub, Live Demo)

5. **Contact Section** (`src/components/Contact.js`):
   - Update contact information
   - Configure form submission (currently logs to console)

6. **Footer** (`src/components/Footer.js`):
   - Update social media links
   - Modify contact information

### Update Images

Place your images in the `public` folder:
- Profile image: `public/bg.png`
- About image: `public/about.png`
- Project images: `public/projects/`
- Skill icons: `public/skills/`

### Change Colors

The main color scheme uses:
- Primary: `#667eea` (Purple)
- Secondary: `#764ba2` (Dark Purple)
- Background: `#0a0a0a` (Dark)
- Text: `#ffffff` (White)
- Secondary Text: `#b8c5d6` (Light Gray)

You can update these in the CSS files or create CSS variables.

## 🚀 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎭 Animations

The portfolio includes:
- **Fade In Animations**: Elements fade in as you scroll
- **Hover Effects**: Interactive hover states on cards and buttons
- **Smooth Transitions**: All transitions use easing functions
- **Parallax Effects**: Subtle parallax on hero section
- **Floating Elements**: Animated floating cards

## 📝 Form Handling

The contact form currently logs to console. To integrate with a backend:

1. Update `src/components/Contact.js`
2. Replace the `handleSubmit` function
3. Add your API endpoint
4. Handle form submission and validation

## 🔧 Available Scripts

- `npm run dev`: Start development server with Vite
- `npm run build`: Build for production
- `npm run preview`: Preview production build locally

## 📄 License

This project is open source and available for personal and commercial use.

## 🙏 Acknowledgments

- **Framer Motion**: For amazing animation library
- **React Icons**: For beautiful icons
- **Google Fonts**: For Inter and Poppins fonts

## 📞 Support

For questions or issues, please open an issue on GitHub or contact:
- Email: amitbhardwaj26210@gmail.com
- GitHub: [@me-amit2810](https://github.com/me-amit2810)

---

**Built with ❤️ using React**

