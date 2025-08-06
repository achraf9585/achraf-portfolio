import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/app/components/contact/form";

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="w-full h-full -z-50 top-0 left-0 fixed object-cover object-center opacity-25"
      />

      <article className="relative w-full flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
          <h1 className="font-semibold text-4xl text-accent text-center capitalize">
            Summon the Wizard
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Step into the circle of enchantment and weave your words into the
            fabric of the cosmos. Whether you seek to conjure collaborations,
            unlock mysteries, or simply share tales of adventure, your messages
            are treasured scrolls within this realm. Use the form below to send
            your missives through the ethereal network, and await the whisper of
            magic in response.
          </p>
        </div>

        <Form />
      </article>
    </>
  );
}
