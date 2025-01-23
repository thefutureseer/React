//WARNING: Prop drilling works but if your handing 
//things to components that dont need 
//it then don't do it. It can be cumbersome 
//and hard to manage. 
// 1)Unnecessary Props if any components touch 
//it and dont use it 
//2) Scalability Issues, 3) Code Clutter

// const App = () => {
//Parent gives child props but parent 
//doesnt use props
// const userData = {
//   name:"nameHere",
//   age: 18
//  }
//  return <ParentComponent userHere={userData} />
// }

//Parent component giving child props 
//never from child to parent
export const ParentComponent = ({userHere}) => {
  return <Child user={userHere}/>
}

export const Child = ({user}) => {
  return (
    <div>
      <h1>name: {user.name}, age: {user.age}</h1>
    </div>
  )
}