import React from 'react';

export default class Person extends React.Component {
    render() {
        const { name, age, key } = this.props;
        return (

            <tr>
               
                <td>
                    {name}
                    <img height={30} width={40} src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                </td>
                <td>
                    {age}
                </td>
            </tr>
        );
    }
}