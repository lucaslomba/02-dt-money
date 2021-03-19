import { FormEvent, useState } from 'react'
import { Container, TransactionTypeContainer, RadiusBox } from './styles'
import closeImage from '../../assets/close.svg'
import incomeImage from '../../assets/income.svg'
import outcomeImage from '../../assets/outcome.svg'
import Modal from 'react-modal'
import { api } from '../../services/api'

interface NewTransactioModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal ( { isOpen, onRequestClose} : NewTransactioModalProps) {
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault()

        const data = {
            title,
            value,
            category,
            type,
        };

        api.post('/transactions', data)
    }

    return(
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImage} alt="Fechar modal"/>
            </button>
            
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input placeholder="Título" value={title} onChange={event => setTitle(event.target.value)}/>

                <input type="number" placeholder="valor" value={value} onChange={event => setValue(Number(event.target.value))}/>

                <TransactionTypeContainer>
                    <RadiusBox 
                        type="button" 
                        onClick={() => { setType('deposit'); }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImage} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadiusBox>

                    <RadiusBox 
                        type="button" 
                        onClick={() => { setType('withdraw'); }}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImage} alt="Saída"/>
                        <span>Saída</span>
                    </RadiusBox>
                </TransactionTypeContainer>

                <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)}/>

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}