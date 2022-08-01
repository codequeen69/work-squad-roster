const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager ('Camille', '123', 'email@email.com', '12345');

    expect(manager.name).toBe('Camille');
    expect(manager.id).toBe('123');
    expect(manager.email).toBe('email@email.com');
    expect(manager.officeNumber).toBe('12345');
})
test('gets manager name value', () => {
    const manager = new Manager('Camille')

    expect(manager.getName()).toBe('Camille');
})

test('gets manager id value', () => {
    const manager = new Manager ('Camille', '123');
    
    expect(manager.getId()).toBe('123');
})

test('get manager email value', () => {
    const manager = new Manager ('Camille', '123', 'email');

    expect(manager.getEmail()).toBe('email');
})

test('get manager office number value', () => {
    const manager = new Manager ('Camille', '123', 'email', '12345');

    expect(manager.getOfficeNumber()).toBe('12345');
})
test('gets manager role', () => {
    const manager = new Manager ('Manager');
    expect(manager.getRole()).toBe('Manager');
})