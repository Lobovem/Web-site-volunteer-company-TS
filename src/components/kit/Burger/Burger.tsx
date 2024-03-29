import { useDispatch, useSelector } from 'react-redux';
import s from './Burger.module.scss';
import {  burgerMenuSelector, changeBurgerState } from '../../../redux/slice/contentSlice';

export const Burger = () => {
  const burgerMenu = useSelector(burgerMenuSelector);

  const handleBlock = () => {
    document.body.classList.toggle('block');
  }
  

  const dispatch = useDispatch();

  return (
    <div
      className={!burgerMenu ? s.burger : `${s.burger} ${s.active}`}
      data-testid="burger"
      onClick={() => {
        dispatch(changeBurgerState(!burgerMenu));
        handleBlock();
      }}

    >
      <span className={s.burger__line} data-testid="burger-line"></span>
      <span className={s.burger__line} data-testid="burger-line"></span>
      <span className={s.burger__line} data-testid="burger-line"></span>
    </div>
  );
};
