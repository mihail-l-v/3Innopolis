import './CharacteristicsList.scss';

function CharacteristicsList() {
  return (
    <ul className="characteristics__list">
      <li className="characteristics__item">Экран: <b>6.1</b></li>
      <li className="characteristics__item">Встроенная память: <b>128 ГБ</b></li>
      <li className="characteristics__item">Операционная система: <b>iOS 15</b></li>
      <li className="characteristics__item">Беспроводные интерфейсы: <b>NFC, Bluetooth, Wi-Fi</b></li>
      <li className="characteristics__item">Процессор:<b><a className="characteristics__item-link" href="https://ru.wikipedia.org/wiki/Apple_A15" target="_blank" rel='noreferrer'>Apple A15 Bionic</a></b></li>
      <li className="characteristics__item">Вес: <b>173 г</b></li>
    </ul>
  );
}

export default CharacteristicsList;
