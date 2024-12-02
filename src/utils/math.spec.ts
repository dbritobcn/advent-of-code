import { mcd, mcm } from './math';

describe('Math', () => {
    describe('MCD', () => {
        it('should return mcd successfully', () => {
            expect(mcd(2, 3)).toBe(1);
            expect(mcd(4, 6)).toBe(2);
            expect(mcd(4, 3)).toBe(1);
        });
    });

    describe('MCM', () => {
        it('should return mcm successfully', () => {
            expect(mcm([2, 3])).toBe(6);
            expect(mcm([4, 6])).toBe(12);
            expect(mcm([2, 4, 3])).toBe(12);
        });
    });
});
