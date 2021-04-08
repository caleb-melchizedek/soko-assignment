 const Bag = () => {
   return ( 
      <div className="conatainer">
        <div className="d-inline-block   justify-items-center align-items-center">
          <img src="/sad.png" alt="sad emoji"/>
          <h6>It's empty here</h6>
          <p className="disabled">Start shopping to add Items to your bag </p>
          <button className="btn btn-warning"><a href="#">Back to Home page</a></button>

        </div>
      </div>
    );
 }
  
 export default Bag;