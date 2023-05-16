pipeline {
  agent any
  stages {
    stage('Checkout git') {
      steps {
        git(url: 'https://github.com/franklee809/docker_playground', branch: 'main')
      }
    }

    stage('Login') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }

    stage('Build image') {
      steps {
        sh 'docker build -t franklee809/node-example-1 .'
      }
    }

    stage('Push Docker image') {
      steps {
        sh 'docker push franklee809/node-example-1'
      }
    }

  }
  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
  }
  post {
    always {
      sh 'docker logout'
    }

  }
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
}