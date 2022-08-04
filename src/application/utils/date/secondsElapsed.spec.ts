import { secondsElapsed } from "./secondsElapsed";

describe('Second Elapsed', () => {

    it('should return the correct elapsed seconds between two dates', () => {
        const start = new Date('1995-12-17T03:24:00');
        const end = new Date('1995-12-17T03:24:10');

        const elapsedTime = secondsElapsed(start, end)

        expect(elapsedTime).toBe(10);
    });
});