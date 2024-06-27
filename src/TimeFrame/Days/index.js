import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {BarChart,CartesianGrid,Bar,XAxis,YAxis,Legend,Tooltip} from 'recharts'
import {Link} from 'react-router-dom'
import './index.css' 
const data=[
    {id:1,"timestamp": "2024-01-01T00:00:00Z", "value": 10},
    {id:2,"timestamp": "2024-01-02T00:00:00Z", "value": 8},
    {id:3,"timestamp": "2024-01-03T00:00:00Z", "value": 6},
    {id:4,"timestamp": "2024-01-04T00:00:00Z", "value": 10},
    {id:5,"timestamp": "2024-01-05T00:00:00Z", "value": 9},
    {id:6,"timestamp": "2024-01-06T00:00:00Z", "value": 8},
    {id:7,"timestamp": "2024-01-07T00:00:00Z", "value": 8},
    {id:8,"timestamp": "2024-01-08T00:00:00Z", "value": 9},
    {id:9,"timestamp": "2024-01-09T00:00:00Z", "value": 7},
    {id:10,"timestamp": "2024-01-10T00:00:00Z", "value": 9},
  {id:11,"timestamp": "2024-01-11T00:00:00Z", "value": 5},{id:12,"timestamp": "2024-01-12T00:00:00Z", "value": 8},{id:13,"timestamp": "2024-01-13T00:00:00Z", "value": 10},{id:14,"timestamp": "2024-01-14T00:00:00Z", "value": 9},{id:15,"timestamp": "2024-01-15T00:00:00Z", "value": 7},{id:16,"timestamp": "2024-01-16T00:00:00Z", "value": 8},{id:17,"timestamp": "2024-01-17T00:00:00Z", "value": 10},
  {id:18,"timestamp": "2024-01-18T00:00:00Z", "value": 3},{id:19,"timestamp": "2024-01-19T00:00:00Z", "value": 8},
  {id:20,"timestamp": "2024-01-20T00:00:00Z", "value": 10},
  {id:21,"timestamp": "2024-01-21T00:00:00Z", "value": 3},{id:22,"timestamp": "2024-01-22T00:00:00Z", "value": 2},{id:23,"timestamp": "2024-01-23T00:00:00Z", "value": 1},
  {id:24,"timestamp": "2024-01-24T00:00:00Z", "value": 1},{id:25,"timestamp": "2024-01-25T00:00:00Z", "value": 8},{id:26,"timestamp": "2024-01-26T00:00:00Z", "value": 9},
  {id:27,"timestamp": "2024-01-27T00:00:00Z", "value": 10},{id:28,"timestamp": "2024-01-28T00:00:00Z", "value": 9},{id:29,"timestamp": "2024-01-29T00:00:00Z", "value": 8},{id:30,"timestamp": "2024-01-30T00:00:00Z", "value": 7},
  {id:31,"timestamp": "2024-01-31T00:00:00Z", "value": 6},{id:32,"timestamp": "2024-02-01T00:00:00Z", "value": 10},
  {id:33,"timestamp": "2024-02-02T00:00:00Z", "value": 8},
  {id:34,"timestamp": "2024-02-03T00:00:00Z", "value": 6},
  {id:35,"timestamp": "2024-02-04T00:00:00Z", "value": 10},
  {id:36,"timestamp": "2024-02-05T00:00:00Z", "value": 9},
  {id:37,"timestamp": "2024-02-06T00:00:00Z", "value": 8},
  {id:38,"timestamp": "2024-02-07T00:00:00Z", "value": 8},
  {id:39,"timestamp": "2024-02-08T00:00:00Z", "value": 9},
  {id:40,"timestamp": "2024-02-09T00:00:00Z", "value": 7},
  {id:41,"timestamp": "2024-02-10T00:00:00Z", "value": 9},
  {id:42,"timestamp": "2024-02-11T00:00:00Z", "value": 5},{id:43,"timestamp": "2024-02-12T00:00:00Z", "value": 8},{id:44,"timestamp": "2024-02-13T00:00:00Z", "value": 10},{id:45,"timestamp": "2024-02-14T00:00:00Z", "value": 9},{id:46,"timestamp": "2024-02-15T00:00:00Z", "value": 7},{id:47,"timestamp": "2024-02-16T00:00:00Z", "value": 8},{id:48,"timestamp": "2024-02-17T00:00:00Z", "value": 10},
  {id:49,"timestamp": "2024-02-18T00:00:00Z", "value": 3},{id:50,"timestamp": "2024-02-19T00:00:00Z", "value": 8},
  {id:51,"timestamp": "2024-02-20T00:00:00Z", "value": 10},
  {id:52,"timestamp": "2024-02-21T00:00:00Z", "value": 3},{id:53,"timestamp": "2024-02-22T00:00:00Z", "value": 2},{id:54,"timestamp": "2024-02-23T00:00:00Z", "value": 1},
  {id:55,"timestamp": "2024-02-24T00:00:00Z", "value": 1},{id:56,"timestamp": "2024-02-25T00:00:00Z", "value": 8},{id:57,"timestamp": "2024-02-26T00:00:00Z", "value": 9},
  {id:58,"timestamp": "2024-02-27T00:00:00Z", "value": 10},{id:59,"timestamp": "2024-02-28T00:00:00Z", "value": 9},{id:60,"timestamp": "2024-02-29T00:00:00Z", "value":8},{id:61,"timestamp": "2024-03-01T00:00:00Z", "value": 10},
  {id:62,"timestamp": "2024-03-02T00:00:00Z", "value": 8},
  {id:63,"timestamp": "2024-03-03T00:00:00Z", "value": 6},
  {id:64,"timestamp": "2024-03-04T00:00:00Z", "value": 10},
  {id:65,"timestamp": "2024-03-05T00:00:00Z", "value": 9},
  {id:66,"timestamp": "2024-03-06T00:00:00Z", "value": 8},
  {id:67,"timestamp": "2024-03-07T00:00:00Z", "value": 8},
  {id:68,"timestamp": "2024-03-08T00:00:00Z", "value": 9},
  {id:69,"timestamp": "2024-03-09T00:00:00Z", "value": 7},
  {id:70,"timestamp": "2024-03-10T00:00:00Z", "value": 9},
  {id:71,"timestamp": "2024-03-11T00:00:00Z", "value": 5},{id:72,"timestamp": "2024-03-12T00:00:00Z", "value": 8},{id:73,"timestamp": "2024-03-13T00:00:00Z", "value": 10},{id:74,"timestamp": "2024-03-14T00:00:00Z", "value": 9},{id:75,"timestamp": "2024-03-15T00:00:00Z", "value": 7},{id:76,"timestamp": "2024-03-16T00:00:00Z", "value": 8},{id:77,"timestamp": "2024-03-17T00:00:00Z", "value": 10},
  {id:78,"timestamp": "2024-03-18T00:00:00Z", "value": 3},{id:79,"timestamp": "2024-03-19T00:00:00Z", "value": 8},
  {id:80,"timestamp": "2024-03-20T00:00:00Z", "value": 10},
  {id:81,"timestamp": "2024-03-21T00:00:00Z", "value": 3},{id:82,"timestamp": "2024-03-22T00:00:00Z", "value": 2},{id:83,"timestamp": "2024-03-23T00:00:00Z", "value": 1},
  {id:84,"timestamp": "2024-03-24T00:00:00Z", "value": 1},{id:85,"timestamp": "2024-03-25T00:00:00Z", "value": 8},{id:86,"timestamp": "2024-03-26T00:00:00Z", "value": 9},
  {id:87,"timestamp": "2024-03-27T00:00:00Z", "value": 10},{id:88,"timestamp": "2024-03-28T00:00:00Z", "value": 9},{id:89,"timestamp": "2024-03-29T00:00:00Z", "value": 8},{id:90,"timestamp": "2024-03-30T00:00:00Z", "value": 7},
  {id:91,"timestamp": "2024-03-31T00:00:00Z", "value": 6},{id:92,"timestamp": "2024-04-01T00:00:00Z", "value": 10},
  {id:93,"timestamp": "2024-04-02T00:00:00Z", "value": 8},
  {id:94,"timestamp": "2024-04-03T00:00:00Z", "value": 6},
  {id:95,"timestamp": "2024-04-04T00:00:00Z", "value": 10},
  {id:96,"timestamp": "2024-04-05T00:00:00Z", "value": 9},
  {id:97,"timestamp": "2024-04-06T00:00:00Z", "value": 8},
  {id:98,"timestamp": "2024-04-07T00:00:00Z", "value": 8},
  {id:99,"timestamp": "2024-04-08T00:00:00Z", "value": 9},
  {id:100,"timestamp": "2024-04-09T00:00:00Z", "value": 7}] 

