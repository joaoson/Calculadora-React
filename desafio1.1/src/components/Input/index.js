import {InputContainer} from "./style"

const Input = ({value}) => {
    return (
      <InputContainer>
        <input disabled spellcheck="false" value={value} />
      </InputContainer>
    );
  }
  
  export default Input;