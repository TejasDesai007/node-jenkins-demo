pipeline {
    agent any

    tools {
        nodejs "node16" // Must match the name from Jenkins configuration
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/TejasDesai007/node-jenkins-demo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                sh 'npm test || echo "No test script defined"'
            }
        }

        stage('Build Application') {
            steps {
                echo 'Building the application...'
                sh 'npm run build || echo "No build step defined"'
            }
        }

        stage('Deploy') {
    steps {
        echo 'Deploying the application...'
        sh '''
        mkdir -p /var/lib/jenkins/deploy/node-jenkins-demo
        cp -r * /var/lib/jenkins/deploy/node-jenkins-demo/
        '''
    }
}

    }

    post {
        success {
            echo '✅ Deployment Successful!'
        }
        failure {
            echo '❌ Build Failed!'
        }
    }
}
