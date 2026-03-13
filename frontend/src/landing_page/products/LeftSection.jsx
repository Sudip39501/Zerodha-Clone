const LeftSection = ({
  image,
  productName,
  productDescription,
  Trydemo,
  LearnMore,
  GooglePlay,
  AppStore,
}) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row row-cols-1">
        <div className="col-lg-6 mb-5 d-flex justify-content-center align-items-center" style={{height:"400px"}}>
          <img
            src={image}
            alt={productName}
            style={{ height: "100%", objectFit: "contain" }}
          />
         
        </div>
        <div className="col-lg-2"></div>
         <div className="col-lg-4 mb-5 mt-5 d-flex flex-column justify-content-center">
          <h3 style={{ fontWeight: "400" }} >
            {productName}
          </h3>
          <p style={{ lineHeight: "30px" }}>{productDescription}</p>
          <div className="">
            {Trydemo && (
              <a
                href={Trydemo}
                style={{ textDecoration: "none" }}
              >
                Try Demo <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            )}
            {LearnMore && (
              <a
                href={LearnMore}
                style={{
                  textDecoration: "none",
                  marginBottom: "20px",
                  marginLeft: Trydemo ? "65px" : "0px",
                }}
              >
                LearnMore <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            )}
          </div>
          <div className="mt-3">
            {GooglePlay && (
              <a
                href={GooglePlay}
                style={{ textDecoration: "none", marginBottom: "20px" }}
              >
                <img src="media/images/googlePlayBadge.svg" alt="GooglePlay" />
              </a>
            )}

            {AppStore && (
              <a
                href={AppStore}
                style={{
                  textDecoration: "none",
                  marginBottom: "20px",
                  marginLeft: "20px",
                }}
              >
                <img src="media/images/appstoreBadge.svg" alt="AppStore" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
