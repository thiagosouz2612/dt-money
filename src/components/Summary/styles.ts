import styled from "styled-components";

export const Container = styled.div`

display: grid;
grid-template-columns: repeat(3, 1fr);// criar 3 grids no css
gap: 2rem;
margin-top: -10rem;
*{
    font-family: 'Poppins', sans-serif;
}
div{

    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    
    &.highlight-background{
       background: var(--green);
       color:#fff;
   }
}
header{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

strong{
    display:block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight:500;
    font-weight: normal;

  
}

`