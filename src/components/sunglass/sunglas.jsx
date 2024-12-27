import React from 'react';

import './sunglas.css';
import Watch from '../Watch/Watch';
import { add, multiply, divide } from '../../utlis/calculate';

const sunglas = () => {
    
        const first = 55;
        const second = 155;
        const sum = add(first, second);
        const mult = multiply(first,second);
        const baag = divide (first, second);
    return (
        <div>
       <Watch></Watch>

            </div>

        
        
    );

};

export default sunglas;