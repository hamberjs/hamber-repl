import hamber from 'rollup-plugin-hamber';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default [
	// tests
	{
		input: 'test/src/index.js',
		output: {
			file: 'test/public/bundle.js',
			format: 'iife'
		},
		plugins: [
			resolve(),
			commonjs(),
			hamber()
		]
	}
];