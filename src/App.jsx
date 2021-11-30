import Section from './components/Section';
import PaintingList from './components/PaintingList/PaintingList';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Alert from './components/Alert/Alert';
import Counter from './components/Counter/Counter';
import Dropdown from './components/Dropdown/Dropdown';
import paintings from './paintings.json';

const colorPickerOptions = [
  { id: '01', label: 'red', color: '#F44336' },
  { id: '02', label: 'green', color: '#4CAF50' },
  { id: '03', label: 'blue', color: '#2196F3' },
  { id: '04', label: 'grey', color: '#607D8B' },
  { id: '05', label: 'pink', color: '#E91E63' },
  { id: '06', label: 'indigo', color: '#3F51B5' },
];

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

      <Section title="Карточки продуктов">
        <PaintingList items={paintings} />
      </Section>

      <Section title="Состояние компонента">
        <Counter initialValue={10} />
      </Section>

      <Section title="Випадающее меню">
        <Dropdown />
      </Section>

      <Section title="Color Picker">
        <ColorPicker options={colorPickerOptions} />
      </Section>

      {/* <Alert text="success" type="success" />
      <Alert text="warning" type="warning" />
      <Alert text="error" type="error" /> */}
    </div>
  );
}
