import styled from "styled-components";

export const Form = styled.form`
    position: relative;

    input {
        border: none;
        padding: 5px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    button {
        border: none;
        padding: 5px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    .search-suggestions {
        background-color: white;
        position: absolute;
        width: 100%;
        max-height: 233px;
        overflow-y: auto;
    }
    
    .item {
        border-top: 1px solid gray;
        padding: 10px 0px 10px 0px;

        :hover {
            background-color: #94baf7;
        }

        a {
            margin: 0px 0px 0px 5px;
        }
    }
`;