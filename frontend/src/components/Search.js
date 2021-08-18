import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { requestgetsearch } from '../Thunk';
const Search = () => {
    const result=useSelector(state=>state.regReducer.searchData.data)
    console.log(result)
    const [text, setText] = useState("");
    const [suggetion, setSuggetion] = useState(result)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(requestgetsearch())
    }, [dispatch])

    const handleChange = (text) => {
        console.log(text) //data ja rha h
        let matches = []
        if(text.length>0) {
            matches = result.filter(record => {
                const regex = new RegExp(`${text}`, 'gi');
                 return record.name.match(regex)
            })
        }
        console.log('matches', matches)
        setSuggetion(matches)
        setText(text);
    }
    

    return (
        <div><center>
            <form >
                <lable>Search:
                <input type="text" name="search" placeholder="Search..." autoComplete="off" 
                 onChange={e => handleChange(e.target.value)} value={text} ></input>
                </lable>
            </form>
            {suggetion && suggetion.map((suggetions, i) => 
            <div key={i} >{suggetions.name}</div>
            )}
            </center>
        </div> 
    )
}

export default Search
