---
title: "ID Card Designer Documentation"
date: "2026-08-16"
description: "Documentation for the Stratametriq ID Card Designer package and SaaS Platform, including quick start, features, security, and API reference."
---

# 📦 @stratametriq/id-card-designer

A universal, dynamic, and highly customizable **ID Card Designer & Batch Print Dashboard**. Available as both a cloud-based SaaS platform and an embeddable open-source engine for React, Vue, Angular, and Vanilla JS.

> **Current release:** 1.8.1

---

## 📑 Table of Contents

- [Overview](#overview)
- [Live Demo & SaaS](#live-demo--saas)
- [Core Features](#core-features)
- [How It Works](#how-it-works)
- [Importing Data](#importing-data)
- [Designing Cards](#designing-cards)
- [Batch Printing & Export](#batch-printing--export)
- [Cloud & Offline Modes](#cloud--offline-modes)
- [Architecture & Security](#architecture--security)
- [Developer Docs (NPM)](#developer-docs-npm)
- [Pricing / License](#pricing--license)
- [FAQ](#faq)

---

## Overview

`@stratametriq/id-card-designer` is a developer-focused ID-card design and generation engine.

It is designed to solve the batch-generation problem for:
- Student Information Systems
- School and College ERP systems
- HR and Employee Management systems
- Event and Conference Badge systems
- Membership systems
- Internal identity-card workflows

The package combines **visual Canva-style card design** with **structured data and batch generation** so developers do not need to build an ID-card production workflow from scratch.

---

## Live Demo & SaaS

You do not need to be a developer to use Stratametriq ID Card Studio! We host a fully managed, secure SaaS version for schools and businesses.

### 🌍 [Launch Stratametriq Studio (Free SaaS)](https://studio.stratametriq.com)
Log in securely with your Google account or email to instantly start designing and saving your templates to the cloud.

### 🚀 [Try the Developer Code Demo (StackBlitz)](https://stackblitz.com/edit/vitejs-vite-jtyvdj5g?file=src%2FApp.tsx)
If you are a developer looking to embed the engine, test it live in your browser with just two lines of code.

---

## Core Features

- **🎨 Visual Canva-style Designer:** A complete workspace for designing ID cards with a visual canvas, configurable elements, templates, and live preview capabilities.
- **📥 Excel & CSV Import:** Import structured card data directly from `.csv`, `.xlsx`, and `.xls`. Imported columns can be used as dynamic fields inside templates.
- **🖼️ Bulk ZIP Photo Import:** Upload a `.zip` archive containing your Excel spreadsheet and a folder of employee/student images. The importer will automatically fuzzy-match image filenames to your records, preparing thousands of cards instantly.
- **🔳 Dynamic QR & Barcodes:** Generate dynamic QR codes and 1D barcodes and bind them to record values such as admission numbers, employee IDs, or verification URLs.
- **🏷️ Dynamic Field Placeholders:** Bind template elements to imported data (e.g., `Name: {{studentName}}`).
- **🧠 Conditional Logic Rendering:** Text elements can use JavaScript expressions for conditional output (e.g., `{{ department === 'HR' ? 'Red' : 'Blue' }}`).
- **🔲 Smart Alignment Guides:** Magnetically snap elements to the center of the card or align them perfectly with other elements using color-coded visual guides (Purple for center, Red for edges).
- **🖨️ Professional Print Calibration:** Export perfectly dimensioned CR80 cards for thermal PVC printers (Zebra, Fargo, Magicard), or generate A4/A3 batch PDFs with hardware cutting marks.
- **⌨️ Keyboard Shortcuts:** Navigate the editor faster using Undo/Redo (`Ctrl+Z`, `Ctrl+Y`), Duplicate (`Ctrl+C`, `Ctrl+V`), Delete, and Arrow Key nudging.
- **🖼️ Image Fallbacks:** Beautifully generated initial-based avatars with consistent gradient backgrounds are automatically inserted if a profile photo is missing.

---

## How It Works

The entire architecture is designed around a lightning-fast, client-side generation workflow.

```text
Excel / CSV / ZIP
        ↓
Import Records & Match Photos
        ↓
Design Template (Drag & Drop)
        ↓
Bind Dynamic Fields & QR Codes
        ↓
Live Live Preview
        ↓
Batch Generate
        ↓
Multi-page PDF / High-Res ZIP
```

---

## Importing Data

### CSV / Excel
Select **Import Data** and upload `.csv`, `.xlsx`, or `.xls` files. The importer automatically maps spreadsheet columns into dynamic fields.

### ZIP + Bulk Photos
Prepare a ZIP containing the spreadsheet/CSV and image files.
```text
id-cards.zip
├── students.xlsx
└── photos/
    ├── aarav_sharma.jpg
    └── diya_patel.jpg
```
The intelligent importer automatically matches the photo filenames to the correct student/employee record.

---

## Designing Cards

Click the vibrant **Launch Studio Canvas** button to open the editor.

### Dynamic Text
Type a field placeholder wrapped in double braces:
```text
{{studentName}}
```

### Conditional Text
Use Javascript expressions to change output based on data:
```text
{{ department === 'HR' ? 'Red' : 'Blue' }}
```

### Backgrounds & Layout
Upload a high-resolution card background from your computer. Use the Smart Alignment Guides to perfectly center your text, barcodes, and profile pictures over your background.

---

## Batch Printing & Export

Once your design is ready, select your export format:

1. **Batch A4/A3 PDF:** The engine mathematically calculates the perfect grid spacing, applies hardware cutting marks, and generates a multi-page PDF ready for standard office printers.
2. **Thermal PVC Export:** Generates a perfectly dimensioned CR80 layout (1 card per page) optimized for Zebra, Fargo, and Magicard thermal printers.
3. **High-Res ZIP Export:** Batch export individual ID cards as high-resolution (300 DPI) PNG files neatly packaged in a single ZIP archive.

---

## Cloud & Offline Modes

### SaaS Cloud Sync (studio.stratametriq.com)
If you are logged into our SaaS platform, your custom ID card templates are automatically synced to our secure cloud. You can log in from any computer and your designs will be waiting for you.

### Offline Workspace (.stmq)
If you are using the open-source engine in an air-gapped or highly secure offline environment, you can click **Backup Project** to download your entire workspace (data, photos, and templates) as a local `.stmq` JSON file. You can load this file later to resume work without ever touching the internet.

---

## Architecture & Security

### Is it safe to upload my Excel data?
**YES. It is 100% secure.** 
When you upload an Excel or CSV file containing sensitive student or employee data, **none of that data is ever sent to a server**. 

The entire ID Card Designer is a purely client-side architecture. It runs natively in your local web browser using the HTML5 File API. Your sensitive spreadsheet data and employee photos remain strictly on your computer and are stored temporarily in your browser's local IndexedDB. 

Our servers only store your *blank template designs* (so you don't lose your work), but we never touch, see, or process your actual spreadsheet data.

---

## Developer Docs (NPM)

Building an ERP or HR system? Embed the designer directly into your application!

### Installation
```bash
npm install @stratametriq/id-card-designer
```

### Basic Usage
```jsx
import { IdCardManager } from '@stratametriq/id-card-designer';
import '@stratametriq/id-card-designer/dist/index.css';

function App() {
  return (
    <div style={{ height: '100vh', backgroundColor: '#060913' }}>
      <IdCardManager showFooter={false} />
    </div>
  );
}
```

### Components
- `<IdCardManager />`: Complete dashboard experience. Use this when you want the complete import → design → preview → batch-export workflow.
- `<IdCardDesigner />`: Standalone visual designer.
- `<IdCardPreview />`: Embed a live ID-card preview inside another application screen.

---

## Pricing / License

`@stratametriq/id-card-designer` operates under a **Dual Licensing Model** to support both the open-source community and enterprise development. 

### 1. Community Tier (Free)
Free for personal projects, students, open-source initiatives, and non-profit organizations. Under this tier, you may not use the software in any commercial product or revenue-generating service.

### 2. Commercial / Enterprise Tier (Paid)
Required for any commercial use, including:
- Commercial SaaS applications
- School & College ERP systems
- HR & Employee Management suites
- Internal corporate production deployments
- White-label applications

👉 **[Purchase a Commercial Enterprise License Here](https://waniabid.gumroad.com/l/id-card-designer-pro)**

---

## FAQ

**How is this different from Canva?**
Canva is designed primarily for single visual designs. Stratametriq focuses on an automated, data-driven workflow: *One Template + Many Spreadsheet Records = Batch Printable ID Cards in seconds.*

**Do I need to install any software? Will it give me a virus?**
**No installation is required.** ID Card Studio is a web-based application. You do not need to download or install any `.exe` or `.dmg` files, meaning there is **zero risk of viruses or malware**. Simply open your browser and start designing.

**Does the core workflow require a StrataMetriq server?**
No. The core generation engine runs entirely in your browser using standard HTML5 Canvas technologies.
