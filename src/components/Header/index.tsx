  
import { useState } from 'react';
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';


export function Header() {

    //Inicio do Modal 
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModalOpen(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModalOpen(){
        setIsNewTransactionModalOpen(false);
    }

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={handleOpenNewTransactionModalOpen}>
                    Nova Transação
                </button>

                <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModalOpen}>
                 <h2>Cadastrar transação</h2>
                </Modal>

            </Content>
        </Container>
    );
};
