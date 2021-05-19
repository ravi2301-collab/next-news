
import { useRouter } from 'next/Router';
import styles from '../styles/Toolbar.module.css';

export const Toolbar = () => {
    const router = useRouter();
    return(
        <div className={styles.main}>
            <div onClick = {() =>  router.push('/')}> Home </div> 
            <div onClick = {() =>  router.push('/feed/1')}> Feed </div> 
            <div onClick = {() =>  router.push('/eom')}> EOM </div> 
            <div onClick = {() =>  window.location.href='https://facebook.com'}> Facebook </div> 
        </div>
    )
}