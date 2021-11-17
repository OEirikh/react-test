// импорт PropTypes https://www.npmjs.com/package/prop-types для проверки типов пропсов
import PropTypes from 'prop-types';
// импорт дефолтной картинки
import defaultImg from './default.jpg';

console.log(defaultImg);

export default function Painting({
  imageUrl = defaultImg,
  title,
  authorProfile,
  authorName = 'не известно',
  price,
  quantity,
}) {
  return (
    <div>
      <img src={imageUrl ?? defaultImg} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={authorProfile}>{authorName}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      {/* рендер по условию */}
      <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

// Проверка типов пропсов, должно бить прописано для всего. .isRequired - обязательний проп

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorProfile: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
