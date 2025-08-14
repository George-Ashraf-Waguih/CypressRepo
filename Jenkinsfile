pipeline {
    agent any
    
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/George-Ashraf-Waguih/CypressRepo.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm ci' // or npm install
            }
        }
        
        stage('Run Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }
    
    post {
        always {
            junit 'cypress/results/*.xml' // Publish test results
        }
    }
}
