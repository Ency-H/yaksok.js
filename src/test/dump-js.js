import { d, TextDumper } from './util';
import { JsTargetCompiler } from '~/compiler';

export async function run() {
    { // basic
        let compiler = new JsTargetCompiler();
        let dumper = new TextDumper('js-basic', '.js');
        await d(compiler, dumper);
    }
};
