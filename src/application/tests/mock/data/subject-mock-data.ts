import { ISubject } from "../../../Domain/Entities/ISubject";
import { getRandomNumberMax } from "../../../utils/random-number/random-number-max";

export const subjectsMockData : ISubject[] = [
    {
        id: 'sf1as5fd1asgha-fafa',
        name: 'sales',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: 'sf1as5fd1asgha-fhdfkhartsgxfa',
        name: 'stock',
        is_active: false,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: 'sf1as5fd1-asghankjghoww',
        name: 'crm',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
    },
];

export function getRandomSubject() : ISubject {
    const index = getRandomNumberMax(subjectsMockData.length -1);

    return subjectsMockData[index];
};
