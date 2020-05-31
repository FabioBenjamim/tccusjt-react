import React,{Component} from 'react';
import {Line,} from 'react-chartjs-2';

class ManteveChart3 extends Component{
    constructor(props){
        super(props);
        
        this.state =  this.props
            
                
    }



    static defaultProps = {
        displayTitle:false,
        displayLegend:false,
        legendPosition:'right',
        fontSize: 8
    }



    render(){
        return(
            <div className="chart">
                <Line
                    data={this.props.manteveData3}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:'Investimento mais rentável'
                        },
                        legend:{
                            display:this.props.displayLegend,
                            fontSize:this.props.fontSize
                        }
                    }}
            />
            </div>
        )
    }

}

export default ManteveChart3;