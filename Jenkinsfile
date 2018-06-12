@Library('utils')
import no.evry.Docker

pipeline {
    agent none
    options {
        buildDiscarder(logRotator(numToKeepStr: '5'))
    }
    stages {
        stage('Install libraries') {
          agent {
            label 'jenkins-docker-3'
          }
          steps {
            script {
              def testbed = docker.image('node:8')
              testbed.inside(){
                 sh "npm install"
              }
            }
          }
        }

        stage('Build client') {
          agent {
            label 'jenkins-docker-3'
          }
          steps {
            script {
              def testbed = docker.image('node:8')
              testbed.inside(){
                sh "npm run build"
              }
            }
          }
        }

        stage('Build docker') {
          agent {
            label 'jenkins-docker-3'
          }
          steps {
            script {
              image = new Docker(this, [nameOnly: true]).image('evrydevopsprod.azurecr.io')
              sh "docker build . -t " + image
            }
          }
        }

        stage('Push docker') {
          when {
            branch 'master'
          }
          agent {
            label 'jenkins-docker-3'
          }
          steps {
            script {
              withDockerRegistry([ credentialsId: "evrydevopsprod.azurecr.io", url: "https://evrydevopsprod.azurecr.io" ]) {
                sh "docker push " + image
              }
            }
          }
        }

        stage('Helm dry run') {
          when {
            not {
              branch 'master'
            }
          }
          agent {
            label 'jenkins-docker-3'
          }
          steps {
            script {
              helmDeploy('dev', [image: image, dryRun: true])
            }
          }
        }

        stage('Deploy to dev') {
          when {
            branch 'master'
          }
          agent {
            label 'jenkins-docker-3'
          }
          steps {
            milestone(1)
            script {
              helmDeploy('dev', [image: image])
            }
          }
        }

        stage("Deploy to test?") {
          when {
            branch 'master'
          }
          agent none
          steps {
            input message: 'Deploy to test?'
          }
        }

        stage('Deploy to test') {
          when {
            branch 'master'
          }
          agent {
            label 'jenkins-docker-3'
          }
          steps {
            milestone(10)
            script {
              helmDeploy('test', [image: image])
            }
          }
        }

        stage("Deploy to prod?") {
          when {
            branch 'master'
          }
          agent none
          steps {
            input message: 'Deploy to prod?'
          }
        }

        stage('Deploy to prod') {
          when {
            branch 'master'
          }
          agent {
            label 'jenkins-docker-3'
          }
          steps {
            milestone(20)
            script {
              helmDeploy('prod', [image: image])
            }
          }
        }
    }
    post {
        always {
           node('jenkins-docker-3') {
            step([$class: 'WsCleanup'])
          }
        }
    }
}
