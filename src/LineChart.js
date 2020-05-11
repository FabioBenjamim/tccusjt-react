import React,{Component} from 'react';
import {Line,} from 'react-chartjs-2';
import './App.css';

class LineChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril',
            'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
             'Outubro', 'Novembro', 'Dezembro'],
             datasets:[
                 {
                    label:'Teste',
                    data:[
                        13,
                        61,
                        43,
                        96,
                        74,
                        57,
                        4,
                        86,
                        81,
                        18,
                        75,
                        10
                    ],
                    backgroundColor:[
                        'rgba(33, 162, 70, 0.6)'
                    ]
                 } 
             ]
            }
        }
    }

    static defaultProps = {
        displayTitle:false,
        displayLegend:false,
        legendPosition:'right'
    }

    render(){
        return(
            <div className="chart">
                <Line
                    data={this.state.chartData}
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

export default LineChart;