import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


export function TransactionsTable(){

//Inicio da Sumilação de uma api com mirage.js
useEffect(() => {
 api.get('transactions').then(data => console.log(data))
}, []);

//Fim da Sumilação de uma api com mirage.js
return(
    <Container>
        <table>
            <thead>
                <tr>
                <th>Titulo</th>
                <th>Valor</th>
                <th>Catergoria</th>
                <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td >Desenvolvimento de Sites</td>
                <td className="deposit">R$12000,00</td>
                <td>Desenvolvimento</td>
                <td>20/02/2021</td>
                </tr>
            
                <tr>
                <td>Aluguel</td>
                <td className="withdraw">R$1.100</td>
                <td>Casa</td>
                <td>17/02/2021</td>
                </tr>

            </tbody>
        </table>
    </Container>
)

}