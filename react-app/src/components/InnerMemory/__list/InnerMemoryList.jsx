import './InnerMemoryList.scss';

const memores = [128, 256, 512];

function InnerMemoryList() {
  const activeMemory = 0;
  return (
    <div className="inner-memory__list">
      {memores.map((memory, index) => {
        const actived = index === activeMemory;
        const CurrentClassName = actived ? 'product-color__picture_current' : '';
        return (
          <button className={`inner-memory__item ${CurrentClassName}`} type="button" key={index}>{memory} ГБ</button>
        );

      })}
    </div>
  );
}

export default InnerMemoryList;
