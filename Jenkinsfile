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
                    sh 'mvn clean install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    echo 'Running Tests...'
                    sh 'mvn test'
                }
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
}
