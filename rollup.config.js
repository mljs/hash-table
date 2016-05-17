import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
    entry: 'src/HashTable.js',
    dest: 'dist/HashTable.js',
    format: 'cjs',
    plugins: [
        nodeResolve({
            jsnext: true,
            main: true
        }),
        commonjs()
    ]
}
