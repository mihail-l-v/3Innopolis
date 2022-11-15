import './Appearance.scss';
import AppearanceItem from './__item/AppearanceItem';
import AppearanceItem2 from './__item2/AppearanceItem';
import AppearanceItem3 from './__item3/AppearanceItem';
import AppearanceItem4 from './__item4/AppearanceItem';
import AppearanceItem5 from './__item5/AppearanceItem';

function Appearance() {
  return (
    <section className="appearance">
      <AppearanceItem />
      <AppearanceItem2 />
      <AppearanceItem3 />
      <AppearanceItem4 />
      <AppearanceItem5 />
    </section>
  );
}

export default Appearance;
