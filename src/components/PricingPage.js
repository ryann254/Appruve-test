import React from "react";
import Swal from "sweetalert2";
import { Zoom, Bounce } from "react-reveal";

function PricingPage({ history }) {
  function swal(pkg) {
    Swal.fire({
      title: "Congratulations!",
      text: `You've successfully subscribed to the ${pkg} plan`,
      icon: "success",
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: "Thumbs up, great!",
      onClose: () => {
        history.push("/success");
      },
      showClass: {
        popup: "animated fadeInDown faster",
      },
      hideClass: {
        popup: "animated fadeOutUp faster",
      },
    });
  }

  async function fetchAPI(packageName) {
    //call the api
    await setTimeout(() => {
      swal(packageName);
    }, 1000);
  }

  function subscribe(e) {
    const { className } = e.target;
    if (className === "button bronze") {
      let packageName = className.slice(6, 14);
      fetchAPI(packageName);
    } else if (className === "button gold") {
      let packageName = className.slice(6, 12);
      fetchAPI(packageName);
    } else {
      let packageName = className.slice(6, 15);
      fetchAPI(packageName);
    }
  }
  return (
    <>
      <Bounce right>
        <div className="upper-homepage">
          <div className="showcase">
            <h1>Plans & Pricing</h1>
            <h5 className="mini-header">Choose The Plan that Best Suits You</h5>
          </div>
        </div>
      </Bounce>
      <Zoom>
        <div className="lower-homepage">
          <div className="lower bronze">
            <div className="lower-header bronze">Bronze</div>
            <div className="content">
              <h4>Internet Connectivity</h4>
              <p>Speeds of 4mbps shared across devices</p>
              <p>Can only connect upto 3 device</p>
              <p>Stream at only 480p</p>
              <p>Download music and videos fast</p>
              <p>Browse at blazing speeds</p>
            </div>
            <div className="price bronze">
              KSH 3,000 <span>/mo</span>
            </div>
            <div>
              <button className="button bronze" onClick={subscribe}>
                Choose Plan
              </button>
            </div>
          </div>
          <div className="lower">
            <div className="lower-header gold">Gold</div>
            <div className="content">
              <h4>Internet Connectivity</h4>
              <p>Speeds of 4mbps shared across devices</p>
              <p>Can only connect upto 3 device</p>
              <p>Stream at only 480p</p>
              <p>Download music and videos fast</p>
              <p>Browse at blazing speeds</p>
            </div>
            <div className="price gold">
              KSH 9,000 <span>/mo</span>
            </div>
            <div>
              <button className="button gold" onClick={subscribe}>
                Choose Plan
              </button>
            </div>
          </div>
          <div className="lower">
            <div className="lower-header silver">Silver</div>
            <div className="content">
              <h4>Internet Connectivity</h4>
              <p>Speeds of 4mbps shared across devices</p>
              <p>Can only connect upto 3 device</p>
              <p>Stream at only 480p</p>
              <p>Download music and videos fast</p>
              <p>Browse at blazing speeds</p>
            </div>
            <div className="price silver">
              KSH 5,000 <span>/mo</span>
            </div>
            <div>
              <button className="button silver" onClick={subscribe}>
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </Zoom>
    </>
  );
}

export default PricingPage;
