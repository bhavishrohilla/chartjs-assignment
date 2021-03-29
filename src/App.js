import React from 'react';
import './app.css';
import Dat from './data.json'
import {Bar} from 'react-chartjs-2';
/* date, itemname */

function App() {
  const pollData1 =[
    {
        option:"30Dec",
        backgroundColor: ['rgba(0,0,0)'],
        items:2
    },
    {
        option:"31Dec",
        backgroundColor: ['rgba(0,0,0)'],
        items:4
    },
    {
        option:"1Jan",
        backgroundColor: ['rgba(0,0,0)'],
        items:5
    },
    {
        option:"2Jan",
        backgroundColor: ['rgba(0,0,0)'],
        items:9
    },
    {
        option:"3Jan",
        backgroundColor: ['rgba(0,0,0)'],
        items:11
    }
]
const pollData2 =[
    {
        option:"bat",
        backgroundColor: ['rgba(0,0,0)'],
        items:2
    },
    {
        option:"watch",
        backgroundColor: ['rgba(0,0,0)'],
        items:2
    },
    {
        option:"mobile",
        backgroundColor: ['rgba(0,0,0)'],
        items:2
    },
    {
        option:"press",
        backgroundColor: ['rgba(0,0,0)'],
        items:2
    },
    {
        option:"maggie",
        backgroundColor: ['rgba(0,0,0)'],
        items:2
    },
]
const data1 = {
    labels: pollData1.map(pollOption => pollOption.option),
    datasets:[
        {
            label:false,
            data : pollData1.map(pollOption => pollOption.items),
            backgroundColor: pollData1.map(pollOption => pollOption.backgroundColor),
            barPercentage:0.15,
            hoverBackgroundColor:'orange'
        }
    ]

}
const options1 = {
    title: {
        display:true,
        text:'Total Items Sold'
    },
    scales: {
        yAxes:[
            {
                ticks: {
                    display:false,
                    min:0,
                    max:14,
                    title:'items',
                    position:'left'
                }
            }
        ]
    },
    legend:{
        display:false
    }
}
const data2 = {
    labels: pollData2.map(pollOption => pollOption.option),
    datasets:[
        {
            label:'Items',
            data : pollData2.map(pollOption => pollOption.items),
            backgroundColor: pollData2.map(pollOption => pollOption.backgroundColor),
            barPercentage:0.15,
            hoverBackgroundColor:'purple'
        }
    ]

}
const options2 = {
    title: {
        display:true,
        text:'Items'
    },
    scales: {
        yAxes:[
            {
                label:{
                    display:true,
                    label:'Quantity'
                },
                ticks: {
                    display:false,
                    min:0,
                    max:8,
                    stepSize:1,
                    title:'items',
                    
                }
            }
        ]
    },
    legend:{
        display:false
    }
}
  return (
    <div className="app">
      <div className="text">My Fancy Application</div>
      <div className="outerdiv">
        <div className="form">
          <select className="select" >
            {["REFERENCE DATE" ,5, 6, 7, 8, 9, 10].map(d => <option value={d} label={d} />)}
          </select>
          <div className="deviation">
            Deviation
            <div>
              <div>
                <input type="radio" name="1" />
                1 day
              </div>
              <div>
                <input type="radio" name="2" />
                2 day
              </div>
              <div>
                <input type="radio" name="3" />
                3 day
              </div>
            </div>
          </div>
          <div className="items">
            Items
            <div>
              <div>
                <input type="radio" name="bat" />
                bat
              </div>
              <div>
                <input type="radio" name="watch" />
                watch
              </div>
              <div>
                <input type="radio" name="mobile" />
                mobile
              </div>
              <div>
                <input type="radio" name="mobile" />
                press
              </div>
              <div>
                <input type="radio" name="mobile" />
                maggi
              </div>
            </div>
          </div>
        </div>
        <div>
            <div className="bar-container">
                <div className="Bar1">
                    <Bar data={data1} options={options1}/>
                </div>
                
                <div className="Bar2">
                    <Bar className = "Barbot"data={data2} options={options2}/> 
                </div>
            </div>          
        </div>
      </div>
    </div>
  );
}

export default App;
