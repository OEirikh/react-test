import PropTypes from 'prop-types';
import Painting from '../Painting/Painting';
import s from './PaintingList.module.css';

function paintingList({ items }) {
  return (
    <ul className={s.flex}>
      {items.map(item => (
        <li // обязательний пропc (key) для колекций, является уникальним идентифиатором, індекс масива можно использовать только в тех колекциях в которих ничего не удаляется,должен стоять на самом корневом елементе(когда ви что-то возвращаете из "elem.map")
          key={item.id}
          className={s.li}
        >
          <Painting
            imageUrl={item.url}
            title={item.title}
            authorName={item.author.tag}
            authorProfile={item.author.url}
            price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

console.log(paintingList);

paintingList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string })),
};

export default paintingList;
