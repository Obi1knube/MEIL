import { useState } from "react"; // ✅ no default React import
import "./ChatCTA.css";

const CHAT_URL =
  "https://chatgpt.com/g/g-688f94f2188881919391e4254895cc90-mei-customer-service";

export default function ChatCTA() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a
        href={CHAT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mei-chat-fab"
        aria-label="Chat with MEI Assistant (opens in new tab)"
        title="Chat with MEI Assistant"
      >
        💬
      </a>

      <button
        className="mei-callout-fab"
        onClick={() => setOpen(true)}
        title="Request a Call-out"
        type="button"
      >
        🚑
      </button>

      <div className="mei-chat-disclaimer" role="note">
        Guidance only. For hazards, power down if safe and request an engineer.
        Weekend call-outs: +44 78 334 64 281
      </div>

      {open && (
        <div className="mei-modal-backdrop" onClick={() => setOpen(false)}>
          <div className="mei-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Request a Call-out</h3>
            <LeadForm onClose={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}

import PropTypes from "prop-types";

function LeadForm({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    postcode: "",
    machineType: "",
    faultSummary: "",
    urgency: "standard",
  });
  const [status, setStatus] = useState("idle");

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setTimeout(onClose, 1200);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={submit} className="mei-form">
      <label>
        Contact name*{" "}
        <input name="name" required value={form.name} onChange={update} />
      </label>
      <label>
        Company <input name="company" value={form.company} onChange={update} />
      </label>
      <label>
        Phone*{" "}
        <input name="phone" required value={form.phone} onChange={update} />
      </label>
      <label>
        Email{" "}
        <input name="email" type="email" value={form.email} onChange={update} />
      </label>
      <label>
        Site postcode*{" "}
        <input
          name="postcode"
          required
          value={form.postcode}
          onChange={update}
        />
      </label>
      <label>
        Machine type{" "}
        <input name="machineType" value={form.machineType} onChange={update} />
      </label>
      <label>
        Fault summary*{" "}
        <textarea
          name="faultSummary"
          required
          value={form.faultSummary}
          onChange={update}
        />
      </label>
      <label>
        Urgency
        <select name="urgency" value={form.urgency} onChange={update}>
          <option value="standard">Standard</option>
          <option value="urgent">Urgent</option>
          <option value="weekend">Weekend</option>
        </select>
      </label>

      <small>
        By submitting you consent to MEI contacting you about this request. Do
        not include sensitive personal data.
      </small>

      <button disabled={status === "sending"} type="submit">
        {status === "sending" ? "Sending..." : "Submit request"}
      </button>
      {status === "sent" && (
        <div className="ok">Request sent. We’ll contact you shortly.</div>
      )}
      {status === "error" && (
        <div className="err">
          Could not send. Try again or call +44 78 334 64 281.
        </div>
      )}
    </form>
  );
}

LeadForm.propTypes = {
  onClose: PropTypes.func.isRequired, // ✅ satisfies react/prop-types
};
