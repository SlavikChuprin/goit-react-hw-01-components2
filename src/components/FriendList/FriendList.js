import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => {
        const { id, isOnline, avatar, name } = friend;
        return (
          <li className={s.item} key={id}>
            <span className={isOnline ? s.onLine : s.offLine}></span>
            <img className={s.avatar} src={avatar} alt="{name}" width="48" />
            <p className={s.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;
