import './InnerMemory.scss';
import InnerMemoryTitle from './__title/InnerMemoryTitle';
import InnerMemoryList from './__list/InnerMemoryList';

function InnerMemory() {
  return (
    <section className="inner-memory">
      <InnerMemoryTitle />
      <InnerMemoryList />
    </section>
  );
}

export default InnerMemory;
