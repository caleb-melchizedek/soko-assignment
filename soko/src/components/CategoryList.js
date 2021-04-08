const CategoryList = (props) => {
    return ( 
    <div>
            {/* props.categories.map( (category)=>{
                return(
                   <div>
                        
                   </div>
                )
            }); */}

        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                The current link item
            </a>
            <a href="#" class="list-group-item list-group-item-action">A second link item</a>
            <a href="#" class="list-group-item list-group-item-action">A third link item</a>
            <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
            <a href="#" class="list-group-item list-group-item-action">A disabled link item</a>
            <a href="#" class="list-group-item list-group-item-action">view all categories</a>
        </div>

            
     </div>
    )
}
 
export default CategoryList;