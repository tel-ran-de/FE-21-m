import React from 'react';

const Table = (props) => {

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <table className={props.className}>
            <thead>
            <tr>
                <th>#</th>
                {
                    props.columns.map((column, index) =>
                        <th key={index}>{capitalize( Object.values(column)[0] ) }</th>
                    )
                }
            </tr>

            </thead>
            <tbody>
            {
                props.array.map((element, index) => {
                    return (
                        <tr key={index}>
                            <td>{index+1}</td>
                            { props.columns.map(column => (
                                <td key={index}>
                                    {element[ Object.keys(column)[0] ]}
                                </td>
                            )) }
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    );
}

export default Table;