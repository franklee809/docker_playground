pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git(url: 'https://github.com/franklee809/docker_playground', branch: 'main')
      }
    }

    stage('log test') {
      steps {
        sh 'ls -la '
      }
    }

    stage('Build image') {
      steps {
        sh 'docker build -t franklee809/node-example-1 .'
      }
    }

  }
}