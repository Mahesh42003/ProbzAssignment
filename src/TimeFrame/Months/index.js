import { Component } from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {BarChart,CartesianGrid,Bar,XAxis,YAxis,Legend,Tooltip} from 'recharts'
import { Link } from 'react-router-dom'
import './index.css'

const MonthlyData=[{
    id:1,
    Month:"January",
    values:7.35
},
{
    id:2,
    Month:"February",
    values:7.34
},
{
    id:3,
    Month:"March",
    values:7.35
},
{
    id:4,
    Month:"April",
    values:8.3
}]

class Months extends Component{
    state={active:"Months"}

    exportAsJpeg=() => {
        alert("Downloaded Successfully MonthsData.jpeg Successfully")
    } 

    exportAsPng=() => {
        alert("Downloaded Successfully MonthsData.png Successfully")
    }

    render(){ 
        const {active}=this.state
    return(
    <div className='total-height'>
        <div className='spacing-between-months-days-weeks'>
        <Link to="/" className='text-decoration-days'><p>Days</p> </Link>
        <Link to ="/Weeks" className='text-decoration-days'><p >Weeks</p></Link>
        <Link to="/Months" className='text-decoration-days'><p  className={active === "Months" ? "active-styling":" "}>Months</p></Link>
        </div>
        <h3>Monthly Learning Report</h3>
        <div className='weekly-report'>
        <BarChart width={400} height={250} data={MonthlyData} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Month" />
        <YAxis dataKey="values"/>
        <Tooltip />
        <Legend />
        <Bar dataKey="values" fill="#8884d8" />
        </BarChart>
        <Popup modal trigger={<button className='export-button-styling'>Export</button>} className='popup-width'>
    <BarChart width={200} height={200} data={MonthlyData} >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="Month" />
        <YAxis dataKey="values"/>
        <Tooltip />  
        <Bar dataKey="values" fill="#8884d8" /> 
    </BarChart>
    <button onClick={this.exportAsJpeg}>Export as .jpeg</button> 
        <button onClick={this.exportAsPng}>Export as .png</button>
    </Popup>
        </div>
    </div>)}
}
export default Months