# DUIT Thailand - Minimalist Event Showcase Website

An elegant, mobile-responsive, minimalist showcase website for **DUIT Thailand** (premium cat furniture and pet appliances). This website is specifically designed for event environments where customers scan a QR code at a booth to browse products, view detailed specifications, and claim event-exclusive discount coupons.

## ✨ Features

- **Minimalist & Premium Design**: Warm, natural cream aesthetic matching DUIT's branding guidelines.
- **Dynamic Catalog**: Full search and category filtering for Furniture, Smart Appliances, and Toys/Accessories.
- **Product Details Dialog**: Custom modal detailing product dimensions, materials, and key features.
- **Event Lead Generation & Coupon Ticket**: Capture customer contact details (Name, Phone, LINE ID) and dynamically generate a unique 10% discount coupon code.
- **Staff Lead Manager Panel**: 
  - Protected by a secure staff PIN (`1234`).
  - Lists all captured leads with timestamps.
  - Allows exporting registered customer contacts directly as a CSV spreadsheet (fully supports Thai characters).

## 🚀 How to Run Locally

You don't need any complex build steps. Since this is a vanilla HTML/CSS/JavaScript single-page app (SPA), you can run it directly:

1. Open `index.html` in any web browser.
2. Alternatively, run a local development server for testing:
   ```bash
   npx http-server -p 8080
   ```
   Then open [http://127.0.0.1:8080](http://127.0.0.1:8080).

## 📂 Project Structure

- `index.html`: The main page layout and markup.
- `styles.css`: Visual styling, modern typography, glassmorphism components, and responsive grid layouts.
- `app.js`: Dynamic interactions, product data feeds, slider controls, and lead management.
