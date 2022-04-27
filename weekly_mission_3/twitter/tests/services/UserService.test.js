const UserService = require('./../../app/models/services/UserService');
describe("Tests for UserService", () => {
    test('1. Create a new user using de UserService', () => {
        const user = UserService.create(1, "DiegoRam", "Diego");
        expect(user.id).toBe(1);
        expect(user.userName).toBe("DiegoRam");
        expect(user.name).toBe("Diego");
    });
});
