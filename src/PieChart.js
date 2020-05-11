import React,{Component} from 'react';
import {Pie} from 'react-chartjs-2';

class PieChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
             labels:[
                'Ação', 'Bolsa de valores', 'Título',
                'Investimento', 'Ação 2'
             ],   
             datasets:[
                 {
                    label:'R$',
                    data:[
                        13,
                        61,
                        43,
                        96,
                        74
                    ],
                    backgroundColor:[
                        'rgba(33, 162, 70, 0.6)',
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(75, 192, 192, 0.6)'
                    ]
                 } 
             ]
            }
        }
    }

    static defaultProps = {
        displayTitle:false,
        displayLegend:true,
        legendPosition:'right'
    }

    render(){
        return(
            <div className="piechart grafico00">
                <Pie
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

export default PieChart;