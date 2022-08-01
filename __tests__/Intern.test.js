const Employee = require('../lib/Employee');
const Intern =require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Camille', '123', 'email@email.com', 'University');

    expect(intern.name).toBe('Camille');
    expect(intern.id).toBe('123');
    expect(intern.email).toBe('email@email.com');
    expect(intern.school).toBe('University');
})