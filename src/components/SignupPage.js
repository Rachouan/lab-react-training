import {useReducer} from 'react';
import {Greetings} from './Greetings';

const validate = (type,value) => {

    switch (type) {
        case 'email':
            return String(value)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );

        case 'password':
            return String(value)
            .toLowerCase()
            .match(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            );
        default:
            return true;
    }
    
  };

const initialFormState = {
    email: {
        value: '',
        valid: '',
    },
    password: {
        value: '',
        valid: '',
    },
    nationality: 'en'
}

function onSignUpFormDispatch(state, action){
    switch (action.type) {
        case 'input':
            const newState = {...state}

            newState[action.name].value = action.value;
            newState[action.name].valid = validate(action.name,action.value) ? 'is-valid' : 'is-invalid';

            return newState;
        case 'clean':
            return initialFormState;
    }
}

export const SignupPage = () => {
    const [{email,password,nationality},dispatch] = useReducer(onSignUpFormDispatch,initialFormState);
    
    const onFormInputChange = (value, name) => dispatch({type:'input',value,name})
    
    return (
        <div className="my-5 p-5 border rounded">
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email" className={`form-control ${email.valid}`} value={email.value} onChange={(e) => onFormInputChange(e.target.value,'email')}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password" className={`form-control ${password.valid}`} value={password.value} onChange={(e) => onFormInputChange(e.target.value,'password')}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="">Nationality</label>
                    <select id="nationality" name="nationality" className="form-control"  value={nationality} onChange={(e) => onFormInputChange(e.target.value,'nationality')}>
                        <option value="de">German</option>
                        <option value="nl">Dutch</option>
                        <option value="fr">English</option>
                    </select>
                </div>
                <button className="btn btn-primary">Sign up</button>
            </form>
            <hr/>
            <Greetings lang={nationality}>{email.value}</Greetings>
            <p>Your email address is {email.valid}</p>
        </div>
    )
}