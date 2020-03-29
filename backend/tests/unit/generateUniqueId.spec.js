const generateUniqueId = require('../../src/utils/generateUniqueId');

//describe is imported from Jest, 'it' is literlly a description, expect().toBe() is what I want
describe('Generate Unique Id', () => {
    it('should generate an unique Id', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
});