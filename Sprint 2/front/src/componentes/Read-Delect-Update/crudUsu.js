import React from 'react'
import { Table } from 'semantic-ui-react'
import './crudUsu.css'


const CrudUsu = ({ dados }) => {
    const atributos = Object.keys(dados[0])
    return (
        <div className="cont">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {atributos.length && atributos.map((atributo) => {
                            return (
                                <th>{atributo}</th>
                            )
                        })}
                        <th>Ações</th>
                    </tr>


                </thead>
                <tbody>
                    {dados.length && dados.map((dado) => {
                        return (
                            <tr>
                                {atributos.length && atributos.map((atributo) => {
                                    return (
                                        <td>{dado[atributo]}</td>
                                    )
                                })}
                                <td>
                                    <button id='btnex' type="submit">Excluir</button>
                                    <button id='btnex' type="submit">Editar</button>
                                </td>
                            </tr>

                        )
                    })}

                </tbody>
                {/* <Table.Footer fullWidth>
                    <tr>
                        <th />
                        <th colSpan=''>
                            <Button icon primary size='smal' className='button'>Consultar</Button>
                            <Button size='small' className='button'>Deletar</Button>
                        </th>
                    </tr>
                </Table.Footer> */}
            </Table>
        </div>
    )
}

export default CrudUsu;