import Section from './components/Section';
import PaintingList from './components/PaintingList';
import paintings from './paintings.json';

export default function App() {
  // ето
  // const isOnline = false;

  return (
    <div>
      {/* 
      -------рендер по условию-----
      если ето то рендери ето }
      { isOnline && 'Онлайн' }

      { если ето то рендери ето, а если нет то другое }
      { isOnline ? 'Онлайн' : 'Офлайн'
      -----------------------------*/}

      {/* <PaintingList items={paintings} /> */}

      <Section title="top weeks">
        <PaintingList items={paintings} />
      </Section>
      <Section />
    </div>
  );
}
