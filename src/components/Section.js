import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <div>
      {/* 
      -------рендер по условию-----
      если ето то рендери ето }
      { isOnline && 'Онлайн' }

      { если ето то рендери ето, а если нет то другое }
      { isOnline ? 'Онлайн' : 'Офлайн'
      -----------------------------*/}
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
