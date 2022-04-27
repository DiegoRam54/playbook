const UserService = require('./../../app/models/services/UserService');
describe("Tests for UserService", () => {
    test('1. Create a new user using de UserService', () => {
        const user = UserService.create(1, "DiegoRam", "Diego");
        expect(user.id).toBe(1);
        expect(user.userName).toBe("DiegoRam");
        expect(user.name).toBe("Diego");
    });
    test('2. Get all user data in a list', () => {
        const user = UserService.create(1, "DiegoRam", "Diego");
        const userInfoList = UserService.getInfo(user);
        expect(userInfoList[0]).toBe(1);
        expect(userInfoList[1]).toBe("DiegoRam");
        expect(userInfoList[2]).toBe("Diego");
        expect(userInfoList[3]).toBe("Sin bio");
    });
    test('3. Update userName', () => {
        const user = UserService.create(1, "DiegoRam", "Diego");
        UserService.updateUserName(user, "DiegoR");
        expect(user.userName).toBe("DiegoR");
    });
    test('4. Given a list of users give me the list of usernames', () => {
        const user = UserService.create(1, "DiegoRam", "Diego");
        const user2 = UserService.create(1, "DiegoRam1", "Diego");
        const user3 = UserService.create(1, "DiegoRam2", "Diego");
        const userNames = UserService.getAllUserNames([user, user2, user3]);
        expect(userNames).toContain("DiegoRam");
        expect(userNames).toContain("DiegoRam1");
        expect(userNames).toContain("DiegoRam2");
    });
});
