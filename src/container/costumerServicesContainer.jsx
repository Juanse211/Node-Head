import { Link } from "react-router-dom"

export const CostumerServicesContainer = () => {
  return <>
    <section className="checkbox">
      <h1 className=" fs-bleeding fs-color fs-center fs-title-l">CUSTOMER SERVICES</h1>
      <p className="fs-paragraph fs-color">
        <br />
        When contacting us regarding an existing order, please provide as much information as you can about you and your
        order to enable us to respond quickly and effectively to your query.
        <br />
        For your protection, please do not provide credit card numbers, passwords, bank account numbers or other non-public
        information when contacting us. Public internet email is a communication channel which cannot be guaranteed to be
        secure, therefore there are no guarantees that any email or its contents have not been intercepted by a third party or
        have been altered after being sent. We commit to ensuring the privacy of your information.
      </p>
    </section>

    <form className="fs-paragraph checkbox">
      <div className="checkbox__body">
        <div className="checkbox__body-50">
          <label className="checkbox__label" for="first-name">First Name</label>
          <input className="checkbox__input" type="text" id="first-name" required />
        </div>

        <div className="checkbox__body-50">
          <label className="checkbox__label" for="last-name" >Last Name</label>
          <input className="checkbox__input" type="text" id="last-name" required />
        </div>

        <div className="checkbox__body-66">
          <label className="checkbox__label" for="email-info" >E-mail</label>
          <input className="checkbox__input" type="email" id="email-info" required />
        </div>

        <div className="checkbox__body-33">
          <label className=" checkbox__label" for="phone-number">Phone Number</label>
          <input className="checkbox__input" type="text" id="phone-number" />
        </div>

        <div className="checkbox__body-50">
          <label className="checkbox__label" for="customer-reference">Customer reference</label>
          <input className="checkbox__input" type="text" id="customer-reference" placeholder="Shown on all our confirmation emails" />
        </div>

        <div className="checkbox__body-50 fs-color">
          <label className="checkbox__label" for="example-form-control-select-1 ">Example select</label>
          <select className="checkbox__input" id="example-form-control-select-1" placeholder="Select">
            <option value="gq">General query</option>
            <option value="ihrmt">I haven't received my tickets</option>
            <option value="ilmt">I've lost my tickets</option>
          </select>
        </div>

        <div className="checkbox__body-50 ">
          <label className="checkbox__label" for="coments">Your Message</label>
          <textarea className="checkbox__input" id="comments" name="message" rows="3"></textarea>
        </div>

        <div className="checkbox__body-50 fs-colors">
          <label className="checkbox__label" for="event-details" >Event Details</label>
          <input className="checkbox__input" type="text" id="event-details" placeholder="Ej. Venue, Date" />
        </div>

        <div className="checkbox-2">
          <div className="tof">
            <label for="acepta ">I agree to the <Link className="fs-primary-color" to={"/tos"}>Term of Service and PrivacyPolicy</Link></label>
            <input className="tof__input" id="acepta" type="checkbox" name="acepta" value="1" />
          </div>
          <div className="button">
            <a href="#"></a>
            <input className="button__body" type="submit" value="Continue" />
          </div>
        </div>
      </div>
    </form>
  </>
}