// В данном коде мы при изменении Counter 2 освобождаемся от перерендора компонента.

import { useMemo, useState } from "react";

const ExampleUseMemo = () => {
const [counter1, setCounter1] = useState(0); // Counter 1
const [counter2, setCounter2] = useState(0); // Counter 1
const expensiveValue = useMemo(() => computeExpensiveValue(counter1), [counter1]);

  return (
    <div>
        <div>
            <h2>Counter 1: {counter1}</h2>
            <button onClick={() => setCounter1(counter1 + 1)}>+</button>
        </div>
        <div>
            <h2>Counter 2: {counter2}</h2>
            <button onClick={() => setCounter2(counter2 + 1)}>+</button>
        </div>
        <div>
            <h2>Expensive Value:</h2>
            {expensiveValue}
        </div>
    </div>
  );
};

const computeExpensiveValue = (count) => {

    console.log("This function is running...")

    for (let i = 0; i < 100000000; i++) {
        count += 1;
    }
    return count;
};



// Вызов функции onItemClick запоминается и и меняется при изменении term
import { useCallback } from 'react';

export function MyParent({ term }) {

  const onItemClick = useCallback(event => {
    console.log('You clicked ', event.currentTarget);
  }, [term]);

  return (
    <MyBigList
      term={term}
      onItemClick={onItemClick}
    />
  );
}
