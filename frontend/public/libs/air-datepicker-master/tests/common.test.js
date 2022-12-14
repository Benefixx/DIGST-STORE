import {beforeAll, afterEach, describe, test, it, expect} from '@jest/globals';
import Datepicker from 'datepicker';

let $input, dp, $datepicker;

beforeAll(() => {
    $input = document.createElement('input');
    document.body.appendChild($input);
});

afterEach(() => {
    dp.destroy();
    dp = false;
    $datepicker = false;
});

function init(opts) {
    dp = new Datepicker($input, opts);
    $datepicker = dp.$datepicker;
}


describe('COMMON TESTS', () => {
    test('should initialized fine with default options', () => {
        init();
        expect(dp).toBeInstanceOf(Datepicker);
    });

    test('datepickers container should be created', () => {
        init();
        expect(document.querySelector(`#${Datepicker.defaultContainerId}`)).not.toBeNull();
    });

    test('datepicker should be added to the container', () => {
        init();
        let $container = document.querySelector(`#${Datepicker.defaultContainerId}`);

        expect($datepicker.parentNode).toEqual($container);
    });
});
