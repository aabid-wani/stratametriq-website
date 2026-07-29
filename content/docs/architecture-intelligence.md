---
title: "Architecture Intelligence Documentation"
date: "2026-07-29"
description: "Documentation for the StrataMetriq Architecture Intelligence package, including VS Code setup, CLI commands, and DevSecOps features."
---

# 🛡️ StrataMetriq Architecture Intelligence

**StrataMetriq** helps engineering teams understand software architecture, predict the impact of code changes, and prevent risky deployments before they happen.

It acts as an advanced architectural diagnostic tool for full-stack polyglot codebases (JavaScript, TypeScript, Python, Java, Go, C#, Ruby, PHP, Rust, C++).

---

## ⚡ Quick Start

StrataMetriq provides both an **Interactive Developer UI** inside VS Code and a **Headless CI/CD Pipeline Gate** for automated DevOps workflows.

### Method 1: Interactive VS Code Extension (VSIX)
1. **Install from VSIX**:
   * Open VS Code and press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).
   * Type and select **`Extensions: Install from VSIX...`**.
   * Choose the bundled file: **`stratametriq-extension-1.3.0.vsix`**.
2. **Reload VS Code**:
   * Run the command **`Developer: Reload Window`** to activate the scanner.
3. **Launch Dashboard**:
   * Open the Command Palette (`Ctrl+Shift+P`) and run: **`StrataMetriq: Open Dashboard`**
4. **Explore**:
   * Click **"Run Deep Analysis"** to scan your project.
   * Click any API endpoint to see vertical traces across your full-stack architecture.

### Method 2: Headless CLI & CI/CD Pipeline Gates (DevSecOps)
Run StrataMetriq directly in your terminal, Docker container, or CI/CD workflow (GitHub Actions, GitLab CI, Jenkins) to automatically block pull requests containing security vulnerabilities!

```bash
# Interactive setup: create a default configuration file
npx @stratametriq/cli init

# Scan the current directory locally
npx @stratametriq/cli scan .

# Enforce DevSecOps quality gate (fails pipeline on HIGH risks)
npx @stratametriq/cli scan . --fail-on-high

# Run downstream impact analysis ("what breaks if I edit this file?")
npx @stratametriq/cli impact src/services/UserService.ts
```

---

<details>
<summary><b>🛠️ Click to expand full feature list & advanced architecture</b></summary>

## 🌟 Key Features & Superpowers

### 🌐 Full-Stack Enterprise Polyglot Architecture Support
StrataMetriq natively parses ASTs and framework semantics across modern multi-language enterprise repositories without needing external interpreters or heavy IDE plugins:
* **Supported Languages**: Python (`.py`), Java (`.java`), Kotlin (`.kt`), Go (`.go`), C# (`.cs`), JavaScript/TypeScript (`.js`, `.ts`, `.jsx`, `.tsx`), Ruby (`.rb`), PHP (`.php`), Rust (`.rs`), C++ (`.cpp`), and C (`.c`).
* **Cross-Stack Vertical Flow**: Traces frontend API calls (`fetch('/api/users')`) directly into backend framework endpoints, linking all the way down to ORM database tables.

### 🛡️ Automated 13-Point Pre-Deployment DevSecOps Safety Audit
Before deploying your application, StrataMetriq scans 100% of your codebase in seconds to ensure no debugging artifacts, credentials, or insecure patterns leak into production. 
* **🔑 Hardcoded Secrets**: Detects API keys, JWT tokens, AWS credentials.
* **💉 SQL Injection**: Identifies dangerous raw SQL string concatenation.
* **🔓 Insecure Cryptography**: Detects usage of obsolete hashing algorithms (`MD5`, `SHA1`).
* **🐞 Active Debug Code**: Identifies active `console.log`, `print()`, `debugger;` statements.

### 🔀 Dynamic API Request Lifecycle Visualizer
Click any API endpoint in your project to generate an instant vertical trace of the request flow across your full-stack architecture (React Component ➔ Route Handler ➔ Controller ➔ Service ➔ Repository ➔ Database Table).

### 🔬 Most Complex Modules & Intelligent Risk Impact Analysis
StrataMetriq automatically evaluates code complexity and calculates downstream ripple effects across every module. It ranks source files based on cyclomatic complexity and distinguishes direct importers from transitive dependents.

### 👥 Duplicate Code & 🔄 Circular Dependency Detection
Automatically scans token overlap across your workspace to identify copy-pasted business logic and executes a high-speed DFS cycle detection algorithm to catch import loops.

## 🏗️ Technical Architecture (Monorepo)

StrataMetriq is structured as a high-performance TypeScript monorepo:
* **`extension/` (Backend Host)**: A Node.js-based VS Code extension.
* **`dashboard/` (Frontend UI)**: A React application bundled with Vite. 
* **`scanner/` (Analysis Engine)**: A deep AST (Abstract Syntax Tree) parser powered by TypeScript and Acorn. 
* **`cli/` (DevSecOps Governance)**: A standalone headless command-line executable (`@stratametriq/cli`).

</details>
