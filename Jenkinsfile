pipeline {
    agent any

    parameters {
        choice(
            name: 'TEST_TAG',
            choices: ['all', 'smoke', 'regression'],
            description: 'Select which set of tests to run'
        )
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    if (params.TEST_TAG == 'all') {
                        // Run all tests without tag filter
                        sh 'npx cypress run'
                    } else {
                        // Run tests filtered by tag
                        sh "npx cypress run --env grepTags=${params.TEST_TAG}"
                    }
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/videos/**/*.mp4', allowEmptyArchive: true
            archiveArtifacts artifacts: 'cypress/screenshots/**/*.png', allowEmptyArchive: true
            junit 'cypress/results/*.xml'
        }
    }
}
