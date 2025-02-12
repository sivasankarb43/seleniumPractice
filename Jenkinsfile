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

   /* post {
        always {
            script {
                echo 'Checking for Cucumber JSON report...'
                if (fileExists('target/cucumber.json')) {
                    cucumber fileIncludePattern: '**//*cucumber.json', reportTitle: 'Cucumber Test Report'
                } else {
                    echo "Cucumber JSON report not found!"
                }
            }

            echo 'Publishing Cucumber HTML Reports...'
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'target/cucumber-reports',
                reportFiles: 'index.html',
                reportName: 'Cucumber Test Report'
            ])
        }	

        failure {
            echo 'Build failed. Please check the logs!'
        }

        success {
            echo 'Build succeeded. Reports generated successfully.'
        }
    } */
}
