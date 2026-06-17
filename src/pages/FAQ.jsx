import React from "react";
import FAQSection from "../components/FAQSection"; // our accordion component

export default function FAQ() {
  const hearingAidFAQ = [
    {
      question: "What are the common types of hearing issues people face?",
      answer:
        "Common types of hearing issues include: Conductive hearing loss: Caused by blockages in the ear canal or middle ear. Sensorineural hearing loss: Resulting from damage to the inner ear or auditory nerve. Mixed hearing loss: A combination of both conductive and sensorineural hearing loss. Tinnitus: Ringing or buzzing sounds in the ears. Auditory processing disorders: Difficulty understanding speech despite normal hearing. Auditory neuropathy: Disrupted signals between the inner ear and the brain.",
    },
    {
      question: "How do I know if I have Hearing Loss?",
      answer:
        "Hearing loss can be due to various factors such as aging, noise exposure, medications, or medical conditions. Common signs include difficulty hearing conversations, ringing in the ears, or playing the TV or radio louder than others.",
    },
    {
      question:
        "What is the difference between an analogue and digital hearing aid?",
      answer:
        "Analogue aids may suffer from feedback and distorted noise, while digital aids offer precise sound processing and can adjust to the user’s hearing profile.",
    },
    {
      question:
        "I’m not deaf, I just have trouble hearing background noise. Do I really need a hearing aid?",
      answer:
        "If you frequently ask others to repeat themselves, have trouble understanding conversations, or experience difficulty hearing in noisy environments, a hearing aid could improve your hearing.",
    },
    {
      question: "What is a hearing aid and how does it work?",
      answer:
        "A hearing aid is an electronic, battery-operated device that amplifies sound. It contains a microphone, amplifier, and speaker to enhance sound for the user.",
    },
    {
      question: "Can hearing loss be cured by drugs or surgery?",
      answer:
        "Some hearing losses can be treated by drugs or surgery, but many find hearing aids recommended by a Hearing Aid Audiologist to be helpful.",
    },
    {
      question: "What causes hearing loss??",
      answer:
        "The main cause of hearing loss is age, but it can also result from disease, trauma, or long-term exposure to damaging noise.",
    },
  ];

  const centerFAQ = [
    {
      question: "What services do you provide?",
      answer:
        "We offer hearing tests, hearing aid fittings, hearing assessments, speech therapy, and language therapy.",
    },
    {
      question: "Can children benefit from your services?",
      answer:
        "Yes, we offer specialized services for children to support their communication and hearing development.",
    },
    {
      question: "Do you offer follow-up care for hearing aids?",
      answer:
        "Yes, we provide ongoing follow-up care and support to ensure optimal performance of hearing aids and user satisfaction.",
    },
    {
      question: "How can I schedule an appointment?",
      answer:
        "You can schedule an appointment by phone, email, or by visiting our center. Our staff will help you choose a convenient time.",
    },
    {
      question: "How do I know if I need a hearing aid?",
      answer:
        "Common signs include difficulty understanding conversations, frequently asking others to repeat themselves, or experiencing ringing in the ears.",
    },
    {
      question: "What is language therapy?",
      answer:
        "Language therapy helps individuals improve their ability to understand and use language effectively for better communication.",
    },
    {
      question: "What is speech therapy and how can it help?",
      answer:
        "Speech therapy focuses on improving communication skills, correcting speech disorders, and enhancing verbal and expressive abilities.",
    },
    {
      question: "What is involved in a hearing assessment?",
      answer:
        "A hearing assessment includes tests to evaluate hearing ability, identify the type and level of hearing loss, and recommend suitable solutions.",
    },
    {
      question:
        "What services do you provide at Nepal Hearing and Speech Care Center?",
      answer:
        "We provide hearing aid fitting and trials, complete hearing assessments, speech therapy, and language therapy services.",
    },
  ];

  return (
    <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
      <FAQSection
        title="FAQ on Hearing Aid and Related Services"
        data={hearingAidFAQ}
      />

      <FAQSection
        title="FAQ on Speech & Hearing Care Center"
        data={centerFAQ}
      />
    </div>
  );
}
