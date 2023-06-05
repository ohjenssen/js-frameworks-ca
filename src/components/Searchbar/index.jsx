import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import * as S from './Searchbar.styles';

export default function Searchbar({posts}){
    const [inputValue, setInputValue] = useState('');

    function handleInput(event){
        setInputValue(event.target.value);
    }

    const filteredPosts = posts.filter((post) => 
        post.title.toLowerCase().includes(inputValue.toLowerCase())
    )

    return (
        <S.Form>
            <div>
                <input type='text' placeholder='Search' onChange={handleInput}/>
                <button type='submit'><FaSearch/></button>
            </div>
            {inputValue && 
                <div className="search-suggestions">
                    {filteredPosts.map((post) => (
                        <div className="item" key={post.id}>
                            <Link to={`/product/${post.id}`} className="title">{post.title}</Link>
                        </div>
                    ))}
                </div>
            }
        </S.Form>
    )
}