import React,{Component} from 'react';
import {Pie} from 'react-chartjs-2';

class PieChart extends Component{
    constructor(props){
        super(props);

        this.state = this.props

    }

    static defaultProps = {
        displayTitle:false,
        displayLegend:true,
        legendPosition:'right'
    }

    render(){
        return(
            <div className="piechart">
                <Pie

                    data={this.props.chartData}

                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:'Investimento mais rentável'
                        },
                        legend:{
                            display:this.props.displayLegend
                        }
                    }}
            />
            </div>
        )
    }

}

export default PieChart;