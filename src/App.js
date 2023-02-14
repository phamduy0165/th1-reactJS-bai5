import React,{useState} from 'react';
import './App.css'

export default function App() {
    const [age, setAge] = useState(5);
    const [name,setName] = useState('');

    const onChangeAge = () => {
        setAge(age + 1);
    };

    const onChangeName = () => {
        setName('Duy');
    };

    return (
    <div className='container'>
        <div>Xin Chào: {name}</div>
        <div>Tuổi là : {age}</div>
        <div onClick={onChangeAge}>Tăng tuổi thêm 1</div>
        <div onClick={onChangeName}>Hiển thị tên : </div>
    </div>
    );

}