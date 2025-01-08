import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';  // 추가된 부분

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    json(),  // JSON 파일을 처리하도록 플러그인 추가
    typescript(),
  ],
  external: ['axios', 'flatted', 'circular-json'], // 외부 모듈
};
