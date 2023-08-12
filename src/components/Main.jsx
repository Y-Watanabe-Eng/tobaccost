import '../style.css';
import {useState} from 'react';
import {Left} from './Left'
import {Right} from './Right'


export const Main = () => {

    const [price, setPrice] = useState('');
    const [box, setBox] = useState('');
    const [num, setNum] = useState('');

    const onChangePrice = (event) => setPrice(event.target.value);
    const onChangeBox = (event) => setBox(event.target.value);
    const onChangeNum = (event) => setNum(event.target.value);

    const onClickCalc = (e) => {

        e.preventDefault();

        const oneCost = price / box
        const dailyCost = oneCost * num
        const weeklyCost = dailyCost * 7
        const yearlyCost = dailyCost * 365
        const tenYearCost = dailyCost * 3650

        setOneCost(oneCost.toLocaleString());
        setDailyCost(dailyCost.toLocaleString());
        setWeeklyCost(weeklyCost.toLocaleString());
        setYearlyCost(yearlyCost.toLocaleString());
        setTenYearCost(tenYearCost.toLocaleString());

    };

    const [oneCost, setOneCost] = useState(0);
    const [dailyCost, setDailyCost] = useState(0);
    const [weeklyCost, setWeeklyCost] = useState(0);
    const [yearlyCost, setYearlyCost] = useState(0);
    const [tenYearCost, setTenYearCost] = useState(0);

    return (

        <main>
            <div className="grid sm:grid-cols-2">
                <Left 
                price={price} 
                box={box} 
                num={num} 
                onChangePrice={onChangePrice}
                onChangeBox={onChangeBox}
                onChangeNum={onChangeNum}
                onClickCalc={onClickCalc}
                />
                <Right
                oneCost={oneCost}
                dailyCost={dailyCost}
                weeklyCost={weeklyCost}
                yearlyCost={yearlyCost}
                tenYearCost={tenYearCost}
                />
            </div>
        </main>

    )
  }

