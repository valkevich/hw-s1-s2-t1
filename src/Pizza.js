import { useState } from "react";
import './Pizza.css'

const Pizza = ({key, onClick}) => {

    const [ingridients, setIngridients] = useState([
        {
            name:'Сыр',
            id:'cheese',
            checked: false
        },
        {
            name:'Толстое тесто',
            id:'dough',
            checked: false
        },
        {
            name:'Пепперони',
            id:'pepperoni',
            checked: false
        },
        {
            name:'Ананас',
            id:'pineapple',
            checked: false,
        },
        {
            name:'Анчоусы',
            id:'anchovies',
            checked: false,
        },
        {
            name:'Огурцы',
            id:'cucumbers',
            checked: false,
        }
    ])

    const [mainPizza, setMainPizza] = useState([]);

    
    const onAddIngridient = (item, index, arr) => {
        if(mainPizza.length < 5){
            item.checked = !item.checked;
            setIngridients(ingridients)
            const fakeArr = ingridients.filter(elem => elem.checked);   
            setMainPizza(fakeArr); 
        } else {
            if(item.checked){
                item.checked = !item.checked;
                setIngridients(ingridients);
                const fakeArr = ingridients.filter(elem => elem.checked);   
                setMainPizza(fakeArr); 
                
            }
        }
 
    }

    return (
        <div className='app-body'>
            <div className='pizza'>
                <ul>
                    {mainPizza.map(item => {
                            return(
                                <li key={item.id}>
                                    {item.name}
                                </li>
                            ) 
                    })}
                </ul>
                
            </div>
            <ul className='ingridients'>
                {ingridients.map((item, index, arr) => {
                    return(
                        item.checked ? 
                            <li key={item.id}>{item.name}
                                <button onClick={() => onAddIngridient(item, index)}>✔️</button>
                            </li> 
                            : <li key={item.id}>{item.name}
                                <button onClick={() => onAddIngridient(item, index)}>❌</button>
                            </li> 
                            
                    )    
                })}
            </ul>
        </div>
    )
}

export default Pizza;