import React from 'react'
import PropTypes from 'prop-types'
import './Table.css';

export const Table = ({ className, style, Id,tableStructure, tableValue,  ...props}) => {
    return (
        <div
            className="table table-responsive"
            >
            <table 
            className={"table table-hover "+ className}
            style={style}
            {...props}
            >
                <thead>
                <tr>
                    {tableStructure.map((val)=>{
                        debugger;
                        return <th id={val.id}  >{val.heading}</th>
                    })}
                </tr>
                </thead>

                <tbody>
                {tableValue.map((val) => {
                    return (
                    <tr>
                        {tableStructure.map((str)=>{
                            return <td>{val[str.valLable]}</td>
                    })}
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

Table.propTypes = {
    /**
     * Is this add some class
     */
    className: PropTypes.string,
    /**
     * Add inline style
     */
    style: PropTypes.object,
    /**
     * set Id to Table
     */
    Id: PropTypes.string,
     /**
     * set table value
     */
    tableValue : PropTypes.array,
    /**
     * set table frame like Heading
     */
    tableStructure: PropTypes.array
  };
  Table.defaultProps = {
    tableValue : [
        {
            getOne: "sdnkdns",
            getTwo: "sdkmkcn"
        },
        {
            getOne: "sdnkdns",
            getTwo: "sdkmkcn"
        }
    ],
    tableStructure: [
        {
            id: "first",
            heading: 'First',
            valLable: 'getOne'
    
        },
        {
            id: "second",
            heading: 'second',
            valLable: 'getTwo'
    
        }
    ]
  };
