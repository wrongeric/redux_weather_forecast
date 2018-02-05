import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';


export default (props) => {
    function average(data){
        return _.round(_.sum(data)/data.length);
    }
    return (
        <div>
            <Sparklines height={100} width={180} data={props.data} units="K">
                <SparklinesLine color={props.color}></SparklinesLine>
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    )
}

