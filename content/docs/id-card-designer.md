---
title: "ID Card Designer Documentation"
date: "2026-08-13"
description: "Documentation for the Stratametriq ID Card Designer package, including quick start, features, and API reference."
---

# 📦 @stratametriq/id-card-designer

A universal, dynamic, and highly customizable **ID Card Designer & Batch Print Dashboard** for React, Vue, Angular, and Vanilla JS.

> **Current release:** 1.7.0

---

## 📑 Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [How It Works](#how-it-works)
- [Import Data](#import-data)
- [Design Cards](#design-cards)
- [Batch Printing](#batch-printing)
- [Offline Mode](#offline-mode)
- [Privacy](#privacy)
- [Developer Docs](#developer-docs)
- [NPM](#npm)
- [Pricing / License](#pricing--license)
- [FAQ](#faq)

---

## Overview

`@stratametriq/id-card-designer` is a developer-focused ID-card design and generation package.

It is designed for applications such as:
- Student Information Systems
- School and College ERP systems
- HR and Employee Management systems
- Event and Conference Badge systems
- Membership systems
- Internal identity-card workflows

The package combines **visual card design** with **structured data and batch generation** so developers do not need to build an ID-card production workflow from scratch.

---

## Live Demo

You can launch a complete ID card design studio and batch print dashboard with just **two lines of code**. It comes with pre-built dummy data so you can test it immediately!

### 🚀 [Try the Live Interactive Demo on StackBlitz](https://stackblitz.com/edit/vitejs-vite-jtyvdj5g?file=src%2FApp.tsx)

---

## Features

- **🎨 Visual ID Card Designer:** A complete workspace for designing ID cards with a visual canvas, configurable elements, templates, and preview capabilities.
- **📥 CSV & Excel Import:** Import structured card data from `.csv`, `.xlsx`, and `.xls`. Imported columns can be used as dynamic fields inside templates.
- **🖼️ Bulk ZIP Photo Import:** Upload a ZIP archive containing your spreadsheet/CSV and images. The importer can fuzzy-match image filenames with records, making it possible to prepare large batches of cards without manually attaching every photo.
- **🔳 QR Codes & Barcodes:** Generate dynamic QR codes and 1D barcodes and bind them to record values such as admission numbers, employee IDs, URLs, or other unique identifiers.
- **🏷️ Dynamic Field Placeholders:** Bind template elements to imported data (e.g., `ID: {{admissionNo}}`).
- **🧠 Conditional Rendering:** Text elements can use JavaScript expressions for conditional output (e.g., `{{ department === 'HR' ? 'Red' : 'Blue' }}`).
- **📐 Printer Calibration:** X/Y offsets can be applied to compensate for mechanical print alignment differences when producing physical PVC cards.

---

## How It Works

The package is designed around a client-side card-generation workflow.

```text
CSV / Excel / JSON
        ↓
Import Records
        ↓
Match Photos
        ↓
Design Template
        ↓
Bind Dynamic Fields
        ↓
Add QR / Barcode
        ↓
Preview
        ↓
Batch Generate
        ↓
PDF / PNG
```

The package can be embedded into an existing web application. Your application remains responsible for its own backend, authentication, database, and business logic.

---

## Import Data

### CSV / Excel
Select **Import Data** and upload `.csv`, `.xlsx`, or `.xls` files. The importer automatically maps spreadsheet columns into dynamic fields.

### ZIP + Photos
Prepare a ZIP containing the spreadsheet/CSV and image files.
```text
id-cards.zip
├── students.xlsx
└── photos/
    ├── aarav_sharma.jpg
    └── diya_patel.jpg
```
The importer attempts to fuzzy-match image filenames to the corresponding records.

---

## Design Cards

Open **Launch Studio Canvas**.

### Dynamic Text
Use a field placeholder:
```text
{{studentName}}
```

### Conditional Text
Use Javascript expressions:
```text
{{ department === 'HR' ? 'Red' : 'Blue' }}
```

### QR / Barcode
Add a QR or barcode element and bind it to a unique field.

### Background
Upload a high-resolution card background from your computer or URL, and position other elements above it.

---

## Batch Printing

Select **Batch Export A4 PDF** or the applicable export workflow.

The engine processes the records and places cards into printable sheets. The documented workflow includes:
- CR80 card dimensions
- A3, A4, A5, and Letter sheet sizes
- Multiple cards per sheet
- Hardware cutting marks
- X/Y print calibration offsets

---

## Offline Mode

The package is designed to support workflows where ID-card data should remain on the user's machine.

### Offline Workspace Persistence
The dashboard stores workspace state in the browser's IndexedDB, including imported data, templates, and active workspace information. Refreshing or reopening the browser does not automatically discard the saved workspace.

### `.stmq` Project Backup
Export a complete project workspace as a `.stmq` JSON project file. This provides a portable way to move a workspace between machines, including offline/air-gapped workflows.

---

## Privacy

ID-card applications commonly process personal information such as Names, Student IDs, Employee IDs, Photos, and Admission numbers.

The documented generation workflow is entirely **client-side**.
- Local browser processing
- IndexedDB workspace persistence
- Local `.stmq` project backup
- Local PDF/image generation
- No backend server required for the core generation workflow

Your application remains responsible for compliance with applicable privacy and data-protection requirements.

---

## Developer Docs

### Components
- `<IdCardManager />`: Complete dashboard experience. Use this when you want the complete import → design → preview → batch-export workflow.
- `<IdCardDesigner />`: Standalone visual designer.
- `<IdCardPreview />`: Embed a live ID-card preview inside another application screen.
- `<IdCardDesignerModal />`: Open the designer inside your application's modal/dialog workflow.

### Props (IdCardManager)
| Prop | Type | Default | Description |
|---|---|---|---|
| `sampleRecords` | `object` | Default data | Records used to populate the dashboard |
| `categories` | `object` | Default config | Custom ID-card categories |
| `onBatchExportComplete` | `function` | `undefined` | Callback after batch PDF generation |

### Templates
Designs are represented as JSON-compatible template structures.
```json
{
  "id": "tpl_school_vertical",
  "orientation": "vertical",
  "width": 54,
  "height": 86,
  "elements": []
}
```

---

## NPM

Install using NPM:
```bash
npm install @stratametriq/id-card-designer
```

Or Yarn:
```bash
yarn add @stratametriq/id-card-designer
```

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

*For full legal terms, please review the `LICENSE` file included in this repository.*

---

## FAQ

**How is this different from Canva?**
Canva is designed primarily for visual design. `@stratametriq/id-card-designer` focuses on an automated data-driven ID-card workflow: One Template + Many Records = Batch Printable ID Cards.

**Does the core workflow require a StrataMetriq server?**
No backend server from StrataMetriq is required for the documented client-side card-generation workflow.

**Can it be used for offline workflows?**
Yes. The package includes IndexedDB workspace persistence and `.stmq` project backup capabilities intended to support local and offline-capable workflows.

---

## Changelog

### [1.7.1] - 2026-08-13
- **Licensing & Metadata:** Updated package metadata (homepage, engines) and finalized the internal licensing documentation for the StrataMetriq release.

### [1.7.0] - 2026-08-11
- **Excel & ZIP Bulk Import:** Users can now upload `.xlsx` and `.xls` files directly, without needing to convert them to CSV. Additionally, users can upload `.zip` archives containing an Excel/CSV file and a folder of images. The importer automatically binds the high-resolution images to the data records using fuzzy matching.
- **Full Workspace Persistence (IndexedDB):** The dashboard now automatically saves the entire workspace state—including imported data, custom templates, and active tabs—to the browser's local IndexedDB. Refreshing the page or closing the browser no longer results in data loss.
- **Offline Project Backup (.stmq):** Added a "Backup Project" button that serializes the entire offline workspace (records, configurations, and templates) into a `.stmq` JSON file. This allows users to export their work from one machine and import it into another, maintaining full offline portability without any backend servers.
