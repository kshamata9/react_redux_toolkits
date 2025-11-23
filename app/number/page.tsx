'use client'
import {  useAppSelector } from "../store/store";
import {selectEventNumbers, selectOldNumbers} from './selector';
export default function Number(){
    const evenNumbers = useAppSelector(selectEventNumbers);
    const oldNumbers = useAppSelector(selectOldNumbers);
    
    return (<>
    <h2>Even Numbers</h2>
      <ul>
        {evenNumbers.map(num => (
          <li key={num}>{num}</li>
        ))}
      </ul>

      <h2>Old Numbers</h2>
      <ul>
        {oldNumbers.map(num => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </>)
}