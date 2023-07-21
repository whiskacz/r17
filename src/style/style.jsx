import styled from 'styled-components'

export const Wrapper = styled.div `
      
        display: flex;
        width: 100vw;
        min-height: 10vh;
        font-family: Arial;
        justify-content: space-between;
        background-color: #9999ee;
        margin: 0;
        padding: 0;

    
    body{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }

    .container{
     
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .my{
        width: 300px;
        color: white;
        font-size: 2rem;
        line-height: 10vh;
        margin-left: 10px;
        flex-shrink: 0;
    }

    li{
        list-style: none;
        font-size: 2rem;
        cursor: pointer;
        border: none;
        margin: 20px;
    }

    a{
        box-sizing: border-box;
        text-decoration: none;
        color: white;
       
    }

    a:hover{
        border-bottom: 2px solid white;   
    }

    .active{
        flex-direction: column;
        justify-content: flex-start;
    }
`