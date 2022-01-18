import { useForm, ValidationError } from "@formspree/react";
import { buttonStyles, h3Styles, inputStyles, paragraphStyles } from "../utils/constants";

export default function RSVPForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <div id="rsvp">
      <h3 className={`${h3Styles}`}>RSVP</h3>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label className={`${paragraphStyles} block`} htmlFor="name">Name</label>
        <input className={`${inputStyles}`} id="name" type="name" name="name" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        {/* Email */}
        <label className={`${paragraphStyles} block`} htmlFor="email">Email Address</label>
        <input className={`${inputStyles}`} id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        {/* Email */}
        <label className={`${paragraphStyles} block`} htmlFor="message">Anything you'd like to add?</label>
        <textarea className={`${inputStyles}`} id="message" name="message" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <button className={`${buttonStyles} block mt-4`} type="submit" disabled={state.submitting}>
          Submit
        </button>
        <ValidationError errors={state.errors} />
      </form>
    </div>
  );
}
