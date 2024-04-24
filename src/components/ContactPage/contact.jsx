import LiveIcon from "/src/assets/icons/live.png";
import TeleIcon from "/src/assets/icons/telephone.png";
import contactIcon from "/src/assets/icons/contact.jpg";

export default function Contact() {
  return (
    <main className="">
      <section className="flex relative">
        <img
          className=" h-40 md:h-80 w-full object-cover"
          src={contactIcon}
          alt=""
        />
        <div className=" absolute inset-0 bg-header/50 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white font-custom">
            Contact us
          </h1>
        </div>
      </section>
      {/* header section end */}

      {/* Contact section start */}

      <section className="p-2 md:p-5 flex gap-3 md:gap-5 bg-black/10">
        <Service img={LiveIcon} btnName={"Live Chat"} />
        <Service img={TeleIcon} btnName={"Live Call"} />
      </section>

      {/* contact section end */}

      {/* map section start */}

      <section>
        <iframe
          className="w-full  h-80 loading"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116750.90242842182!2d90.15730619726561!3d23.87309950000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c2102dc1cd51%3A0x6f95e92193fc8978!2sCity%20University%20Bangladesh!5e0!3m2!1sen!2sbd!4v1713914684922!5m2!1sen!2sbd"
          style={{ border: "0" }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* map section end */}
    </main>
  );
}

function Service({ img, btnName, btnLink }) {
  return (
    <main className="flex gap-7 border items-center justify-between px-8 py-4 bg-white rounded shadow md:shadow-lg">
      <section className="flex flex-col items-center justify-center">
        <img src={img} alt={btnName} />
        <h1 className="font-semibold text-black/70 my-3 md:hidden">
          For Support
        </h1>
        <button className="md:self-start bg-primary hover:bg-primary/85 px-3 text-white md:px-5 py-2 md:mt-5 rounded transition-all duration-300">
          {btnName}
        </button>
      </section>
      <section className="hidden md:block">
        <h1 className="text-2xl font-bold mb-5 text-black/70">For Support</h1>
        <p className="text-black/75">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          similique soluta praesentium ipsam qui beatae at, officia quis magnam
          nemo?
        </p>
      </section>
    </main>
  );
}

function FromSection() {
  return (
    <from>
      <input
        className="py-2 px-3 border-b-2
       border-black/40 rounded-full outline-none"
        type="text"
      />
    </from>
  );
}
