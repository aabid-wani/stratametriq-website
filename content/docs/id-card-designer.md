---
title: "ID Card Designer Documentation"
date: "2026-07-28"
description: "Documentation for the Stratametriq ID Card Designer package, including quick start, features, and API reference."
---

# 📦 @stratametriq/id-card-designer

![NPM Version](https://img.shields.io/npm/v/@stratametriq/id-card-designer?style=for-the-badge&color=blue)
![NPM Downloads](https://img.shields.io/npm/dm/@stratametriq/id-card-designer?style=for-the-badge&color=success)
![License](https://img.shields.io/npm/l/@stratametriq/id-card-designer?style=for-the-badge&color=orange)

A universal, dynamic, and highly customizable **ID Card Designer & Batch Print Dashboard** for React, Vue, Angular, and Vanilla JS.

Whether you are building a **Student Information System**, **HR Employee Directory**, or **Event Badge Generator**, this package gives your users a professional visual canvas to design, customize, preview, and batch export PVC ID cards directly inside your app.

---

## 📑 Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Features](#features)
- [Props](#props)
- [Templates](#templates)
- [Customization](#customization)
- [Events](#events)
- [Examples](#examples)
- [FAQ](#faq)
- [License](#license)

---

## 💻 Installation

Install the package using NPM or Yarn:

```bash
npm install @stratametriq/id-card-designer
# or
yarn add @stratametriq/id-card-designer
```

---

## ⚡ Quick Start

### 🚀 [Try the Live Interactive Demo on StackBlitz](https://stackblitz.com/edit/vitejs-vite-jtyvdj5g?file=src%2FApp.tsx)

You can launch a complete ID card design studio and batch print dashboard with just **two lines of code**. It comes with pre-built dummy data so you can test it immediately!

```jsx
import { IdCardManager } from '@stratametriq/id-card-designer';
import '@stratametriq/id-card-designer/dist/index.css';

export default function App() {
  // This will render the complete turnkey dashboard with demo data!
  return <IdCardManager />;
}
```

---

## 🌟 Features

- **🎨 Turnkey Dashboard:** A complete workspace with department tabs, vector stage, and batch printing ready out-of-the-box.
- **💾 Offline Workspace & Project Backup:** Automatic IndexedDB persistence means you never lose work on a page refresh. Export and share entire offline workspaces via `.stmq` JSON project files.
- **📥 Batch CSV/Excel & ZIP Import:** Let users upload spreadsheets (`.csv`, `.xlsx`) to instantly generate hundreds of cards. Upload `.zip` archives to automatically fuzzy-match and bind hundreds of high-res student photos instantly.
- **🔳 QR & Barcodes:** Built-in dynamic 1D Barcode and 2D QR Code generation.
- **🏷️ Variable Placeholders:** Easily map database fields to card text (e.g., `ID: {{admissionNo}}`).
- **🖼️ High-Res PDF/PNG Export:** Batch export to A3/A4/A5/Letter size PDF sheets with hardware cut marks.
- **🌐 Framework Agnostic:** Works natively with React and Next.js, and easily mounts into Vue, Angular, and Vanilla HTML.

---

## 📖 Step-by-Step User Guide

### 1. Importing Your Data
The dashboard allows you to import data in multiple ways:
- **Excel/CSV Upload:** Click the "Import Data" button and select an `.xlsx` or `.csv` file. The engine will automatically parse your columns into dynamic fields.
- **Bulk ZIP Upload with Photos:** If you have photos, create a `.zip` archive containing your Excel/CSV file alongside a folder of images. The importer will automatically fuzzy-match the image filenames (e.g., `aarav_sharma.jpg`) to the rows in your spreadsheet.

### 2. Designing the Template
Click **"Launch Studio Canvas"** to enter the Drag-and-Drop editor:
- **Dynamic Text Binding:** Click "Add Text" and type `{{ columnName }}` to dynamically bind the text to your imported spreadsheet data.
- **Conditional Logic:** Use Javascript expressions in your text elements like `{{ department === 'HR' ? 'Red' : 'Blue' }}` for conditional rendering.
- **QR & Barcodes:** Drag in a barcode or QR code element and bind it to unique employee IDs or URLs.
- **Backgrounds:** Upload high-resolution backgrounds and layer your text and images on top.

### 3. Saving & Managing Workspaces
- **Automatic Offline Saving:** As you work, the dashboard automatically saves your entire workspace (data, photos, and templates) to your browser's IndexedDB. You can safely refresh the page or close your browser without losing work.
- **Exporting a Project:** Click **"Backup Project"** to download a `.stmq` file. You can take this file on a USB drive to an offline/air-gapped computer and upload it to instantly restore your entire workspace.

### 4. Batch Exporting to PDF
Once your template is perfect, click **"Batch Export A4 PDF"**:
- The engine will loop through every row in your spreadsheet.
- It calculates exact millimeter dimensions (CR80 format) and automatically aligns them into an A4 grid with hardware cutting marks.
- You can apply X/Y offset calibrations to fix mechanical drift in physical PVC card printers (like Zebra or Fargo).

---

## ⚙️ Props

The main `<IdCardManager />` component accepts the following props:

| Prop | Type | Default | Description |
|---|---|---|---|
| `sampleRecords` | `object` | `default data` | Pass your own database records to populate the dashboard. |
| `categories` | `object` | `default config` | Custom category definitions for different ID types. |
| `onBatchExportComplete` | `function` | `undefined` | Callback fired when PDF generation completes. |

### Standalone `<IdCardDesigner />` Props

If you are using the standalone designer component directly, you can pass these props to configure the editor:

```jsx
<IdCardDesigner
    width={350}
    height={200}
    template={template}
    onSave={handleSave}
    onExport={handleExport}
/>
```

---

## 🧩 Templates

Designs are saved and loaded as clean JSON schemas. 

```json
{
  "id": "tpl_school_vertical_01",
  "orientation": "vertical",
  "width": 54,
  "height": 86,
  "elements": [
    {
      "id": "el_student_name",
      "type": "field",
      "fieldKey": "studentName",
      "label": "Student Name",
      "x": 2, "y": 48, "width": 50, "height": 7
    }
  ]
}
```

---

## 🎨 Customization

You can define custom categories to control exactly what fields your ID cards should support.

```jsx
const myCategories = {
  university: {
    id: "university",
    label: "University Students",
    fieldDefinitions: [
      { key: "studentName", label: "Student Full Name" },
      { key: "enrollmentNo", label: "Enrollment Number" }
    ]
  }
};

<IdCardManager categories={myCategories} />
```

### Modular Components

If you don't want the full dashboard, you can use our modular components:

*   **`<IdCardPreview />`**: Embed a live ID card directly on a user profile page.
*   **`<IdCardDesignerModal />`**: Open the drag-and-drop design studio inside your own popup.
*   **`generateIdCardsPdf()`**: Trigger a high-resolution PDF export programmatically.

---

## 📡 Events

You can hook into various lifecycle and user action events across the components:

### `<IdCardManager />` Events
- **`onBatchExportComplete(category, records)`**: Fired when a user successfully exports a batch of IDs to PDF.

### `<IdCardDesigner />` Events
- **`onSave(templateData)`**: Fired when the user clicks the save button. Returns the full JSON schema of the current design.
- **`onExport(format, data)`**: Fired when an export action is triggered (e.g., exporting a single card to PNG or PDF).
- **`onChange(elementData)`**: Fired continuously as the user drags, resizes, or modifies elements on the canvas.
- **`onDelete(elementId)`**: Fired when a specific element is deleted from the canvas.
- **`onTemplateChange(templateId)`**: Fired when the user switches to a different template.

---

## 💡 Examples

### Connect Your Own Data (React)

```jsx
import { IdCardManager } from '@stratametriq/id-card-designer';
import '@stratametriq/id-card-designer/dist/index.css';

export default function MyPortal() {
  const myRealStudents = [
    { studentName: "Aarav Sharma", admissionNo: "101", bloodGroup: "O+" },
    { studentName: "Diya Patel", admissionNo: "102", bloodGroup: "B+" }
  ];

  return (
    <IdCardManager sampleRecords={{ student: myRealStudents }} />
  );
}
```

### Mounting in Vue, Angular, or Vanilla HTML

```html
<div id="id-card-manager-root"></div>
<script type="module">
  import React from 'react';
  import { createRoot } from 'react-dom/client';
  import { IdCardManager } from '@stratametriq/id-card-designer';
  import '@stratametriq/id-card-designer/dist/index.css';

  const root = createRoot(document.getElementById('id-card-manager-root'));
  root.render(React.createElement(IdCardManager));
</script>
```

---

## ❓ FAQ & Comparisons

**Q: How is this different from Canva?**  
**A:** Canva is fantastic for creating manual, one-off designs. However, if you need to generate 500 student ID cards with unique photos, barcodes, and names, Canva becomes tedious. This package is an **automation pipeline**—you design the template once, feed it an array of JSON data, and instantly generate thousands of unique cards.

**Q: Why not just use standard HTML-to-Image libraries directly?**  
**A:** Building a production-ready ID card designer from scratch using standard HTML-to-canvas libraries is incredibly frustrating. You have to handle exact hardware printing dimensions (like CR80 PVC card aspect ratios), perfect image scaling, drag-and-drop boundary logic, and multi-page A4 PDF rendering with precise cut-marks. We've solved all of that complex math for you out-of-the-box.

**Q: How does this compare to enterprise desktop ID software?**  
**A:** Traditional ID software usually requires heavy Windows installations and expensive per-seat licenses. This package allows you to bring that exact same enterprise-level design capability directly into your web app as a lightweight React component that works on Mac, Windows, and Linux.

**Q: Does our sensitive data leave our servers?**  
**A:** **Absolutely not.** Employee and student data (PII) is a massive security concern. That is why this engine runs **100% Client-Side** in the browser. Zero network requests are made to external servers. The PDFs and images are generated purely on the user's local machine, and all workspace data is saved offline via IndexedDB. Your users can even export `.stmq` project backups and move them via USB to air-gapped computers!

**Q: Can I remove your branding? (White-labeling)**  
**A:** Yes! The enterprise license is 100% white-label, allowing you to seamlessly integrate the designer into your own SaaS product without your users ever knowing you are using our software.

---

## 📜 License

`@stratametriq/id-card-designer` is dual-licensed:

1. **Community / Open Source Tier (MIT License):** Free for non-commercial evaluation and personal open-source projects. See [MIT License](./LICENSE).
2. **Commercial / Enterprise Tier:** Required for commercial SaaS applications, School ERPs, HR suites, and production use.

👉 **[Purchase a Commercial Enterprise License to Unlock Production Usage & Priority Support](https://waniabid.gumroad.com/l/id-card-designer-pro)**

---

## 🚀 Changelog

### [1.7.0] - 2026-08-11
- **Excel & ZIP Bulk Import:** Users can now upload `.xlsx` and `.xls` files directly. Additionally, users can upload `.zip` archives containing an Excel/CSV file and a folder of images. The importer automatically binds the high-resolution images to the data records using fuzzy matching.
- **Full Workspace Persistence (IndexedDB):** The dashboard now automatically saves the entire workspace state—including imported data, custom templates, and active tabs—to the browser's local IndexedDB. Refreshing the page or closing the browser no longer results in data loss.
- **Offline Project Backup (.stmq):** Added a "Backup Project" button that serializes the entire offline workspace (records, configurations, and templates) into a `.stmq` JSON file. This allows users to export their work from one machine and import it into another, maintaining full offline portability without any backend servers.
