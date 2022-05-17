import React, {useState} from 'react'


export const LoginForm = () => {
  const [email,setEmail] = useState('');
  const [password,setpassword] = useState('');
  const [allEntry, setAllEntry] = useState([]);
  const submitform  = () => {
    const newEntry = {email:email,password:password};


    setAllEntry([...allEntry,newEntry]);
    console.log(allEntry)
  }
  return (
    <div>
      <h1>EMPLOYEE FEEDBACK FORM</h1>
    <form action="" onSubmit={submitform}>
      <div>
        <lable for="email">Email</lable>
        <input type="text" name="email" id="name" autoComplete='off'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        
        />
        
      </div>
      <div>
        <lable for="password">password</lable>
        <input type="text" name="password" id="password" autoComplete='off'
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        />
      </div>

      <button type="submit">Login</button>
    </form>


    <div>
      {
        allEntry.map((cutElem) => {
          return(
            <div className="showDataStyles">
              <p>{cutElem.email}</p>
              <p>{cutElem.password}</p>
            </div>

          )

        })
      }
    </div>
    </div>
  )
}
