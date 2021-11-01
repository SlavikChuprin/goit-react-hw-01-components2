import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={s.item}
              key={id}
              style={{
                backgroundColor: `#${Math.random().toString(16).substr(2, 6)}`,
              }}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Statistics;
