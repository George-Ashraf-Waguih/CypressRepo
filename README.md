# CypressRepo 🚀  
![Cypress](https://img.shields.io/badge/Cypress-12.x-brightgreen?logo=cypress)

A **Cypress automation testing framework** ready to use.
Designed with **Page Object Model (POM)**, fixtures, reusable commands, and ready for CI/CD integration.

---

## 📌 Features
- ✅ End-to-end **UI automation** with Cypress  
- ✅ **Page Object Model** (POM) structure for maintainability  
- ✅ Reusable **fixtures** and test data  
- ✅ Easy **environment configuration**  
- ✅ Automatically capture **screenshots** and record **videos** **only when tests fail**
- ✅ **Headless & headed** execution modes  
- ✅ CI/CD ready for **GitHub Actions, Jenkins, GitLab CI**
- ✅ Support for **test tagging** (e.g., `smoke`, `regression`) using [cypress-grep](https://github.com/cypress-io/cypress-grep)

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
├── README.md               # Project documentation
└── Jenkinsfile             # Jenkins pipeline configuration
```

---

## 🔧 Configuration
- Modify `cypress.config.js` for environment-specific settings.  
- Store reusable data in `/fixtures`.  
- Use `/pages` for POM-based selectors and page methods.  
- Use **tags** in tests to filter execution:
```javascript
it('TC_01_Successful Login', { tags: ['smoke', 'regression'] }, () => {
    // test code here
});
```

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

**Headless mode (all tests)**  
```bash
npx cypress run
```

---

## 🏷 Running Tests by Tags (Smoke / Regression)

This framework supports **tagged test execution** using `cypress-grep`.

### Run only **smoke** tests
```bash
npx cypress run --env grep=smoke
```

### Run only **regression** tests
```bash
npx cypress run --env grep=regression
```

### Run multiple tags
```bash
npx cypress run --env grepTags="smoke,regression"
```

---

## 📸 Test Artifacts
- **Screenshots** and **videos** are automatically saved in the `/cypress/screenshots` and `/cypress/videos` folders **only for failed tests**.

---

## 📦 CI/CD Integration
- Ready for **Jenkins**, **GitHub Actions**, and **GitLab CI**.
- Can run tests by tag in pipelines, for example:
```groovy
pipeline {
    parameters {
        choice(name: 'TEST_SUITE', choices: ['all', 'smoke', 'regression'], description: 'Select test suite to run')
    }
    stages {
        stage('Run Cypress Tests') {
            steps {
                script {
                    if (params.TEST_SUITE == 'all') {
                        sh 'npx cypress run'
                    } else {
                        sh "npx cypress run --env grep=${params.TEST_SUITE}"
                    }
                }
            }
        }
    }
}
```

---

## 👨‍💻 Author
**George Ashraf**  
💼 [LinkedIn](https://www.linkedin.com/in/george-ashraf/)  
📧 george.ashraf.waguih@gmail.com
