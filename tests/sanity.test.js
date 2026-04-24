const assert = require('node:assert'),
    { describe, it } = require('node:test'),
    SerialisedError = require('../index');

describe('serialised error', function () {
    it('must extract required properties', function () {
        const error = SerialisedError(new Error('Error Name'));

        error.extra = 'Extra Property';

        assert.ok(Object.hasOwn(error, 'name'));
        assert.ok(Object.hasOwn(error, 'message'));
        assert.ok(Object.hasOwn(error, 'stack'));
        assert.ok(Object.hasOwn(error, 'extra'));
    });

    it('must not contain any stray properties', function () {
        const error = SerialisedError(new Error('Error Name'));
        error.extra = 'Extra Property';

        assert.deepStrictEqual(Object.keys(error), ['name', 'message', 'stack', 'extra']);
    });

    it('must add error meta when specified', function () {
        const error = SerialisedError(new Error('Error Name'), true);
        error.extra = 'Extra Property';

        assert.deepStrictEqual(Object.keys(error), [
            'name',
            'message',
            'stack',
            'checksum',
            'id',
            'timestamp',
            'stacktrace',
            'extra',
        ]);
    });
});
