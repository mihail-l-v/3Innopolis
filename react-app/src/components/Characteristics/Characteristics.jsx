import './Characteristics.scss';
import CharacteristicsTitle from './__title/CharacteristicsTitle';
import CharacteristicsList from './__list/CharacteristicsList';

function Characteristics() {
  return (
    <section className="characteristics">
      <CharacteristicsTitle />
      <CharacteristicsList />
    </section>
  );
}

export default Characteristics;
