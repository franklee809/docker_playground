pipeline {
  agent any
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

  }
}