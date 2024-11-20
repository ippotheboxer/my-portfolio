import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xkgnzqnb");
  if (state.succeeded) {
      return <p>Thanks for contacting!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
      ʚ🌸 Your Email Address 🌸ɞ
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">
      ʚ🌸  Your Message 🌸ɞ
      </label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className='submitButton'>
        Submit
      </button>
    </form>
  );
}