class Days extends Component{
    state={active:"Days"}

    exportAsJpeg=() =>{
        alert("Downaloaded Successfully daysdata.jpeg successfully")
    } 

    exportAsPng=() => {
        alert("Downloaded Successfully daysdata.png successfully")
    }

    render(){ 
        const {active}=this.state
    return(
     <div className='total-height'> 
        <div className='spacing-between-months-days-weeks'>
        <Link to="/" className='text-decoration-days'><p className={active === "Days" ? "active-styling":" "}>Days</p> </Link>
        <Link to ="/Weeks" className='text-decoration-days'><p>Weeks</p></Link>
        <Link to="/Months" className='text-decoration-days'><p>Months</p></Link>
        </div>     
        <h3>Day-wise Learning Report upto 100 days</h3> 
        <div className='weekly-report'> 
      <BarChart width={400} height={200} data={data} >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="timestamp" />
        <YAxis dataKey="value"/>
        <Tooltip /> 
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
    <Popup modal trigger={<button className='export-button-styling'>Export</button>} className='popup-width'>
    <BarChart width={200} height={200} data={data} >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="timestamp" />
        <YAxis dataKey="value"/>
        <Tooltip /> 
       
        <Bar dataKey="value" fill="#8884d8" /> 
        
    </BarChart>
    <button onClick={this.exportAsJpeg} >Export as .jpeg</button> 
        <button onClick={this.exportAsPng}>Export as .png</button>
    </Popup>
    </div> 
    </div>)
    }}
export default Days