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
                    <Image isRatio="4:3" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsecure.instantsoftwareonline.com%2FStayUSA%2FPropertyImages%2F1960%2F5814%2FL17.jpg&f=1&nofb=1" alt="beach boardwalk" />
                </Content>
                <Content>
                    <p>Book your stay with us in Gulf Shores, AL. Beach views with quick access to the ocean and 2 pools!</p>
                    <p>Accomodations for up to 4 adults plus one bunk. Full kitchen, TV, and balcony.</p>
                </Content>
                <Content>
                    {(user !== null) ? 
                        <Link to="/booking"><p>Book your trip now</p></Link>
                        :
                        <Link to="/login"><p>Log in to book your stay!</p></Link>
                    }
                </Content>
            </Column>
        </Columns>
    )
}

export default Home;