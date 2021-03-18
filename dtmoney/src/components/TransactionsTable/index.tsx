import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable (){
    useEffect(() => {
        api.get('transactions')
            .then(data => console.log(data))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>WebSite</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$ 1.000,00</td>
                        <td>Casa</td>
                        <td>24/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}