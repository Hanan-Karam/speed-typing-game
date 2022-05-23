import { useState, useEffect, useRef } from "react";

function useGame(){
    const STARTING_TIME = 15;
  const [words, setWords] = useState("")
  const [counter, setCounter] = useState(STARTING_TIME)
  const [isCounterOn, setIsCounterOn] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textAriaref = useRef(null)


  function handleChange (event){
    const {value} = event.target;
    setWords(value)
  }


  function countWords(text){
    const wordsArr = text.trim().split(' ');
    return wordsArr.filter((word) => {
      return word !==""
    }).length
  }

  function resetGame(){
    setIsCounterOn(true)
    setCounter(STARTING_TIME)
    setWords("")
    textAriaref.current.disabled = false
    textAriaref.current.focus()
    setWordCount(0);
  }

  function endGame(){
    setIsCounterOn(false) 
      const wordsNum =  countWords(words)
      setWordCount(wordsNum)
  }

  useEffect(() =>{
    if(isCounterOn && counter > 0){
      setTimeout(() =>{
        setCounter(time => time -1)
      }, 1000)
    }else if(counter === 0){
      endGame()
    }
  }, [counter, isCounterOn])


  console.log(words)

  return { handleChange, 
            words, 
            isCounterOn, 
            counter, 
            textAriaref, 
            resetGame, 
            wordCount
        }
}
export default useGame