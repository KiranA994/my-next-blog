import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBedPulse, faFileImport, faToolbox, faUser } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { Card } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Landing() {
    return(
      <>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-col-3 md:grid-cols-2 sm:grid-cols-2 mx-2.5 my-6 gap-6">
    <div className="flex flex-col gap-6">
    <div className="bg-blue-200 text-indigo-400 p-2.5 rounded-[10px] w-[54px]">
    <FontAwesomeIcon icon={faFileImport} size="2xl" style={{color: "#74C0FC",}} />
    </div>
    <div className="border border-solid border-b-[#7F818596]"></div>
    <p className="font-inter text-xl text-bold">Post the blog</p>
    <p className="font-inter text-md text-light">Post your own blog today with a high quality and easy to use in minutes.</p>
    </div>
    <div className="flex flex-col gap-6">
    <div className="bg-blue-100 text-indigo-400 p-2.5 rounded-[10px] w-[54px]">
    <FontAwesomeIcon icon={faUser} size="2xl" style={{color: "#63E6BE",}} />
    </div>
    <div className="border border-solid border-b-[#7F818596]"></div>
    <p className="font-inter text-xl text-bold">Premium Support</p>
    <p className="font-inter text-md text-light">We are committed to providing the best support and response within 24 hours.</p>
    </div>
    <div className="flex flex-col gap-6">
    <div className="bg-blue-200 text-indigo-400 p-2.5 rounded-[10px] w-[54px]">
    <FontAwesomeIcon icon={faReact} size="2xl" style={{color: "#e00b0b",}} />
    </div>
    <div className="border border-solid border-b-[#7F818596]"></div>
    <p className="font-inter text-xl text-bold">Unlimited Updates</p>
    <p className="font-inter text-md text-light">Get the daily news and updates happening around the world.</p>
    </div>
        </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-col-2 md:grid-cols-2 sm:grid-cols-1">
      <Card className="bg-blue-50 p-6 mx-2.5 my-6 rounded-[10px]">
        <Card.Body>
          <Card.Title className="font-inter text-2xl">Beautiful Blogs</Card.Title>
          <Card.Text className="text-light text-md my-2.5">
          Our blogs is fully very lightweight which makes your informaion more meaningful.
          </Card.Text>
          <div className="flex gap-6 items-center">
          <FontAwesomeIcon icon={faBedPulse} size="2xl" style={{color: "#63E6BE",}} />
            <p>Blog tests Passed</p>
          </div>
        </Card.Body>
      </Card>
      <Card className="bg-blue-50 p-6 mx-2.5 my-6 rounded-[10px]">
        <Card.Body>
          <Card.Title className="font-inter text-2xl">Highly Customizable</Card.Title>
          <Card.Text className="text-light text-md my-2.5">
          It’s a free customizable blog theme and can effortlessly be customized according to your taste.
          </Card.Text>
          <div className="flex gap-6 items-cente">
          <FontAwesomeIcon icon={faToolbox} size="2xl" />
            <p>Optimized & Highly Customizable</p>
          </div>
        </Card.Body>
      </Card>
      </div>

      <div className="my-6">
        <h2 className="text-4xl text-bold font-inter text-indigo-500">Our Blogs</h2>
        <Marquee
          speed={100}
          gradient={true}
          pauseOnHover={true}
          direction="left"
        >
        <div className="flex gap-6 my-6">
          <div>
            <Image src="/img-0.webp" alt="image" width={500} height={500} />
          </div>
          <div>
          <Image src="/img2.webp" alt="image" width={500} height={500} />
          </div>
          <div>
          <Image src="/img3.webp" alt="image" width={500} height={500} />
          </div>
          <div>
          <Image src="/img5.webp" alt="image" width={500} height={500} />
          </div>
          <div>
          <Image src="/img6.webp" alt="image" width={500} height={500} />
          </div>
          <div>
          <Image src="/img7.webp" alt="image" width={500} height={500} className="w-[500px] h-auto"/>
          </div>
        </div>
        </Marquee>
      </div>

      <div className="bg-black p-6">
        <h2>Why Choose Our Blog?</h2>
        <p>Here are a few reasons why you should choose</p>

        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2.5 items-center">
          <div>
            <Image src="/search.svg" alt="image" width={150} height={150} className="m-auto" />
            <h4 className="text-bold text-white font-inter text-md">Increase Visibility</h4>
            <p className="text-bold text-white font-inter text-xl">With our friendly blogs, you can display your blogs, making it easier for potential clients to find you online.</p>
          </div>
          <div>
          <Image src="/seo.svg" alt="image" width={150} height={150} className="m-auto"  />
            <h4 className="text-bold text-white font-inter text-md">Boost Engagement</h4>
            <p className="text-bold text-white font-inter text-xl">Engaging layouts and beautiful pages keep visitors on your site longer, increasing the chances of conversion.</p>
          </div>
          <div>
          <Image src="/www.svg" alt="image" width={150} height={150} className="m-auto"  />
            <h4 className="text-bold text-white font-inter text-md">Free Subscribption</h4>
            <p className="text-bold text-white font-inter text-xl">Use free subscription to get daily updates and to post your blogs.</p>
          </div>
        </div>
      </div>
      </>
    )
}