import { useForm, ValidationError } from "@formspree/react";
import {
  buttonStyles,
  h1Styles,
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
      <form onSubmit={handleSubmit}>
        {/* Yes/No Attendance */}
        <label className={`${labelStyles} block -mb-2`} htmlFor="attending">
          Will you Attend?&nbsp;<span className={`text-red`}>*</span>
        </label>
        <p className={`${paragraphStyles} mb-2`}>Note: This applies to all attendees listed in the next section.</p>
        
        <select
          className={`${inputStyles}`}
          name="attending"
          id="attending"
          required=""
        >
          <option value="Yes">Attending and vaccinated</option>
          <option value="No">Not attending</option>
        </select>

        {/* Attendee Name(s) */}
        <label className={`${labelStyles} block -mb-2`} htmlFor="name">
          Attendee Name(s)&nbsp;<span className={`text-red`}>*</span>
        </label>
        <p className={`${paragraphStyles} mb-2`}>
                Attendee names should only be those listed in the invitation you received.
              </p>
        <input
          placeholder={`Separate each name with a comma (Ex: John Smith, Jane Doe)`}
          className={`${inputStyles}`}
          id="name"
          type="name"
          name="name"
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        {/* Email */}
        <label className={`${labelStyles} block -mb-2`} htmlFor="email">
          Email Address&nbsp;<span className={`text-red`}>*</span>
        </label>
        <p className={`${paragraphStyles} mb-2`}>We will only send you important information and a confirmation.</p>
        <input
          placeholder={`example@domain.com`}
          className={`${inputStyles}`}
          id="email"
          type="email"
          name="email"
          required
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
