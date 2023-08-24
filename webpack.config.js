// webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/index.js', // 애플리케이션 진입점
  output: {
    path: path.resolve(__dirname, 'dist'), // 빌드 결과물이 저장될 경로
    filename: 'bundle.js' // 빌드된 파일의 이름
  },
  module: {
    rules: [
      // 로더 및 규칙 설정
      {
        test: /\.js$/, // 정규식을 사용하여 처리할 파일 지정
        exclude: /node_modules/, // 처리에서 제외할 디렉토리 지정
        use: 'babel-loader' // 사용할 로더 지정
      }
    ]
  },
  resolve: {
   fallback: {
       "crypto": require.resolve("crypto-browserify")
   }
}

};