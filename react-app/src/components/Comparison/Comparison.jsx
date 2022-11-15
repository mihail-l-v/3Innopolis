import './Comparison.scss';
import ComparisonTitle from './__title/ComparisonTitle';
import ComparisonTable from './__table/ComparisonTable';

function Comparison() {
  return (
    <section className="comparison">
      <ComparisonTitle />
      <ComparisonTable />
    </section>
  );
}

export default Comparison;
