const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager ('Camille', '123', 'email@email.com', '12345');

    expect(manager.name).toBe('Camille');
    expect(manager.id).toBe('123');
    expect(manager.email).toBe('email@email.com');
    expect(manager.officeNumber).toBe('12345');
})