import type { FC } from 'react';
import { CiSearch } from "react-icons/ci";
import { CategoriesContainer } from '../css/categories';

interface CategoriesContainerProps {
    activeCategory: string;
    categoryChangeHandler: (category: string) => void;
}

const Categories: FC<CategoriesContainerProps> = ({ activeCategory, categoryChangeHandler }) => {

    const CATEGORIES = ["Salads", "Pasta", "Bowls", "Food", "Pizza", "Snake"];

    return (
        <CategoriesContainer>
            <div className="categories">
                {CATEGORIES.map((category) => (
                    <div onClick={() => categoryChangeHandler(category)} key={category} className={`category ${activeCategory === category && "active"}`}>
                        {category}
                    </div>
                ))}
            </div>
            <div style={{ width: 100 }}>
                <CiSearch size={25}/>
            </div>
        </CategoriesContainer>
    );
}

export default Categories;
