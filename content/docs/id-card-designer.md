---
title: "ID Card Designer Documentation"
date: "2026-07-28"
description: "Documentation for the Stratametriq ID Card Designer package, including quick start, features, and API reference."
---

# 📦 @stratametriq/id-card-designer

A universal, dynamic, and highly customizable **ID Card Designer & Batch Print Dashboard** for React, Vue, Angular, and Vanilla JS.

Whether you are building a **Student Information System**, **HR Employee Directory**, or **Event Badge Generator**, this package gives your users a professional visual canvas to design, customize, preview, and batch export PVC ID cards directly inside your app.

---

## ⚡ Quick Start (The 1-Minute Integration)

You can launch a complete ID card design studio and batch print dashboard with just **two lines of code**. It comes with pre-built dummy data so you can test it immediately!

### 1. Install

```bash
npm install @stratametriq/id-card-designer
# or
yarn add @stratametriq/id-card-designer
```

### 2. Add to your App

```jsx
import { IdCardManager } from '@stratametriq/id-card-designer';
import '@stratametriq/id-card-designer/dist/index.css';

export default function App() {
  // This will render the complete turnkey dashboard with demo data!
  return <IdCardManager />;
}
```

That's it! 🎉 You now have a fully functioning ID Card Dashboard.

---

## 🚀 Connect Your Own Data

Once you are ready to connect your real database, simply pass your records into the `sampleRecords` prop:

```jsx
import { IdCardManager } from '@stratametriq/id-card-designer';
import '@stratametriq/id-card-designer/dist/index.css';

export default function MyPortal() {
  // Your data from an API or database
  const myRealStudents = [
    { studentName: "Aarav Sharma", admissionNo: "101", bloodGroup: "O+" },
    { studentName: "Diya Patel", admissionNo: "102", bloodGroup: "B+" }
  ];

  return (
    <IdCardManager 
      sampleRecords={{ student: myRealStudents }} 
      onBatchExportComplete={(category, records) => {
        console.log(`Generated PDFs for ${records.length} cards!`);
      }}
    />
  );
}
```

---

## 🌟 Why Use This? (Key Features)

- **🎨 Turnkey Dashboard:** A complete workspace with department tabs, vector stage, and batch printing ready out-of-the-box.
- **📥 Batch CSV Import:** Let users upload spreadsheets to instantly generate hundreds of cards.
- **🔳 QR & Barcodes:** Built-in dynamic 1D Barcode and 2D QR Code generation.
- **🏷️ Variable Placeholders:** Easily map database fields to card text (e.g., `ID: {{admissionNo}}`).
- **🖼️ High-Res PDF/PNG Export:** Batch export to A4/Letter size PDF sheets with hardware cut marks.
- **🌐 Framework Agnostic:** Works natively with React and Next.js, and easily mounts into Vue, Angular, and Vanilla HTML.

---

## 🛠️ Advanced Usage & Custom Components

Don't want the full dashboard? You can use our modular components to build your own custom screens.

### 1. Show a Live Preview (`<IdCardPreview />`)
Embed a live ID card directly on a user profile page.
```jsx
import { IdCardPreview } from '@stratametriq/id-card-designer';

<IdCardPreview
  templateSchema={savedTemplateJson}
  data={{ studentName: 'Aarav Patel', admissionNo: 'ADM-101' }}
  orientation="vertical"
/>
```

### 2. Custom Batch Print Button (`generateIdCardsPdf`)
Trigger a high-resolution A4 multi-page PDF export from your own custom tables without rendering the designer.
```jsx
import { generateIdCardsPdf } from '@stratametriq/id-card-designer';

<button onClick={() => generateIdCardsPdf({
  records: selectedStudents,
  templateSchema: activeTemplate,
  fileName: "Student_Cards.pdf"
})}>
  Download Print Sheet
</button>
```

### 3. Standalone Designer Popup (`<IdCardDesignerModal />`)
Open the drag-and-drop design studio inside your own modal.
```jsx
import { IdCardDesignerModal } from '@stratametriq/id-card-designer';

<IdCardDesignerModal
  show={isOpen}
  onHide={() => setIsOpen(false)}
  initialTemplate={currentTemplate}
/>
```

---

## 💼 Commercial & Enterprise Licensing

`@stratametriq/id-card-designer` is dual-licensed:

1. **Community / Open Source Tier (MIT License):**  
   Free for non-commercial evaluation and personal open-source projects.
2. **Commercial / Enterprise Tier:**  
   Required for commercial SaaS applications, School ERPs, HR suites, and production use.

---

## 📖 Full API Reference & Advanced Guides

For detailed documentation, framework-specific guides (Vue, Angular), and advanced API configurations, click to expand:

<details>
<summary><b>Click here to view the full technical documentation</b></summary>

### What's New in v1.5.0
- **Dedicated Bulk CSV Import Workspace**: Uploading a `.csv` file now creates a pristine "Imported Data" workspace.
- **Expanded Printing Dimensions**: Native support for A3, A4, A5, US Letter, and US Legal paper sheets.
- **Flawless Landscape PDF Scaling**: Rewrote core engine logic for perfect hardware crop marks.

### Vue, Angular, and Vanilla HTML Support
You can easily mount the dashboard using `createRoot` inside any DOM element:
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

### Customizing Categories
You can pass custom categories to define exactly what fields your ID cards should support:
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

### JSON Template Schema Structure
Designs are saved as clean JSON schemas:
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

</details>

---

## ❓ FAQ

**Q: Why use this instead of Canva?**  
**A:** This is an automation pipeline. Generate thousands of ID cards from your database with one click instead of manually designing each one.

**Q: Does our data leave our servers?**  
**A:** No. Everything runs 100% Client-Side in the browser. Zero network requests are made.

**Q: Is it white-labeled?**  
**A:** Yes, the Commercial license allows you to remove all branding.
