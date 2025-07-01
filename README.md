# NaijaBlog — Inclusive Blogging Platform for Nigerians

**NaijaBlog** is a mobile-first, multilingual blogging platform designed specifically for **underserved Nigerian communities**, including users in **rural areas**, those with **limited internet access**, and individuals with **disabilities**. The platform focuses on **accessibility, local relevance, and ease of use**, offering support for multiple Nigerian languages and simplified UI for first-time internet users.


## 📌 Features

### ✨ Accessibility
- Screen reader-friendly (semantic HTML + ARIA roles)
- Full keyboard navigation
- Voice-to-text support (for physical/low-literacy users)
- Font size and color customization for better readability

### 🌍 Local & Language Support
- Multilingual interface (Yoruba, Igbo, Hausa, Pidgin, English)
- Geo-tagged blog posts by location (e.g., Lagos, Kano)
- Trending content by region and language
- AI-based personalized content feed

### ⚡ Performance & UX
- Progressive Web App (PWA) with offline reading
- Image compression and lazy loading for slow networks
- Clean, mobile-first UI optimized for low-end Android devices
- Lite mode for bandwidth-limited users



## 🔐 Admin Dashboard

A secure, lightweight backend panel for managing blog content:

- Moderate posts (approve, reject, edit)
- Handle reported content
- View analytics: post counts by region/language, pending approvals
- Upload and update static content or dictionary terms
- No user management included



## 🧑‍💻 Tech Stack

| Layer        | Technology           |
|--------------|----------------------|
| Frontend     | React.js / Next.js, Tailwind CSS, PWA APIs |
| Backend      | PHP (Laravel or Core PHP), REST API |
| Database     | MySQL (Hosted on PlanetScale or similar) |
| Hosting      | Vercel (frontend), Hostinger or Render (backend) |
| AI/ML        | TensorFlow.js or basic recommendation algorithms |
| Language     | Google Translate API + Custom Dictionary |
| Accessibility | axe-core, Google Lighthouse, WAVE |



## 🛠 Installation

### 1. Clone the repository:
```bash
git clone https://github.com/your-username/naijavoices.git
cd naijavoices
