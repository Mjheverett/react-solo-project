import React from 'react';
import { Columns, Column } from 'bloomer';
import 'bulma/css/bulma.css';

const Home = () => {
    return (
        <Columns isCentered>
            <Column isSize='1/2'>
                <h1>Home Page</h1>
            </Column>
        </Columns>
    )
}

export default Home;