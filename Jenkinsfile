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
                    bat 'mvn clean install' // Changed sh to bat for Windows
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    echo 'Running Tests...'
                    bat 'mvn test' // Changed sh to bat for Windows
                }
            }
        }

        stage('Publish Test Results') {
            steps {
                junit '**/target/surefire-reports/*.xml' // Archive test reports
            }
        }

        stage('Post Build Actions') {
            steps {
                script {
                    echo 'Build Completed!'
                }
            }
        }
    }
    
    post {
        always {
            echo 'Cleaning up workspace...'
            deleteDir() // Clean workspace after execution
        }
    }
}
