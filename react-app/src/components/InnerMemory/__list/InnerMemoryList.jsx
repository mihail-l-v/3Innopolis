import './InnerMemoryList.scss';


function InnerMemoryList() {
  return (
    <div className="inner-memory__list">
      <button className="inner-memory__item inner-memory__item_current" type="button">128 ГБ</button>
      <button className="inner-memory__item" type="button">256 ГБ</button>
      <button className="inner-memory__item" type="button">512 ГБ</button>
    </div>
  );
}

export default InnerMemoryList;
