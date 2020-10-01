import React from 'react'
import PropTypes from 'prop-types'
import './Table.css';

export const Table = ({ className, style, Id, tableStructure, tableValue, ...props}) => {
    return (
        <table 
        className={className}
        style={style}
        {...props}
        >
            <thead>
            <tr>
                {tableStructure.map((val)=>{
                    <th id={val.id}  >{val.heading}</th>
                })}
            </tr>
            </thead>

            <tbody>
            {tableValue.map((val) => {
                <tr>
                    {tableStructure.map((str)=>{
                    <td>{val[str.valLable]}</td>
                })}
                </tr>
            })}
            </tbody>
        </table>
    )
}

Table.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    className: PropTypes.string,
    /**
     * What background color to use
     */
    style: PropTypes.object,
    Id: PropTypes.string,
    tableStructure: PropTypes.array,
    tableValue: PropTypes.array,

  };
  
  Button.defaultProps = {
    tableStructure: [],
    tableValue: [],
  };
