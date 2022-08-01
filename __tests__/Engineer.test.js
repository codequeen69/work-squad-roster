const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer')

test('creates a engineer object', () => {
    const engineer = new Engineer ('Camille', '123', 'email@email.com', 'github');

    expect(engineer.name).toBe('Camille');
    expect(engineer.id).toBe('123');
    expect(engineer.email).toBe('email@email.com');
    expect(engineer.github).toBe('github');
})