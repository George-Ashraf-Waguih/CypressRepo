# CypressRepo 🚀  
![Cypress](https://img.shields.io/badge/Cypress-12.x-brightgreen?logo=cypress)

A **Cypress automation testing framework** for UI and API testing.  
Designed with **Page Object Model (POM)**, fixtures, reusable commands, and ready for CI/CD integration.

---

## 📌 Features
- ✅ End-to-end **UI automation** with Cypress  
- ✅ **API testing** support  
- ✅ **Page Object Model** (POM) structure for maintainability  
- ✅ Reusable **fixtures** and test data  
- ✅ Easy **environment configuration**  
- ✅ automatically capture **screenshots** and record **videos** **only when tests fail**
- ✅ **Headless & headed** execution modes  
- ✅ CI/CD ready for **GitHub Actions, Jenkins, GitLab CI**

---

## 📂 Project Structure
```plaintext
CypressRepo/
│
├── cypress/
│   ├── e2e/                # Test cases
│   ├── fixtures/           # Test data
│   ├── pages/              # Page Object Model files
│   ├── support/            # Commands & helpers
│
├── cypress.config.js       # Cypress configuration
├── package.json            # Project dependencies
└── README.md               # Project documentation
```

---

## 🔧 Configuration
- Modify `cypress.config.js` for environment-specific settings.  
- Store reusable data in `/fixtures`.  
- Use `/pages` for POM-based selectors and page methods.  

---

## ⚡ Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/George-Ashraf-Waguih/CypressRepo.git
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run tests  

**Interactive mode**  
```bash
npx cypress open
```

**Headless mode**  
```bash
npx cypress run
```

---




## 👨‍💻 Author
**George Ashraf**  
💼 [LinkedIn](https://www.linkedin.com/in/george-ashraf/)  
📧 george.ashraf.waguih@gmail.com
