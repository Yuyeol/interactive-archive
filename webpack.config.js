const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // bundling의 시작점
  entry: "./src/index.js",
  //   bundling의 결과물을 어떻게 내보낼지 설정
  output: {
    filename: "bundle.js",
    // 내보낼 파일의 위치
    path: path.resolve(__dirname, "dist"),
    // 사용하지 않는 파일 자동 삭제
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // 로더 간에 의존성이 있다면, 뒤에서부터 앞으로 실행한다는 점을 기억하자.
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  devServer: {
    historyApiFallback: true,
  },
};
