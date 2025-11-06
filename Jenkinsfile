pipeline {
  agent any

  environment {
    APP_DIR = '/home/ubuntu/nodeapp'
    REMOTE_HOST = 'ubuntu@65.2.74.79'
    SSH_CRED = 'cc-lab8'   // Jenkins SSH credentials ID
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
      }
    }

    stage('Deploy to EC2') {
      steps {
        sshagent (credentials: [env.SSH_CRED]) {
          sh """
            ssh -o StrictHostKeyChecking=no ${REMOTE_HOST} 'mkdir -p ${APP_DIR}'
            scp -o StrictHostKeyChecking=no -r * ${REMOTE_HOST}:${APP_DIR}
            ssh ${REMOTE_HOST} 'pkill -f server.js || true'
            ssh ${REMOTE_HOST} 'nohup node ${APP_DIR}/server.js > ${APP_DIR}/app.log 2>&1 &'
          """
        }
      }
    }
  }

  post {
    success {
      echo '✅ Deployment successful!'
    }
    failure {
      echo '❌ Deployment failed!'
    }
  }
}
