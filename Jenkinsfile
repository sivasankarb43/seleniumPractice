pipeline {
    agent any

    parameters {
        string(name: 'XRAY_TEST_EXECUTION', defaultValue: '', description: 'Xray Test Execution Key')
    }

    stages {
        // Clone the Git repository from GitHub (master branch)
        stage('Clone Repo') {
            steps {
                git branch: 'master', url: 'https://github.com/sivasankarb43/seleniumPractice.git'
            }
        }

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
}
