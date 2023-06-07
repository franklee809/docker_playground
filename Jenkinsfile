pipeline {
  agent any
  stages {
    stage('Build image') {
      steps {
        sh 'cd deployment-01-starting-setup && docker build -t franklee809/node-example-1 .'
      }
    }

    stage('Docker login') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }

    stage('Docker Push') {
      steps {
        sh 'docker push franklee809/node-example-1'
      }
    }

  }
  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
  }
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
}
