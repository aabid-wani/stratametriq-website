---
title: "How to Optimize Multi-Page A4 PDF Rendering in Next.js"
date: "2026-07-27"
description: "A deep dive into the architecture behind the StrataMetriq ID Card Studio and how we achieved 60fps cut-sheet PDF rendering entirely in the browser."
---

When we set out to build the **StrataMetriq ID Card Studio**, we had one massive technical constraint: **Zero Server Exfiltration**. Enterprise hospitals and government contractors cannot upload employee PII (Personally Identifiable Information) to a random cloud server just to generate PDF ID badges.

We had to build a heavy-duty, multi-page A4 cut-sheet PDF rendering engine that runs 100% locally inside the browser.

Here is how we achieved it using Next.js and WebAssembly.

## The Problem with Traditional PDF Generation

Traditionally, if you want to generate a PDF, you send HTML/CSS to a backend server running `Puppeteer` or `wkhtmltopdf`. 
1. The server spins up a headless Chrome instance.
2. It renders the HTML.
3. It takes a "screenshot" as a PDF.
4. It sends the PDF back to the client.

This is slow, expensive to scale, and completely violates our Zero-Exfiltration policy.

## Our Browser-Native Architecture

Instead of relying on a Node.js backend, we ported a lightweight rendering engine into the browser. 

### 1. Canvas-Based Offscreen Rendering
We don't use standard DOM elements to render the ID cards. DOM manipulation is slow when you are trying to render 1,000 ID cards simultaneously. 

Instead, we use the HTML5 `<canvas>` API via `OffscreenCanvas`. This allows us to render the graphics on a Web Worker thread, completely bypassing the main UI thread. Your browser stays buttery smooth at 60fps while 1,000 ID cards are being drawn in the background.

```typescript
// Example of off-main-thread rendering
const worker = new Worker('pdf-renderer.js');
const offscreen = document.querySelector('canvas').transferControlToOffscreen();

worker.postMessage({ canvas: offscreen, data: employees }, [offscreen]);
```

### 2. Mathematics of A4 Cut-Sheets
An A4 piece of paper is exactly `210mm × 297mm`. 
Standard ID cards (CR80) are `85.6mm × 53.98mm`.

To fit 10 ID cards onto a single A4 sheet, we have to calculate precise mm-to-pixel conversions based on a standard 300 DPI (Dots Per Inch) print resolution. 

```typescript
const MM_TO_PX_300DPI = 11.811; // 300 pixels / 25.4 mm
const A4_WIDTH_PX = Math.floor(210 * MM_TO_PX_300DPI);
const A4_HEIGHT_PX = Math.floor(297 * MM_TO_PX_300DPI);
```

### 3. Client-Side PDF Packaging
Once the canvases are drawn, we use a pure JavaScript PDF library (like `jspdf` or `pdf-lib`) to bundle the raw canvas image data into a single `.pdf` binary file, which is instantly triggered for download via a Blob URL.

No servers. No data exfiltration. Just pure local computing power.

## Test it Yourself
You don't have to take our word for it. You can test the exact engine right now on our homepage. Click the **"ID Card Studio"** zero-install web simulator to watch it generate a PDF in real-time.
