#!groovy
@Library("ace") _

properties([disableConcurrentBuilds()])

Boolean isMaster = "${env.BRANCH_NAME}" == 'master'

opts = [
  buildAgent: 'jenkins-docker-3',
]

// Hack to prevent ace function from being overloaded during test-deploy
def ace = ace

ace(opts) {
  def args = [
    "-v ${pwd()}:/src",
    "-w /src",
    "-e npm_config_cache=.npm"
  ].join(" ")

  String nodeVersion = "node:carbon"

  lock(resource: 'npm_tests_angular_reference', inversePrecedence: true){
    stage('npm tests') {
      checkout scm
      def testbed = docker.image(nodeVersion)
      testbed.inside(args) {
        sh "npm ci"
        sh "npm audit"
        sh "npm run license-checker"
        sh "npm run lint"
        sh "npm run citest"
      }
    }
    milestone()
  }

  lock(resource: 'npm_build_angular-reference', inversePrecedence: true){
    stage('npm build') {

      def testbed = docker.image(nodeVersion)
      testbed.inside(args) {
        sh "npm run build"
      }
    }
    milestone()
  }

  stage('docker build') {
    milestone()
    dockerBuild()
  }

  stage('docker push') {
    milestone()
    if (isMaster) {
      dockerPush("dev")
    }
  }

  stage('Deploy to dev') {
    milestone()
    deploy('dev', [dryrun: isMaster == false])

    if (isMaster) {
      slack.notifyDeploy('dev')
    } else {
      slack.notifySuccessful()
    }
  }

  stage('Deploy to test') {
    milestone()
    deploy('test', [dryrun: isMaster == false])

    if (isMaster) {
      slack.notifyDeploy('dev')
    } else {
      slack.notifySuccessful()
    }
  }
}

if (isMaster) {
  milestone()
  waitForInput("Deploy to prod?")
  milestone()

  ace(opts) {
    stage('Deploy to prod') {
      deploy("prod")
      slack.notifyDeploy('prod')
    }
  }
}

