import './_advertisements.scss';

function Advertisements() {
  return (
    <aside className="advertisements">
      <p className="advertisements__text">Реклама</p>
      <div className="advertisements__list">
        <iframe className="advertisements__item" src="./ads.html" frameborder="1" title='Advertisement1'></iframe>
        <iframe className="advertisements__item" src="./ads.html" frameborder="1" title='Advertisement2'></iframe>
      </div>
    </aside>
  );
}

export default Advertisements;
