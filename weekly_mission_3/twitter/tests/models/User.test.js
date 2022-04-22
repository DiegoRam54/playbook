const User = require('./../../app/models/user');

describe("Unit Test for User class", () => {
    test('Create an user oject', () => {
        const user=new User(1, "DiegoRam", "Diego", "Bio");
        expect(user.id).toBe(1);
        expect(user.userName).toBe("DiegoRam");
        expect(user.name).toBe("Diego");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();
    });
    test('Add getters', () => {
        const user=new User(1, "DiegoRam", "Diego", "Bio");
        expect(user.getUserName).toBe("DiegoRam");
        expect(user.getBio).toBe("Bio");
        expect(user.getDateCreated).not.toBeUndefined();
        expect(user.getLastUpdated).not.toBeUndefined();
    });
    test('Add setters', () => {
        const user=new User(1, "DiegoRam", "Diego", "Bio");
        user.setUserName = "Ram"
        expect(user.setUserName).toBe("Ram");
        user.setBio = "New Bio"
        expect(user.setBio).toBe("New Bio");
    });
});
