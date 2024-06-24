import { describe, it, expect} from 'vitest'
import RandomLib from "./RandomLib.jsx"

const hasDuplicates = (arr) => {
    let set = new Set()
    return arr.some(el => {
        if (set.has(el)) return true
        set.add(el)
    })
}

describe.concurrent('random-lib-tests', () => {

    it('check if unique random number is generated', async () => {
        const random1 = RandomLib.generateRandomInt(1, 10);
        const random2 = RandomLib.generateRandomInt(1, 10);
        expect(random1).not.to.equal(random2);
    })

    it('check if unique random number array is generated', async () => {
        const randomNumbers = RandomLib.generateUniqueRandomNumbers(3,1, 10);
        expect(randomNumbers.length).toBe(3);
        expect(hasDuplicates(randomNumbers)).toBe(false);
    })

    it('check if min and max value are used to generate random number', async () => {
        const randomNumber = RandomLib.generateRandomInt(25, 30);
        expect(randomNumber).toBeGreaterThanOrEqual(25);
        expect(randomNumber).toBeLessThanOrEqual(30);
    })

});