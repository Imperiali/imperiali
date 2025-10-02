<div align="center">

# 👨‍💻 Igor Imperiali

### Software Engineer Specialist | Full-Stack Developer

**[🇧🇷 Português](README.md)** | **[🇺🇸 English](README_EN.md)**

[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://imperiali.github.io/imperiali/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/igor-imperiali)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Imperiali)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:igor.imperiali@gmail.com)

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=Imperiali&show_icons=true&theme=tokyonight&hide_border=true&include_all_commits=true&count_private=true)

![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=Imperiali&theme=tokyonight&hide_border=true)

![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=Imperiali&layout=compact&theme=tokyonight&hide_border=true)

</div>

---

## 🚀 About the Project

Modern and responsive personal portfolio developed with the latest web technologies. Showcases professional experience, technical skills, projects, and recommendations in an elegant and interactive way.

### ✨ Features

- 🌐 **Multilingual** - Full support for Portuguese and English
- 🌙 **Dark Mode** - Dark/light theme with persistence
- 📱 **Responsive** - Adaptive design for all devices
- ⚡ **Performance** - Ultra-fast static site
- 🎨 **Animations** - Smooth and modern transitions
- 📧 **Contact Form** - EmailJS integration
- 🎠 **Recommendations Carousel** - With autoplay and navigation
- 🔍 **SEO Optimized** - Meta tags and semantic structure

## 🛠️ Tech Stack

### Frontend

![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Tools & Services

![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-0072C6?style=for-the-badge&logo=minutemailer&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- EmailJS account (optional, for contact form)

### Installation

```bash
git clone https://github.com/Imperiali/imperiali.git
cd imperiali
npm install
```

### Environment Setup

1. Copy the example file:
```bash
cp .env.example .env
```

2. Configure your EmailJS credentials in `.env`:
```env
PUBLIC_EMAILJS_SERVICE_ID=your_service_id
PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
PUBLIC_EMAILJS_AUTOREPLY_ID=your_autoreply_id
PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Development

```bash
npm run dev
```

Access at `http://localhost:5173`

### Build

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
igor-portfolio/
├── src/
│   ├── routes/
│   │   ├── +page.svelte      # Main page
│   │   ├── +layout.svelte    # Base layout
│   │   └── +layout.js        # Pre-render configuration
│   ├── lib/
│   │   ├── components/       # Reusable components
│   │   └── i18n/            # Translations (pt/en)
│   ├── app.css              # Global styles with Tailwind
│   └── app.html             # HTML base template
├── static/                  # Static files
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions workflow
├── package.json
├── svelte.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Key Features

- **Modern Design**: Clean and professional interface
- **Responsive**: Adapted for all devices
- **Performance**: Ultra-fast static site
- **SEO**: Optimized meta tags
- **Accessibility**: Proper navigation and semantics
- **i18n**: Multilingual support (Portuguese and English) with dynamic switching
- **Recommendations Carousel**: Interactive navigation with autoplay and controls
- **Projects Section**: Minimalist design with large SVG icons, tech stack, and links
- **Contact Form**: EmailJS integration to receive messages directly

## 📝 Customization

### Colors

Main colors can be adjusted in `tailwind.config.js`:

```js
colors: {
  primary: { ... }
}
```

### Content and Translations

Translations are in `src/lib/i18n/translations/`:
- `pt.js` - Portuguese
- `en.js` - English

To add a new language:
1. Create a new file in `src/lib/i18n/translations/`
2. Add it to `index.js`
3. Add the flag in `LanguageSwitcher.svelte` component

The selected language is saved in the browser's `localStorage`.

### Projects

The projects section uses a minimalist design with large SVG icons in the background.

To edit projects:
1. Open `src/lib/i18n/translations/pt.js` and `en.js`
2. Edit the `projects.items` section
3. Choose an available icon: `search`, `weather`, `location`, `shopping`, `vue`, `flutter`
4. To add new icons, edit `src/lib/components/ProjectIcons.svelte`

### Contact Form

The form uses EmailJS to send emails. To configure:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service
3. Create **2 templates**:
   - 1 main template (you receive the contact)
   - 1 bilingual auto-reply (automatic response for user)
4. Get the credentials (Service ID, Template IDs, Public Key)
5. Create a `.env` file in the project root (copy from `.env.example`)
6. Add your credentials to the `.env` file:
   ```env
   PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   PUBLIC_EMAILJS_TEMPLATE_ID=main_template
   PUBLIC_EMAILJS_AUTOREPLY_ID=autoreply
   PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
7. See ready-made templates in `EMAIL_TEMPLATES.md` and instructions in `EMAILJS_SETUP.md`

**Note**: The project works without configuration, but emails won't be sent until you configure EmailJS.

## 🌐 Deploy to GitHub Pages

The project is configured with GitHub Actions for automatic deployment.

### Initial Setup

1. **Fork/Clone** this repository

2. **Configure GitHub Pages:**
   - Go to `Settings` → `Pages`
   - Under **Source**, select `GitHub Actions`

3. **Add Secrets:**
   - Go to `Settings` → `Secrets and variables` → `Actions`
   - Add the following secrets:
     - `PUBLIC_EMAILJS_SERVICE_ID`
     - `PUBLIC_EMAILJS_TEMPLATE_ID`
     - `PUBLIC_EMAILJS_AUTOREPLY_ID`
     - `PUBLIC_EMAILJS_PUBLIC_KEY`

4. **Configure Base Path:**
   - The base path is automatically configured using the repository name
   - If you renamed the repository, the GitHub Actions workflow will handle it

5. **Push to Main:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages"
   git push origin main
   ```

6. **Wait for Deploy:**
   - GitHub Actions will build and deploy automatically
   - Access at: `https://Imperiali.github.io/imperiali/`

### Manual Deploy (Other Platforms)

The project can also be hosted on:

- **Vercel** - `npm install -g vercel && vercel`
- **Netlify** - Drag the `build/` folder to the dashboard
- **Cloudflare Pages** - Connect the repository in the dashboard

## 📊 GitHub Stats

<div align="center">

![Profile Views](https://komarev.com/ghpvc/?username=Imperiali&color=blueviolet&style=for-the-badge)

[![GitHub followers](https://img.shields.io/github/followers/Imperiali?style=for-the-badge&logo=github)](https://github.com/Imperiali?tab=followers)
[![GitHub stars](https://img.shields.io/github/stars/Imperiali?style=for-the-badge&logo=github)](https://github.com/Imperiali?tab=repositories)

</div>

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Igor Imperiali**

- 💼 LinkedIn: [igor-imperiali](https://linkedin.com/in/igor-imperiali)
- 📧 Email: igor.imperiali@gmail.com
- 🌐 Portfolio: [imperiali.github.io/imperiali](https://imperiali.github.io/imperiali)

---

<div align="center">

### 💜 Built with SvelteKit

If this project helped you, consider giving it a ⭐!

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)
![Open Source](https://img.shields.io/badge/Open%20Source-💚-green?style=for-the-badge)

</div>
