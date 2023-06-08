#  React
- It's all about components

## Overview
- JSX (we commonly use html, css, JS)
- It all compiles to a full html css js project (The browser gets only one HTML file)
- SPA (Single Page Application)

## Practice
- Root directories: (pages, components)
  - [pages] are for big and specific purpose component (screens)
  - [components] are for small or reusable components
- We will open for each component a folder, with 2 files: tsx (react), and css (style)
    - example:
      - Box (directory)
        - Box.tsx
        - Box.css
- We would prefer make components instead of writing html
- We would prefer doing something reusable if we can (props)

## Component Structure Example:
```tsx
/**
 * Component Imports
 */
import './Box.css'


/**
 * Component Definitions (interfaces, functions, variables
 */
interface IBoxProps {
    background: string;
}

/**
 * Component UI - what will render and we will see
 * @param props
 */
const Box = (props: IBoxProps) => {

  /**
   * React Logic (use state, handlers...)
   */


  /**
   * Actual UI
   */
  return(
          <div style={{backgroundColor: props.background ?? 'purple'}} >
          
        </div>
    )
    
}

/**
 * Component export
 */
export default Box;
```

## useState
- by default - nothing is suppost to change in the render of the component
- BUT - if we want the component to RE-RENDER when something is changed - we will put this somethin in useState
- if a change of a state depends on its previous state, we will use prevState syntax:
- example:
  - ```tsx
    // const  [state, setState] = useState<type of the state>(initial value)
    const [amount, setAmount] = useState<number>(0)
    
    //when we want to change: (lets say this is in a onClick of a button)
    setAmount(prevAmount => prevAmount+1)
    ```
```





nullish operator:
??