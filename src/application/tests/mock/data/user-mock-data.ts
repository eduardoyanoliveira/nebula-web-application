import { IUser } from "../../../Domain/Entities/IUser";
import { getRandomNumberMax } from "../../../utils/random-number/random-number-max";

export const usersMockData : IUser[] = [
    {
        id: 'sf1hsoigjopwmalcmstwag-sh-dhw525',
        username: 'super',
        email: 'super@super.com',
        role: 'ADMIN',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: 'yytry.atasyhafdhadywer-wayhae',
        username: 'test',
        email: 'test@test.com',
        role: 'USER',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: 'qweopriweotjgksdnbdfhjadjayaer-ywerai4823jtrwekhestj-yyu',
        username: 'yan',
        email: 'yan@gmail.com',
        role: 'ADMIN',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
    },
];

export function getRandomUser() : IUser{
    const index = getRandomNumberMax(usersMockData.length -1);

    return usersMockData[index];
};
