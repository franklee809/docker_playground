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

  }
}