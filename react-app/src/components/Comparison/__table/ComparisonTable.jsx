import './ComparisonTable.scss';

function ComparisonTable() {
  return (
    <div className="comparison__table">
      <span className="comparison__cell comparison__cell-head">Модель</span>
      <span className="comparison__cell comparison__cell-head">Вес</span>
      <span className="comparison__cell comparison__cell-head">Высота</span>
      <span className="comparison__cell comparison__cell-head">Ширина</span>
      <span className="comparison__cell comparison__cell-head">Толщина</span>
      <span className="comparison__cell comparison__cell-head">Чип</span>
      <span className="comparison__cell comparison__cell-head">Объём памяти</span>
      <span className="comparison__cell comparison__cell-head">Аккумулятор</span>

      <span className="comparison__cell comparison__cell_hover">Iphone11</span>
      <span className="comparison__cell comparison__cell_hover">194 грамма</span>
      <span className="comparison__cell comparison__cell_hover">150.9 мм</span>
      <span className="comparison__cell comparison__cell_hover">75.7 мм</span>
      <span className="comparison__cell comparison__cell_hover">8.3 мм</span>
      <span className="comparison__cell comparison__cell_hover">A13 Bionic chip</span>
      <span className="comparison__cell comparison__cell_hover">до 128 Гб</span>
      <span className="comparison__cell comparison__cell_hover">До 17 часов</span>

      <span className="comparison__cell comparison__cell_hover">Iphone12</span>
      <span className="comparison__cell comparison__cell_hover">164 грамма</span>
      <span className="comparison__cell comparison__cell_hover">146.7 мм</span>
      <span className="comparison__cell comparison__cell_hover">71.5 мм</span>
      <span className="comparison__cell comparison__cell_hover">7.4 мм</span>
      <span className="comparison__cell comparison__cell_hover">A14 Bionic chip</span>
      <span className="comparison__cell comparison__cell_hover">до 256 Гб</span>
      <span className="comparison__cell comparison__cell_hover">До 19 часов</span>

      <span className="comparison__cell comparison__cell_hover">Iphone13</span>
      <span className="comparison__cell comparison__cell_hover">174 грамма</span>
      <span className="comparison__cell comparison__cell_hover">146.7 мм</span>
      <span className="comparison__cell comparison__cell_hover">71.5 мм</span>
      <span className="comparison__cell comparison__cell_hover">7.65 мм</span>
      <span className="comparison__cell comparison__cell_hover">A15 Bionic chip</span>
      <span className="comparison__cell comparison__cell_hover">до 512 Гб</span>
      <span className="comparison__cell comparison__cell_hover">До 19 часов</span>
    </div>
  );
}

export default ComparisonTable;
