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

  String nodeVersion = "node:12"

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

  stage('npm build') {
    def testbed = docker.image(nodeVersion)
    testbed.inside(args) {
      sh "npm run build"
    }
  }

  stage('docker build') {
    dockerBuild()
  }

  stage('docker push') {
    dockerPush("dev")
  }

  stage('Deploy to dev') {
    deploy('dev', [dryrun: isMaster == false])

    if (isMaster) {
      slack.notifyDeploy('dev')
    } else {
      slack.notifySuccessful()
    }
  }

  stage('Deploy to test') {
    deploy('test', [dryrun: isMaster == false])

    if (isMaster) {
      slack.notifyDeploy('dev')
    } else {
      slack.notifySuccessful()
    }
  }
}

if (isMaster) {
  waitForInput("Deploy to prod?")

  ace(opts) {
    stage('Deploy to prod') {
      deploy("prod")
      slack.notifyDeploy('prod')
    }
  }
}

