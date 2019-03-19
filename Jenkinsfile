@Library('utils')
import no.evry.Docker

pipeline {
    agent none
    options {
        buildDiscarder(logRotator(numToKeepStr: '5'))
        skipDefaultCheckout()
    }
    stages {
        stage('Build and test') {
          agent {
            node {
              label 'jenkins-docker-3'
            }
          }
          stages {
            stage('Install libraries') {
              steps {
                milestone(1)
                script {
                  ws("${env.WORKSPACE}/${env.BUILD_NUMBER}") {
                    checkout scm
                    def testbed = docker.image('node:10')
                    testbed.inside(){
                      sh "npm ci"
                      sh "npm audit"
                      sh "npm run license-checker"
                    }
                  }
                }
              }
            }
            stage('Build client') {
              steps {
                script {
                  ws("${env.WORKSPACE}/${env.BUILD_NUMBER}") {
                    def testbed = docker.image('node:10')
                    testbed.inside(){
                      sh "npm run license-checker"
                      sh "npm run build"
                      sh "npm run citest"
                    }
                  }
                }
              }
            }
            stage('Build docker') {
              steps {
                script {
                  ws("${env.WORKSPACE}/${env.BUILD_NUMBER}") {
                    image = new Docker(this, [nameOnly: true]).image('evrydevopsprod.azurecr.io')
                    sh "docker build . -t " + image
                  }
                }
              }
            }
            stage('Push docker') {
              when {
                branch 'master'
              }
              steps {
                script {
                  ws("${env.WORKSPACE}/${env.BUILD_NUMBER}") {
                    withDockerRegistry([ credentialsId: "evrydevopsprod.azurecr.io", url: "https://evrydevopsprod.azurecr.io" ]) {
                      sh "docker push " + image
                    }
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
              steps {
                script {
                  ws("${env.WORKSPACE}/${env.BUILD_NUMBER}") {
                    helmDeploy('dev', [image: image, dryRun: true])
                  }
                }
              }
            }
            stage('Deploy to dev') {
              when {
                branch 'master'
              }
              steps {
                milestone(5)
                script {
                  ws("${env.WORKSPACE}/${env.BUILD_NUMBER}") {
                    helmDeploy('dev', [image: image])
                  }
                }
                milestone(6)
              }
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
            beforeAgent true
          }
          agent {
            label 'jenkins-docker-3'
          }
          steps {
            milestone(10)
            script {
              ws("${env.WORKSPACE}/${env.BUILD_NUMBER}") {
                checkout scm
                helmDeploy('test', [image: image])
              }
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
            beforeAgent true
          }
          agent {
            label 'jenkins-docker-3'
          }
          steps {
            milestone(20)
            script {
              ws("${env.WORKSPACE}/${env.BUILD_NUMBER}") {
                checkout scm
                helmDeploy('prod', [image: image])
              }
            }
          }
        }
    }
    post {
      always {
        node('jenkins-docker-3') {
          ws("${env.WORKSPACE}/${env.BUILD_NUMBER}") {
            step([$class: 'WsCleanup'])
          }
        }
      }
    }
}
