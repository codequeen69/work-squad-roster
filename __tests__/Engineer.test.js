const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer')

test('creates a engineer object', () => {
    const engineer = new Engineer ('Camille', '123', 'email@email.com', 'github');

    expect(engineer.name).toBe('Camille');
    expect(engineer.id).toBe('123');
    expect(engineer.email).toBe('email@email.com');
    expect(engineer.github).toBe('github');
})
test('gets engineer name value', () => {
    const engineer = new Engineer('Camille')

    expect(engineer.getName()).toBe('Camille');
})

test('gets engineer id value', () => {
    const engineer = new Engineer ('Camille', '123');
    
    expect(engineer.getId()).toBe('123');
})

test('get engineer email value', () => {
    const engineer = new Engineer ('Camille', '123', 'email');

    expect(engineer.getEmail()).toBe('email');
})

test('get engineer github value', () => {
    const engineer = new Engineer ('Camille', '123', 'email', 'github');

    expect(engineer.getGithub()).toBe('github');
})
test('gets Engineer role', () => {
    const engineer = new Engineer ('Engineer');
    expect(engineer.getRole()).toBe('Engineer');
})