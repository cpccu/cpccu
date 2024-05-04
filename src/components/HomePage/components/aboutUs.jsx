import LiveIcon from "/src/assets/icons/live.png";
import TeleIcon from "/src/assets/icons/telephone.png";
import contactIcon from "/src/assets/icons/contact.jpg";
import heroImg from "/src/assets/others/university.png";
import aboutIcon from "/src/assets/icons/aboutus.png";

export default function about_Us() {


	return (
		<main className="">
			<section className="flex relative">
				<img
					className=" h-40 md:h-80 w-full object-cover"
					src={aboutIcon}
					alt=""
				/>
				<div className=" absolute inset-0 bg-header/50 flex items-center justify-center">
					<h1 className="text-3xl md:text-5xl font-bold text-white font-custom">
						About Us
					</h1>
				</div>
			</section>
			{/* header section end */}
			
		</main>
	);
}
