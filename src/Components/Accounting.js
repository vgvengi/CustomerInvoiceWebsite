import"./Accounting.css"
import { Link } from "react-router-dom"
function Accounting() {

    return (
        <div className="MainDiv">
           <div className="Dashboard">
            <h5>
                <Link to={"/dashboard"}>
                Dashboard
                </Link>
                </h5>
            <h5> Customer</h5>
            <h5> Vendor</h5>
            <h5>Accounting</h5>
            <h5> Reporting</h5>
            <h5>Configuration</h5>

           </div> 
           {/* End of dashboard  */}
           <div className="CustomerInvoice">
            <div className="invoice">
            <h6>Customer Invoice</h6>
            <h5>Draft</h5>
            <div className="custominput">
             <p> Customer</p>
             <input type="text">
             </input>
             <select className="dropDownButton">
                <option className="dropDownMenu">Sam</option>
                <option className="dropDownMenu">Levin</option>
             </select>
             {/* customer div */}
            </div>
            </div>
            {/* End of custom invoice div */}

            <div className="InvoiceDate">
            <p>Invoice Date </p>
            <p>Payment Reference</p>
            <p>Due Date</p>
            <p>Journal</p>
            </div>
           <div className="InvoiceDetails">
            <button>Invoice Lines</button>
            <button>Journal Items</button>
            <button>Other info</button>
           </div>
           <div className="table">

           <table>
            <thead>

            <tr>
                <th>Product</th>
                <th>Label</th>
                <th>Account</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Tax</th>
                <th>Tax.excl</th>
            </tr>
            </thead>
           </table>
           </div>
           </div>
           {/* <div>
            <table className="tab">
                <tr>

                <th>
                </th>
                </tr>
            </table>
           </div> */}

        </div>
    )
}

export default Accounting
