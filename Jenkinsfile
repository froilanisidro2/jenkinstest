pipeline {
    agent any
    tools {nodejs "NodeJS"}
    stages {
        stage('Clone Repository'){
            steps{
                git branch: 'main',
                    url: 'https://github.com/froilanisidro2/jenkinstest.git'
            }
        }
        
        stage('Install Dependencies'){
            steps {
                sh 'npm install'
            }
        }
        
        stage('Deploy'){
            steps {
                sh 'node server.js'
            }
        }
    }
}
