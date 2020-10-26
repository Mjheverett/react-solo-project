import React from 'react'
import CardForm from '../CardForm';
import { Columns, Column, Title } from 'bloomer';
import { ElementsConsumer } from '@stripe/react-stripe-js';

const Payment = () => {
    return (
        <Columns isCentered>
            <Column isSize='1/2'>
                <br />
                <Title isSize={4}>Payment Page</Title>
                <ElementsConsumer>
                    {({elements, stripe}) => (
                        <CardForm elements={elements} stripe={stripe}/>
                    )}
                </ElementsConsumer>
            </Column>
        </Columns>
    )
}

export default Payment;