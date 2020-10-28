import React from 'react';
import { Link } from 'react-router-dom';
import { Columns, Column, Content, Image, Title } from 'bloomer';
import 'bulma/css/bulma.css';

const Home = (props) => {
    const { user } = props;
    
    return (
        <Columns isCentered>
            <Column isSize='1/2'>
                <br />
                <Title isSize={4}>Clever Beach Condo Name</Title>
                <Content>
                    <Image isRatio="4:3" src="https://via.placeholder.com/640x480" alt="beach boardwalk" />
                </Content>
                <Content>
                    <p>Book your stay with us in Gulf Shores, AL. Beach views with quick access to the ocean and 2 pools!</p>
                </Content>
                <Content>
                    {(user !== null) ? 
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