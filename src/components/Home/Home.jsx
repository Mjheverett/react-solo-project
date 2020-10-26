import React from 'react';
import { Link } from 'react-router-dom';
import { Columns, Column, Content, Title } from 'bloomer';
import 'bulma/css/bulma.css';

const Home = () => {
    return (
        <Columns isCentered>
            <Column isSize='1/2'>
                <br />
                <Title isSize={4}>Clever Beach Condo Name</Title>
                <Content>
                    <img src="../../images/gulf-shores-boardwalk.jpg" />
                </Content>
                <Content>
                    <p>Book your stay with us in Gulf Shores, Al. Due to hurricane Maria, this unit has been newly renovated and is ready for the 2021 season!</p>
                </Content>
                <Content>
                    {true ? 
                        <Link to="/booking"><p>Book your trip now</p></Link>
                        :
                        <p>Log in to book your trip!</p>
                    }
                </Content>
            </Column>
        </Columns>
    )
}

export default Home;