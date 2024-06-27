import { Component } from 'react'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {BarChart,CartesianGrid,Bar,XAxis,YAxis,Legend,Tooltip} from 'recharts'
import './index.css'
const weekData=[{
    id:1,
    weeks:"week 1",
    values:8.42
},
{
    id:2,
    weeks:"week 2",
    values:8.14
},
{
    id:3,
    weeks:"week 3",
    values:7
},
{
    id:4,
    weeks:"week 4",
    values:5.74
},
{
    id:5,
    weeks:"week 5",
    values:8
},
{
    id:6,
    weeks:"week 6",
    values:7.85
},
{
    id:7,
    weeks:"week 7",
    values:7.85
},
{
    id:8,
    weeks:"week 8",
    values:4.71
},
{
    id:9,
    weeks:"week 9",
    values:8.8
},
{
    id:10,
    weeks:"week 10",
    values:8.8
},
{
    id:11,
    weeks:"week 11",
    values:8.14
},
{
    id:12,
    weeks:"week 12",
    values:4
},
{
    id:13,
    weeks:"week 13",
    values:5.81
},
{
    id:14,
    weeks:"week 14",
    values:8.42
},
{
    id:15,
    weeks:"week 15",
    values:8
}
] 

class Weeks extends Component {
    state={active:"Weeks"}
  
    exportAsJpeg=() => {
        alert("Downloaded Successfully weeksdata.jpeg")
    }  

    exportAspng=() =>{
        alert("Downloaded Successfully weeksdata.png")
    }

    render(){  
        const {active}=this.state
    return(
    <div className='total-height'>
        <div className='spacing-between-months-days-weeks'>
        <Link to="/" className='text-decoration-days'><p>Days</p> </Link>
        <Link to ="/Weeks" className='text-decoration-days'><p  className={active === "Weeks" ? "active-styling":" "}>Weeks</p></Link>
        <Link to="/Months" className='text-decoration-days'><p>Months</p></Link>
        </div>
        <h3>Weekly Learning Report</h3>
        <div className='weekly-report'>
         <BarChart width={400} height={200} data={weekData} barSize={10} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="weeks" />
        <YAxis dataKey="values"/>
        <Tooltip />
        <Legend />
        <Bar dataKey="values" fill="#8884d8"/>

    </BarChart>
    <Popup modal trigger={<button className='export-button-styling'>Export</button>} className='popup-width'>
    <BarChart width={200} height={200} data={weekData} >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="weeks" />
        <YAxis dataKey="values"/>
        <Tooltip />  
        <Bar dataKey="values" fill="#8884d8" /> 
    </BarChart>
    <button onClick={this.exportAsJpeg}>Export as .jpeg</button> 
        <button onClick={this.exportAspng}>Export as .png</button>
    </Popup>
    </div>
    </div>
    )}
}
export default Weeks