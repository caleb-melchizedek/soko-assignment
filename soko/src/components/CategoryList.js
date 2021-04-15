const CategoryList = (props) => {
const {categories, handleClick} = props
    return ( 
    <div>
      <div className="list-group">
        { categories.map( (category)=>{
            return(
                <a class="list-group-item list-group-item-action " data-toggle="button" aria-current="true" onClick={()=> {handleClick({category})}} >
                  {category[0].toUpperCase()+category.substring(1)}
              </a>
            )
          })
        }
      </div>
     </div>
    )
}
 
export default CategoryList;