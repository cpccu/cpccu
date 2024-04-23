import LiveIcon from "/src/assets/icons/live.png";
import TeleIcon from "/src/assets/icons/telephone.png";

export default function Contact() {
  return (
    <main>
      <section className="my-10 flex flex-col md:flex-row items-center  gap-7 mx-4 md:mx-0">
        <div className="flex md:flex-col gap-5 w-full">
          <Service img={LiveIcon} btnName={"Live Chat"} />
          <Service img={TeleIcon} btnName={"Live Call"} />
        </div>
        <div className="flex flex-col w-full">
          <input
            className="border px-3 py-2"
            type="text"
            placeholder="Enter your name"
          />
          <input
            className="border px-3 py-2"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            className="border px-3 py-2"
            type="text"
            placeholder="Enter your numer"
          />
          <textarea
            className="border px-3 py-2"
            placeholder="write your message"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </section>
      <section>
        <iframe
          className="w-full  h-80"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116750.90242842182!2d90.15730619726561!3d23.87309950000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c2102dc1cd51%3A0x6f95e92193fc8978!2sCity%20University%20Bangladesh!5e0!3m2!1sen!2sbd!4v1713914684922!5m2!1sen!2sbd"
          style={{ border: "0" }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
}

function Service({ img, btnName, btnLink }) {
  return (
    <div className="border w-full flex flex-col items-center justify-center px-5 md:px-28 py-5 rounded">
      <img className="w-16 mb-2" src={img} alt="live chat" />
      <p className="mb-4 font-semibold text-black/70">For Support</p>
      <button
        className="border px-3 py-2 font-semibold text-white bg-primary hover:bg-primary/90
          rounded hover:ring-1 ring-primary transition-all duration-300"
      >
        {btnName}
      </button>
    </div>
  );
}
