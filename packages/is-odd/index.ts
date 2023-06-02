import { isEven } from 'is-even';

export const isOdd = (x: number)  => {
    console.log('comment updated')
    return !isEven(x);
}     