 import React from 'react'
 import Caret from './caret';
 const UserTypings = ({
    userInput,
    className,
 } : {
userInput: string;
className?: string;
 }) => {
    const typedCharacters = userInput.split("");
    return (
        <div className = {className}>
        {typedCharacters.map((char,index) => {
            return <span className = 'text-primary-400' key = {`${char}_${index}`}>{char}</span>;

        })}
        <Caret />
        </div>
    );
 };

 const Character = ({char} : {char: string}) => {

    return <span >{char}</span>

 }
 
 export default UserTypings;
 