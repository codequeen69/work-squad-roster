const Employee = require('../lib/Employee.js')

test('creates an employee object', () => {
    const employee = new Employee('Camille', '123', 'email@email.com')

    expect(employee.name).toBe('Camille');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('email@email.com')
});

test('gets employee name value', () => {
    const employee = new Employee('Camille')

    expect(employee.getName()).toBe('Camille');
})

test('gets employee role', () => {
    const employee = new Employee('Employee');
    expect(employee.getRole()).toBe('Employee');
})