const bcrypt = require('bcrypt')

const setUsers = async (User) => {
    try {
        const usersData = [
            { username: "Nathan", password: "lol", RoleId: 1 },
            { username: "Mathias", password: "lol", RoleId: 2 },
            { username: "Maxime", password: "lol", RoleId: 3 },
            { username: "Dorian", password: "lol", RoleId: 3 }
        ];

        // Promise.all pour attendre toutes les promesses de hachage
        const hashedPasswords = await Promise.all(
            usersData.map(async (user) => {
                const hash = await bcrypt.hash(user.password, 10);
                return { ...user, password: hash };
            })
        );

        // Promise.all pour attendre toutes les promesses de création d'utilisateur
        await Promise.all(
            hashedPasswords.map(async (user) => {
                await User.create(user);
            })
        );

    } catch (error) {
        console.error('Error creating users:', error.message);
    }
};


const setProfils = (Profil) => {
    Profil.create({ gameName: "XxKevinxX" })
    Profil.create({ gameName: "XddMdrr" })
}

const setRoles = (Role) => {
    Role.create({ label: "superadmin" })
    Role.create({ label: "admin" })
    Role.create({ label: "edit" })
}

const setGameRanks = (GameRank) => {
    GameRank.create({ ranksLabel: "bronze" })
    GameRank.create({ ranksLabel: "silver" })
    GameRank.create({ ranksLabel: "gold" })
    GameRank.create({ ranksLabel: "platinium" })
    GameRank.create({ ranksLabel: "diamond" })
}

const setGameRoles = (GameRole) => {
    GameRole.create({ gameRoleLabel: "top" })
    GameRole.create({ gameRoleLabel: "jungle" })
    GameRole.create({ gameRoleLabel: "mid" })
    GameRole.create({ gameRoleLabel: "adc" })
    GameRole.create({ gameRoleLabel: "support" })
}

const setGameQueues = (GameQueue) => {
    GameQueue.create({ queueLabel: "Duo" })
    GameQueue.create({ queueLabel: "Team" })
}

module.exports = { setUsers, setRoles, setProfils, setGameRanks, setGameRoles, setGameQueues }