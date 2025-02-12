pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'master', url: 'https://github.com/sivasankarb43/seleniumPractice.git'
            }
        }

        stage('Build Project') {
            steps {
                script {
                    echo 'Building Project...'
                    bat 'mvn clean install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    echo 'Running Tests...'
                    bat 'mvn test'
                }
            }
        }

        stage('Generate Cucumber Report') {
            steps {
                script {
                    echo 'Generating Cucumber Report...'
                    bat 'mvn verify'
                }
            }
        }
    }

    post {
        always {
            echo 'Publishing Cucumber Reports...'
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'target/cucumber-reports',
                reportFiles: 'index.html',
                reportName: 'Cucumber Test Report'
            ])
        }
    }
}
