import { Link } from '@reach/router';
import React from 'react';
import styles from '../components/authorstyle.module.css';
import AuthorTable from '../components/authorTable';
import NewAuthorButton from '../components/newAuthorButton';


const Home = props => {


    return (
        <div>
            <NewAuthorButton/>
            <p className={styles.subtitle}>We have quotes by:</p>
            <AuthorTable/>
        </div>
    )
}


export default Home