import styles from './Circles.module.css'
import { FC } from 'react';

const Circles: FC<{children: any}> = ({ children }) => {
    return (
        <>
              <ul className={styles.circles} >
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
              </ul>
              {children}
        </>
    );
}

export default Circles;