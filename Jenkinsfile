pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
  }
  stages {
    stage('Checkout') {
      steps {
        git(url: 'https://github.com/franklee809/docker_playground', branch: 'main')
      }
    }

    stage('Change directory') {
      steps {
        sh 'cd deployment-01-starting-setup'
      }
    }

    stage('Build image') {
      steps {
        sh 'docker build -t franklee809/node-example-1 .'
      }
    }

    stage("Docker login") {
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
}
