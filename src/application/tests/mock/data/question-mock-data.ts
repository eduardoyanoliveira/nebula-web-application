import { IQuestion } from "../../../Domain/Entities/IQuestion";
import { getRandomNumberMax } from "../../../utils/random-number/random-number-max";
import { getRandomSubject } from "./subject-mock-data";
import { getRandomUser } from "./user-mock-data";

export const questionsMockData : IQuestion[] = [
    {
        id: 'sd51g5era1t5ewq4w5ehy1a-hgsdhj',
        title: 'how to do something',
        text: 'I need to do something, but that is something that needs something else',
        author: getRandomUser(),
        subject: getRandomSubject(),
        is_public: true,
        is_closed: false,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: 'sdsogfvaosipruweiagj840-0g-waegi94qi',
        title: 'test question',
        text: 'this is only a test, lets ignore this code.Nobody has seen it',
        author: getRandomUser(),
        subject: getRandomSubject(),
        is_public: false,
        is_closed: true,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: 'sd51g5era1t5ewq4w5ehy1a-hgsdhj',
        title: 'how to create a test mockdata in the right way',
        text: 'I need to implement automate tests on my api. I am planing to use mockdata to the tests, where can i learn about it',
        author: getRandomUser(),
        subject: getRandomSubject(),
        is_public: true,
        is_closed: true,
        created_at: new Date(),
        updated_at: new Date()
    },
];

export function getRandomQuestion() : IQuestion{
    const index = getRandomNumberMax(questionsMockData.length -1);

    return questionsMockData[index];
};
