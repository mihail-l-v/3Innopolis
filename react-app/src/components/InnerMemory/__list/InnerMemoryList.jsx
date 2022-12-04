import React, {useState} from 'react';
import './InnerMemoryList.scss';

const memores = [
  { id: 0,
    memory: 128},
  { id: 1,
    memory: 256},
  { id: 2,
    memory: 512},
  ];

function InnerMemoryList() {

  const [count, setCount] = useState(0);
  const handleMemory = (e, id) => {setCount(id)};
  const activeMemory = count;

  return (
    <div className="inner-memory__list">
      {memores.map((memory, index) => {
        const actived = index === activeMemory;
        const CurrentClassName = actived ? 'product-color__picture_current' : '';
        return (
          <button className={`inner-memory__item ${CurrentClassName}`} onClick={(e) => {handleMemory(e, memory.id)}} type="button" key={memory.id}>{memory.memory} ГБ</button>
        );

      })}
    </div>
  );
}

export default InnerMemoryList;
