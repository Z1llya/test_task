import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {actions} from "../redux/slice/slice";
import "./css.css"


export default function MainPage(){

    const {teachers} = useSelector(state => state.teachers);

    const [show,setShow] = useState(false);


    const {teachers:result} = teachers;



    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(actions.getCategories())
        dispatch(actions.getTeachers({
            element:{  categories: [
                    5
                ],
                page: 0,
                pageSize: 20
            }
        }))
    },[]);



    const subjectsData = {};

    result && result.forEach((teacher,index) => {

        teacher.categories.forEach(subject => {
            if (subjectsData.hasOwnProperty(subject.name)) {
                subjectsData[subject.name].push(subject.pricePerHour);
            } else {
                subjectsData[subject.name] = [subject.pricePerHour];
            }
        });
    });


    const averagePrices = {};

    for (const subject in subjectsData) {
        const prices = subjectsData[subject];
        const sum = prices.reduce((acc, price) => acc + price, 0);
        averagePrices[subject] = sum / prices.length;
    }


    function buttonHandler() {
        for (const key in averagePrices) {
            dispatch(actions.postAVG({
                element:{
                    categoryName:key,
                    averagePrice:averagePrices[key]
                }
            }))
        }
        setShow(!show)


    }

    return(
        <div>
            <button className="button-27" onClick={buttonHandler}>Calculate average price</button>
            {show && Object.keys(averagePrices).map((element,index)=> (<div key={index}>{element}:{averagePrices[element]}</div>))}
        </div>
    );
}