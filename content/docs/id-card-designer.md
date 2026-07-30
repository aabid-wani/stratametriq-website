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

### 📜 Full Release Changelog

**v1.5.0 (July 28, 2026)**
- **Added:** Bulk CSV Import Dashboard: Click the 'Import CSV' button to automatically create a dedicated 'Imported Data' workspace tab.
- **Added:** Dynamic Field Definitions: Extracts column headers and generates dynamic text fields for the Property Inspector.
- **Added:** Advanced Paper Dimensions: Full mathematical rendering support for A3, A4, A5, US Letter, and US Legal paper sheets.
- **Fixed:** Landscape PDF Scaling Fix: Resolved jspdf engine bug where hardware crop marks lost landscape rotation constraints.

**v1.4.3 (July 25, 2026)**
- **Added:** Initial documented release of the Turnkey Dashboard (`<IdCardManager />`).
- **Added:** Core HTML2Canvas and jsPDF high-resolution rendering engine.

**v1.4.2 (July 20, 2026)**
- **Added:** Drag-and-Drop Bounding Boxes: Introduced visual snapping handles for resizing elements on the canvas.
- **Fixed:** Resolved a custom Google Font loading timeout that caused text rendering glitches on slow networks.

**v1.4.1 (July 12, 2026)**
- **Added:** Undo / Redo History Stack: Full tracking of canvas actions using Ctrl+Z and Ctrl+Y shortcuts.
- **Added:** Keyboard Nudging: Use arrow keys for 1px precise element alignment (Hold Shift for 5px jumps).

**v1.4.0 (July 5, 2026)**
- **Added:** Dedicated Image Property Inspector: New controls for Object Fit (cover, contain, scale-down).
- **Added:** Avatar Styling: Instant Corner Radius toggles for Circular vs Square profile photos with custom CSS borders.

**v1.2.0 (June 25, 2026)**
- **Added:** Grid Snapping & Alignment Guides: Toggleable millimeter measurement rulers (0mm - 86mm).
- **Added:** Radial Grid Overlay: Snap-to-grid accuracy for 1mm or 5mm intervals.

**v1.1.0 (June 10, 2026)**
- **Added:** QR Code & Barcode Generation: Built-in deterministic vector 1D Barcode and 2D QR Code generation.
- **Added:** Live Data Binding: Bind QR codes directly to database keys like `{{admissionNo}}`.

**v1.0.0 (May 20, 2026)**
- **Added:** Initial Public Release: The core `<IdCardPreview />` component and atomic rendering engine.
- **Added:** Variable Placeholders: Introduced handlebar syntax (`{{name}}`) for text interpolation.

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
