const Employee = require('../lib/Employee');
const Intern =require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Camille', '123', 'email@email.com', 'University');

    expect(intern.name).toBe('Camille');
    expect(intern.id).toBe('123');
    expect(intern.email).toBe('email@email.com');
    expect(intern.school).toBe('University');
});
test('gets intern name value', () => {
    const intern = new Intern('Camille');

    expect(intern.getName()).toBe('Camille');
})
test('gets intern id value', () => {
    const intern = new Intern ('Camille', '123');
    
    expect(intern.getId()).toBe('123');
})

test('get intern email value', () => {
    const intern = new Intern ('Camille', '123', 'email');

    expect(intern.getEmail()).toBe('email');
})

test('get intern school value', () => {
    const intern = new Intern ('Camille', '123', 'email', 'University');

    expect(intern.getSchool()).toBe('University');
})
test('gets intern role', () => {
    const intern = new Intern ('Intern');
    expect(intern.getRole()).toBe('Intern');
})