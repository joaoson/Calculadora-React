import { Container, Content, Row} from "./style";
import Input from "./components/Input"
import Button from './components/Button'
import { useState } from "react";

const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  
  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(prev=>`${prev === '0' ? '' : prev}${number}`)
  };

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleXNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('x')
    }else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleDivisionNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
    }else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            setFirstNumber('0')
            break;
          case '-':
            handleMinusNumbers();
            setFirstNumber('0')
            break;
          case 'x':
            handleXNumbers();
            setFirstNumber('0');
            break;
          case '/':
            handleDivisionNumbers();
            setFirstNumber('0');
            break;
          default: 
            break;
        }
    }

  }

  return (
    <div className="App">
      <Container>
        <Content>
          <Input value={currentNumber} />
          <Row>
            <Button label='0' onClick={()=>handleAddNumber('0')}/>
            <Button label='x' onClick={handleXNumbers}/>
            <Button label='/' onClick={handleDivisionNumbers}/>
            <Button label='C'  onClick={handleOnClear}/>
          </Row>
          <Row>
            <Button label='1' onClick={()=>handleAddNumber('1')}/>
            <Button label='2' onClick={()=>handleAddNumber('2')}/>
            <Button label='3' onClick={()=>handleAddNumber('3')}/>
            <Button label='='onClick={handleEquals}/>
          </Row>
          <Row>
            <Button label='4' onClick={()=>handleAddNumber('4')}/>
            <Button label='5' onClick={()=>handleAddNumber('5')}/>
            <Button label='6' onClick={()=>handleAddNumber('6')}/>
            <Button label='+' onClick={handleSumNumbers}/>
          </Row>
          <Row>
            <Button label='7' onClick={()=>handleAddNumber('7')}/>
            <Button label='8' onClick={()=>handleAddNumber('8')}/>
            <Button label='9' onClick={()=>handleAddNumber('9')}/>
            <Button label='-' onClick={handleMinusNumbers}/>
          </Row>
        </Content>
      </Container>
    </div>
  );
}

export default App;
