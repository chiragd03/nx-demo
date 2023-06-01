import { isEven } from 'is-even';

export const isOdd = (x: number)  => {
    console.log('comment')
    return !isEven(x);
}     