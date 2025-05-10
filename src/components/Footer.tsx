import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return(
        <section className="text-center bg-blue-50 p-4 rounded-lg mt-10">
        <h2 className="text-2xl font-semibold mb-4">Stay in the Loop</h2>
        <div className='flex gap-2.5 justify-center cursor-pointer'>
        <FontAwesomeIcon icon={faFacebookF} size="xl" />
        <FontAwesomeIcon icon={faXTwitter} size="xl" />
        <FontAwesomeIcon icon={faInstagram} size="xl" />
        </div>
        <p className="text-gray-600 my-6">Subscribe to get the latest articles directly to your inbox.</p>
        <form className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-64"
          />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer">
            Subscribe
          </button>
        </form>
        <p className='my-3'>Copyright ©️ 2025</p>
      </section>
    )
}