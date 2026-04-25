import React from "react";
const data ={
    eyebrowHeader : "Chapter IX",
    heading : "Sign Up For News & Updates",
    submit : "submit",
    image : "images/pre-footer.png",
    desc: "Volutpat aliquam ut feugiat enim vel. Sed sed mauris interdum consequat in elit et. Id in arcu vestibulum enim ornare a suscipit aenean. Fringilla id egestas condimentum adipiscing mauris arcu enim orci."
}
const PreFooterForm = () => {
  return (
    <div className="pre-footer">
      <div className="container">
        <div className="pre-footer-in">
          <div className="left">
            <p className="eyebrow-head">{data.eyebrowHeader}</p>
            <div className="pre-footer-form">
               <div className="top">
               <h2>{data.heading}</h2>
               </div>
                <form action="" id="news-update">
                    <div>
                    <label htmlFor="name">Name*</label>
                    <input type="text" id="name" name="name" placeholder="Name" autoComplete="name" required/>
                    </div>
                   <div>
                   <label htmlFor="email">Email Address*</label>
                   <input type="email" id="email" name="email" placeholder="Email Address" autoComplete="email" required/>
                   </div>
                    <input type="submit" value={data.submit} />
                </form>
                <div className="bottom">
                    <p>{data.desc}</p>
                </div>
            </div>
          </div>
          <div className="right">
          <p className="eyebrow-head">{data.eyebrowHeader}</p>
            <div className="pre-footer-img">
                <img src={data.image} alt="Image" className="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooterForm;
