import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Card from './Card';

const Recipe = () => {
    const { pathname } = useLocation();
    const { recipes } = useSelector((state) => state.recipeReducer);
    console.log(recipes);
    return ( 
        <div className="recipe-container">
            {/* <h1 className="text-2xl font-semibold text-center">OUR RECIPES</h1> */}
            <div className="recipe-cards mt-[5%]  flex flex-wrap p-5">
                {recipes.length > 0 ? (
                    recipes.map((r) => <Card key={r.id} recipe={r} />)
                ) : (
                    <h1 className="w-full mt-10 text-3xl font-extrabold text-center text-green-600">
                        No Recipe Found
                    </h1>
                )}
            </div>

            {pathname == "/recipes" && (
                <a
                    href="/create-recipe"
                    className="cursor-pointer rounded-md absolute top-[15%] py-2 px-5 left-[10%]  bg-green-200 gap-x-3 flex items-center"
                >
                    <i className="text-3xl text-green-600 ri-add-box-line"></i>
                    Create Recipe
                </a>
            )}
        </div>
    )
}

export default Recipe

