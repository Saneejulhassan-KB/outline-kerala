const GoldTicker = () => {
    // Static gold rate data (replace with API later if needed)
    const goldRate = {
      price: "₹58,670 / 10g",
      change: "+₹120",
      image: "/images/gold-graph.png", // Put this in your public/images folder
    };
  
    return (
      <div className="container mb-3">
        <div
          className="gold-rate-wrapper d-flex align-items-center px-3 py-2"
          style={{
            background: "#f7f7f7",
            borderRadius: "6px",
            marginTop: "10px",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#cc9900",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              Gold Rate Today
            </div>
            <div style={{ fontSize: "16px", fontWeight: "bold", color: "#000" }}>
              {goldRate.price}
              <span
                style={{
                  color: "green",
                  fontSize: "14px",
                  marginLeft: "8px",
                }}
              >
                {goldRate.change}
              </span>
            </div>
          </div>
          {/* <div>
            <img
              src={goldRate.image}
              alt="Gold Rate Graph"
              style={{ height: "40px", objectFit: "contain" }}
            />
          </div> */}
        </div>
      </div>
    );
  };
  
  export default GoldTicker;
  