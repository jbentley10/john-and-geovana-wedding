import { useForm, ValidationError } from "@formspree/react";
import {
  buttonStyles,
  h2Styles,
  paragraphStyles,
  inputStyles,
  labelStyles,
} from "../utils/constants";

export default function RSVPForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);

  if (state.succeeded) {
    return <p className={`${paragraphStyles}`}>Thanks for your submission!</p>;
  }

  return (
    <div id="rsvp">
      <h2 className={`${h2Styles}`}>RSVP</h2>
      <form onSubmit={handleSubmit}>
        {/* Yes/No Attendance */}
        <label className={`${labelStyles} block`} htmlFor="attending">
          Will you Attend?
        </label>
        <select
          className={`${inputStyles}`}
          name="attending"
          id="attending"
          required=""
        >
          <option value="" selected="" disabled="">
            Select
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        {/* Attendee Name(s) */}
        <label className={`${labelStyles} block`} htmlFor="name">
          Attendee Name(s)
        </label>
        <input
          placeholder={`Separate each name with a comma (Ex: John Smith, Jane Doe)`}
          className={`${inputStyles}`}
          id="name"
          type="name"
          name="name"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        {/* Email */}
        <label className={`${labelStyles} block`} htmlFor="email">
          Email Address
        </label>
        <input
          placeholder={`example@domain.com`}
          className={`${inputStyles}`}
          id="email"
          type="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        {/* Diet */}
        <label className={`${labelStyles} block`} htmlFor="diet">
          Please list any dietary restrictions you may have
        </label>
        <textarea
          placeholder={`Ex: vegan, gluten-free`}
          className={`${inputStyles}`}
          id="diet"
          name="diet"
        />
        <ValidationError prefix="Diet" field="diet" errors={state.errors} />

        {/* Message */}
        <label className={`${labelStyles} block`} htmlFor="message">
          Anything you'd like to add?
        </label>
        <textarea
          placeholder={`Can't wait...`}
          className={`${inputStyles}`}
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className={`${buttonStyles} block mt-4 mb-10`}
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
        <ValidationError errors={state.errors} />
      </form>
    </div>
  );
}
