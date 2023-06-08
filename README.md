#  React
- It's all about components

## Overview
- JSX (we commonly use html, css, JS)
- It all compiles to a full html css js project
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
- We would prefer doing something reusable if we can

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





nullish operator:
??