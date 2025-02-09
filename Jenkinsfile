pipeline {
    agent any

<<<<<<< HEAD
    stages {
        stage('Checkout Code') {
=======
    parameters {
        string(name: 'XRAY_TEST_EXECUTION', defaultValue: '', description: 'Xray Test Execution Key')
    }

    stages {
        // Clone the Git repository from GitHub (master branch)
        stage('Clone Repo') {
>>>>>>> master
            steps {
                git branch: 'master', url: 'https://github.com/sivasankarb43/seleniumPractice.git'
            }
        }

<<<<<<< HEAD
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
=======
        // Run Cucumber tests with the given Xray Test Execution Key
        stage('Run Cucumber Tests') {
            steps {
                sh '''
                mvn clean test -Dcucumber.options="--tags @XrayTestExecution=${XRAY_TEST_EXECUTION}"
                '''
            }
        }

        // Publish the Cucumber test results
        stage('Publish Cucumber Report') {
            steps {
                cucumber 'target/cucumber.json' // Path to the Cucumber JSON report
            }
        }

        // Upload the results back to Xray
        stage('Upload Results to Xray') {
            steps {
                sh '''
                curl -X POST "https://xray.cloud.getxray.app/api/v2/import/execution/cucumber" \
                -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
                -H "Content-Type: multipart/form-data" \
                -F "file=@target/cucumber.json"
                '''
            }
        }
    }

    post {
        always {
            echo 'Cleaning up after build'
            // Optional: Add any cleanup steps after the build here
        }
    }
>>>>>>> master
}
