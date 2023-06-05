import styled from "styled-components";

export const Form = styled.form`
    padding: 10px;

    display: flex;
    flex-direction: column;

    .input {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;

        label {
            margin-bottom: 5px;
        }
        
        .input-wrapper {
            display: flex;
            align-items: center;
            position: relative;

            input {
                padding: 5px;
                width: 300px;
            }

            textarea {
                width: 300px;
            }

            .valid {
                position: absolute;
                right: 5px;
                top: 50%;
                transform: translateY(-50%);
                color: green;
            }
        }
    }
`;