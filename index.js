// Create a  input box and a search button.
// Now,  when user type the name on that input box and  click on that search button, you have to show that particular  user name and user email from that data which  you got from api  on the below of input box.
// Incase the typed user is not present in the api data ,then you have to show "No data found"

// https://jsonplaceholder.typicode.com/users
import useState from 'react'
const Index=()=>{
    var [myData , setmyData] = useState([])
    var getDataApi=()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
            return res.json()
        }).then((res)=>{

            for(let i=0; i<res.length; i++){
                myData.push(res[i])
            }
            setmyData(myData)
        })
    }

    return(
        <>
            <div className="input">
                <input type="text" />
            </div>,
            <div className='ans'></div>
            <div>
                <button type="submit" onClick={valid}>Search</button>
            </div>
        </>,
        document.getElementById('root')
    )
}

const valid=()=>{
    const data= document.getElementsByClassName('input')
    const ApiData={getDataApi}
    if (data===ApiData){
        document.getElementsByClassName('ans').innerHTML= data
    }
    else{
        document.getElementsByClassName('ans').innerHTML="Not valid"
    }
}
export default Index